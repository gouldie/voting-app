import React from 'react';
import { auth } from '../../utils/utils'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { RingLoader, PulseLoader } from 'react-spinners'

class PrivateRoute extends React.Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      isAuthenticated: false,
    }
  }
  
  componentDidMount() {
    auth().then(res => {
      this.setState({
        loading: false,
        isAuthenticated: res.username,
      })
    })
  }

  render() {
    const { component: Component, ...rest } = this.props;
    if (this.state.loading) {
      return null
    } else {
      return (
        <Route {...rest} render={props => (
          <div>
            {!this.state.isAuthenticated && <Redirect to={{ pathname: '/', state: { from: this.props.location } }} />}
            <Component {...this.props} />
          </div>
          )}
        />
      )
    }
  }
}

export default PrivateRoute