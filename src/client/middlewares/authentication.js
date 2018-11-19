import React from 'react'
import { connect } from 'react-redux';

const authenticationMiddleware = (Component) => () => <Component />

const mapStateToProps = state => ({
})

export default (Component) => connect(mapStateToProps)(authenticationMiddleware(Component))