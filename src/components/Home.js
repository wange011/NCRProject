import React, { Component } from 'react';
import RequestForm from './RequestForm'
import { connect } from 'react-redux';

class Home extends Component {

    constructor(props) {
        
        super(props);
        
        this.state = {
            selected: null
        }
    
    }

    handleSelect = (name, price) => {
        
        this.setState({
            selected: {
                name: name,
                price: price
            }
        })

    }

    render(){
        
        var itemList = this.props.items.map( (item) => {
            return(
                <div className="itemContainer" onClick={() => this.handleSelect(item.Name, item.RetailPrice)}>
                    <div className="itemName">
                        <p>{item.Name}</p>
                    </div>
                    <div className="itemPrice">
                        <p>{item.RetailPrice}</p>
                    </div>
                </div>   
            )
        })

        return (
            <div className="Home">            
                
                <div className="ItemList">
                    {itemList}
                </div>

                <RequestForm selected={this.state.selected}/>

            </div>
        );

    }  

}

const mapStateToProps = (state) => {
    return {
        items: state.items
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);