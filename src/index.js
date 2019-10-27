import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


let appState = {};

const rootReducer = (state = appState, action) => {
    
    if (action.type === 'UPDATE_ITEMS') {
        
        let items = action.items


        return {
            items: items,
            authorized: true,
            client_id: 'gt_goofy_bose',
            'client_secret': '007a0038-0035-0079-5b00-3b0045005e00'
        }

    }

    return state;
    
}

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
