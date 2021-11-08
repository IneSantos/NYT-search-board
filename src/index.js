import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { configureStore } from "./services/redux/configure-store";
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRoutes from "./routes/routes";

const { store, persistor } = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
