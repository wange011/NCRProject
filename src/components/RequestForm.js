import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import QRCode from 'qrcode.react'

class RequestForm extends Component {

    constructor(props) {
        
        super(props);
        
        this.state = {
            qrValue: ""
        }
    
    }

    handleGenerate = (e, id, secret, name, price) => {
        
        const quantity = e.target.parentNode.parentNode.getElementsByClassName('Quantity')[0].getElementsByTagName('input')[0].value;

        const json = {
            "c_id": id,
            "c_secret": secret,
            "i_name": name,
            "i_price": price,
            "qty": quantity
        }

        this.setState({
            qrValue: JSON.stringify(json)
        })

        document.getElementsByTagName('canvas')[0].style.visibility = 'visible';
        document.getElementById('back').style.visibility = 'visible';
        document.getElementsByClassName('RequestForm')[0].style.visibility = 'hidden';

    }

    handleBack = () => {

        document.getElementsByTagName('canvas')[0].style.visibility = 'hidden';
        document.getElementById('back').style.visibility = 'hidden';
        document.getElementsByClassName('RequestForm')[0].style.visibility = 'visible';

    }

    render(){
        
        if (this.props.selected) {

            return (
                <div className="RequestForm">

                    <Button id="back" variant="contained" size="medium" color="primary" onClick={(e) => this.handleBack()}> Back </Button>

                    
                    <div className="RequestInputs">    
                        <TextField label="Item Name" value={this.props.selected.name} InputProps={{readOnly: true,}}/>
                        <TextField label="Item Price" value={this.props.selected.price} InputProps={{readOnly: true,}}/>
                        <TextField className="Quantity" label="Quantity" type="number" defaultValue="1"/>
                        <Button variant="contained" size="medium" color="primary" onClick={(e) => this.handleGenerate(e, this.props.client_id, this.props.client_secret, this.props.selected.name, this.props.selected.price)}> Request </Button>
                    </div>

                    <QRCode value={this.state.qrValue} />

                </div>
            )

        } else {

            return (
                <div className="RequestForm">

                </div>
            )
        
        }

    }  

}

const mapStateToProps = (state) => {
    return {
        client_id: state.client_id,
        client_secret: state.client_secret
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editListName: (id, text) => {
            dispatch({type: 'EDIT_LIST_NAME', id: id, text: text})
        },
        deleteList: (id) => {
            dispatch({type: 'DELETE_LIST', id: id})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestForm);