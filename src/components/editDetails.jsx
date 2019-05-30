import React, { Component } from 'react';
import { Formik, Field} from "formik";
import InputField from '../helpers/inputField'
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
    

    changeRangeValue = (pricerange, setFieldValue) => {
        setFieldValue('pricerange', pricerange, true);
    }	

    changeRange(e){
        if(e.target.value == 'budget'){
            this.setState({
                dropdown : false
            })
        }
        else if(e.target.value == 'permier'){
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
                        url : "",
                        pricerange : "",
                    }}
                    onSubmit={(values, { resetForm, props }) => {
                        console.log(values)
                    }}
                    validationSchema={validation}
                    render={({
                        errors, 
                        touched,
                        isValidating,
                        isValid,
                        handleSubmit,
                        setFieldValue,
                        values
                
                    }) => (
                            <div className="form-wrapper">
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
                                                <Field type="radio" name="pricetier" value="budget" onChange={this.changeRange.bind(this)}></Field>
                                                <label className="p-r-10">Budget</label>	
                                                <Field type="radio" name="pricetier"  value="permier" onChange={this.changeRange.bind(this)}></Field>	
                                                <label>Premier</label>
                                            </div>
                                            <div className="form-group">
                                                <label>Price Range</label>
                                                <Field name="pricerange" component={customSelect} options={this.state.dropdown ? Premireoptions  : Budgetoptions} onChange={(e) => { this.changeRangeValue(e, setFieldValue)}}  className="form-control"></Field>	
                                            </div>
                                            <div className="form-group editable-block">
                                                <Field type="checkbox" name="editable"></Field>	
                                                <label>Is Editable</label>
                                            </div>
                                            <button disabled className="btn submit-btn">Submit</button>
                                        </div>
                                    </form> 
                            </div>  
                    )}
                    />
            </div>
        );
    }
}

export default editDetails;