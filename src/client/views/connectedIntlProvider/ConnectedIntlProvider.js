import React from "react";
import { connect } from 'react-redux';
import { IntlProvider,FormattedMessage } from "react-intl";
import {messages} from '../../config/translation';

const ConnectedIntlProvider = ({children, language}) => (
  <IntlProvider locale={language} messages={messages[language]}>
    {children}
  </IntlProvider>
)

const mapStateToProps = state => ({
  language: state._language
})

export default connect(mapStateToProps)(ConnectedIntlProvider);