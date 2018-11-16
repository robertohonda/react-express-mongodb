import React from "react";
import { IntlProvider, FormattedMessage } from "react-intl";
import {language, messages} from '../../config/translation';

const App = () => 
  <IntlProvider locale={language} messages={messages[language]}>
    <h1>
      <FormattedMessage id="home.title" />
    </h1>
  </IntlProvider>


export default App;