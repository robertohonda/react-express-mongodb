import React from "react";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { persistor, store } from '../../config/store';
import ConnectedIntlProvider from "../connectedIntlProvider/ConnectedIntlProvider";
import AppRouter from "../../routes/AppRouter";
import { MuiThemeProvider } from '@material-ui/core'
import theme from '../../styles/theme'

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedIntlProvider>
          <AppRouter />
        </ConnectedIntlProvider>
      </PersistGate>
    </Provider>
  </MuiThemeProvider>
)


export default App;