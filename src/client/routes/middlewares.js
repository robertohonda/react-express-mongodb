import { connect } from 'react-redux';
import React from 'react'
import {RedirectLogin} from '../helpers/routes'

const authentication = (Component) => ({ user }) => <Component />







const mapStateToProps = state => ({
  user: state._language
})

export const authenticationMiddleware = 
  (Component) => connect(mapStateToProps)(authentication(Component))