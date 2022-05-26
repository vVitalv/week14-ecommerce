/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route, Redirect } from 'react-router-dom'

import store, { history } from '../redux'

import Home from '../components/home'
import Product from '../components/content/product/product'
import Basket from '../components/cart/basket'
import Search from '../components/hat/search/search'
import Registration from '../components/hat/auth/registration/registration'
import Logs from '../components/logs/logs'
import NotFound from '../components/404'

import Startup from './startup'

const OnlyAnonymousRoute = ({ component: Component, ...rest }) => {
  const func = (props) =>
    !!rest.user && !!rest.user.name && !!rest.token ? (
      <Redirect to={{ pathname: '/' }} />
    ) : (
      <Component {...props} />
    )
  return <Route {...rest} render={func} />
}

const RootComponent = (props) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history} location={props.location} context={props.context}>
        <Startup>
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/product/:id" component={() => <Product />} />
            <Route exact path="/basket" component={() => <Basket />} />
            <Route exact path="/search/:query" component={() => <Search />} />
            <Route exact path="/logs" component={() => <Logs />} />
            <OnlyAnonymousRoute exact path="/registration" component={() => <Registration />} />
            <Route component={() => <NotFound />} />
          </Switch>
        </Startup>
      </ConnectedRouter>
    </Provider>
  )
}

export default RootComponent
