import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {BrowserRouter} from "react-router-dom";

import App from './App';

import './reset.css'
import './font.scss'
import './general.scss'
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter basename="/callby">
          <Provider store={store}>
              <App />
          </Provider>
      </BrowserRouter>

  </React.StrictMode>
);
