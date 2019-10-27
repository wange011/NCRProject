import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {

    handleLogin = (e) => {
        
        const client_id = e.target.parentNode.getElementsByClassName('LoginField')[0].value;
        const client_secret = e.target.parentNode.getElementsByClassName('LoginField')[1].value;
        this.props.login(client_id, client_secret);
    }

    render(){
    
        return (
            <div className="Login">
                <div className="LoginContainer">
                    <div className="LoginInputContainer">
                        <input className="LoginField" placeholder="Client_Id" />
                        <input className="LoginField" placeholder="Client_Secret" />
                    </div>
                    
                    <button onClick={(e) => this.handleLogin(e)}> Login </button>

                </div>   
            </div>    
        );

    }  

}

const mapStateToProps = (state) => {
    return {
        lists: state.lists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (id, secret) => {
            

            /* 'client_id': 'gt_goofy_bose',
            'client_secret': '007a0038-0035-0079-5b00-3b0045005e00' */

            /* const authenticate = async () => {
            
                const response = await fetch('http://localhost:8010/proxy/v2/oauth2/token', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'client_id': id,
                        'client_secret': secret
                    },
                });
                
                
                const json = await response.json();            
        
                if (json.IsSuccessful) {
        
                    const token = json.Result.AccessToken;
        
                    const inventory = await fetch('http://localhost:8010/proxy/v2/inventory/items', {
                        method: 'GET',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + token
                        },
                    });
        
                    const items = await inventory.json();
                    
                    return items.Result;
        
                }
        
            } 
            
            authenticate().then((items) => {
                
                dispatch({type: 'UPDATE_ITEMS', items: items})
            
            }) */

            dispatch({type: 'UPDATE_ITEMS', items: [{Name: "Water", RetailPrice: 4}, {Name: "Glass", RetailPrice: 3}]})

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
