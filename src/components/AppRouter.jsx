import React, {useContext} from 'react'
import {Route, Switch, Redirect } from 'react-router-dom'
import { AuthContext } from '../context/context'
import { publicRoutes, privateRoutes } from '../router/routes'

export default function AppRouter() {

  const {isAuth, setIsAuth} = useContext(AuthContext)

	return (
	
    isAuth 
    ? 
	    <Switch>
        {privateRoutes.map(item => 
          <Route path={item.path} component={item.component} exact={item.exact}/>
        )}
      <Redirect to = "/posts"/>
	  </Switch>
    :
    <Switch>
        {publicRoutes.map(item => 
          <Route path={item.path} component={item.component} exact={item.exact}/>
        )}
      <Redirect to = "/login"/>
	  </Switch>

   
	)
}
