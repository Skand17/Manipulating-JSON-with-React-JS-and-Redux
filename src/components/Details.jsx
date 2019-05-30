import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getProducts}  from '../actions/getProducts'
import {NavLink} from 'react-router-dom'

class Details extends Component {

    componentDidMount(){
        this.props.dispatch(getProducts())
    }

    render() {

        let name = this.props.updatedValues.product_listing_update.name
        let avail = this.props.updatedValues.product_listing_update.availability
        let weight = this.props.updatedValues.product_listing_update.Weight
        let editable = this.props.updatedValues.product_listing_update.IsEditable

        let UpdatedArray = [
            {
                name,
                avail,
                weight,
                editable
            }   
        ]

        return (
            <div>
                <div className="table-wrapper"> 
                <table className="table">
                    <tbody>
                        <thead>
                            <tr>
                                <th width="50%">Name</th>
                                <th width="20%">Weight</th>
                                <th width="20%">Availability</th>
                                <th width="10%">IsEditable</th>
                            </tr>
                        </thead>
                        {
                           this.props.defaultProduct.product_listing.map( (item, index) => {
                            return  <tr>
                                        <td key={index}>{item.name}</td>
                                        <td >{item.weight}</td>
                                        <td>{item.availability}</td>
                                        <td>{item.isEditable  ?  <NavLink to={'/editDetails/' + item.id }>Edit</NavLink> : ''}</td>
                                    </tr>
                            })  
                        }
                    </tbody>
                </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(Details);