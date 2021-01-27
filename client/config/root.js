import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import store, { history } from '../redux'
import Home from '../components/home'
import Basket from '../components/basket'

const Root = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/basket" component={() => <Basket />} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  )
}

export default Root
