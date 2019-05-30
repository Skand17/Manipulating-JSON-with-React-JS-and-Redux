import React, { Component } from 'react';
import { Formik, Field} from "formik";
import {connect } from 'react-redux'
import InputField from '../helpers/inputField'
import swal from 'sweetalert';
import {NavLink} from 'react-router-dom'
import {updateDetails} from '../actions/getProducts'
import customSelect from '../helpers/reactSelect'
import {  Budgetoptions } from  "../helpers/seletOptions"
import {  Premireoptions } from  "../helpers/seletOptions"
import {validation } from "../helpers/Validation"


class editDetails extends Component {

    constructor(props){
        super(props)
        this.state ={
            dropdown : true
        }   
    }
    

    // Select2 setFieldValue
    changeRangeValue = (pricerange, setFieldValue) => {
        setFieldValue('pricerange', pricerange, true);
    }	

    // Update Value

    updateValue(values){

        var responseData = {
            name : values.name,
            Weight : values.weight,
            availability :  values.availability,
            IsEditable : values.editable
         }
         
         this.props.dispatch(updateDetails(responseData))
         this.props.history.push('/')   
    }

    changeRange(e){
        if(e.target.value === 'budget'){
            this.setState({
                dropdown : false
            })
        }
        else if(e.target.value === 'permier'){
            this.setState({
                dropdown : true
            })
        }
    }

    render() {
        
        return (
            <div className="container">
                <Formik
                    initialValues={{
                        name : "",
                        weight : "",
                        availability : "",
                        pricetier : "",
                        url : "",
                        editable : "",
                        pricerange : "",
                    }}
                    onSubmit={(values, { resetForm, props }) => {
                        var priceTier = values.pricetier
                        var editable = values.editable

                            if(priceTier == ''){
                                swal('Price Tier is Missing')
                            }
                            else if(editable == false){
                                swal('Editable Should be checked')
                            }
                            else
                            {
                                this.updateValue(values)
                            }
                    }}
                    validationSchema={validation}
                    render={({ handleSubmit, setFieldValue,}) => (
                            <div className="form-wrapper">
                                <h2 className="edit-form">Edit Form.</h2>
                                <NavLink to="/" className="back-link">Back</NavLink>
                                <form onSubmit={handleSubmit}>
                                        <div className="form-wrapper">
                                            <div className="form-group">
                                                <label>Name</label>
                                                <Field type="text" name="name" component={InputField} className="form-control"></Field>	
                                            </div>
                                            <div className="form-group">
                                                <label>Weight</label>
                                                <Field type="text" name="weight" component={InputField} className="form-control"></Field>	
                                            </div>
                                            <div className="form-group">
                                                <label>Availability</label>
                                                <Field type="number" name="availability" component={InputField} className="form-control"></Field>	
                                            </div>
                                            <div className="form-group">
                                                <label>Product URL</label>
                                                <Field type="test" name="url" component={InputField} className="form-control"></Field>	
                                            </div>
                                            <div className="form-group">
                                                <label className="price-block">Price Tier</label>
                                                <Field type="radio" name="pricetier" value="budget"></Field>
                                                <label className="p-r-10">Budget</label>	
                                                <Field type="radio" name="pricetier"  value="permier" ></Field>	
                                                <label>Premier</label>
                                            </div>
                                            <div className="form-group">
                                                <label>Price Range</label>
                                                <Field name="pricerange" component={customSelect} options={Premireoptions} onChange={(e) => { this.changeRangeValue(e, setFieldValue)}}  className="form-control"></Field>	
                                            </div>
                                            <div className="form-group editable-block">
                                                <Field type="checkbox" name="editable"></Field>	
                                                <label>Is Editable</label>
                                            </div>
                                            <button  className="btn submit-btn">Submit</button>
                                        </div>
                                    </form> 
                            </div>  
                    )}
                    />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(editDetails);