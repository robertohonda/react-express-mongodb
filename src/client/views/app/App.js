import React from "react";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { persistor, store } from '../../config/store';
import ConnectedIntlProvider from "../connectedIntlProvider/ConnectedIntlProvider";
import AppRouter from "../../routes/AppRouter";

const App = () =>(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedIntlProvider>
        <AppRouter />
      </ConnectedIntlProvider>
    </PersistGate>
  </Provider>
)


export default App;