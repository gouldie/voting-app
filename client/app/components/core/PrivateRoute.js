import React from 'react';
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

class PrivateRoute extends React.Component {
  constructor() {
    super()
  }

  render() {
    const { component: Component, ...rest } = this.props

    return (
      <Route {...rest} render={props => (
        <div>
          {!this.props.isAuthenticated && <Redirect to={{ pathname: '/', state: { from: this.props.location } }} />}
          <Component {...this.props} />
        </div>
        )}
      />
    )
  }
}

export default connect((state) => ({
  isAuthenticated: state.auth.isAuthenticated
}), null, null, { pure: false, })(PrivateRoute)