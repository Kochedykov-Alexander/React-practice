import About from "../pages/About";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import Error from "../pages/Error";

export const privateRoutes = [
	{path: '/about', component: About, exact: true},
	{path: '/posts', component: Posts, exact: true},
]

export const publicRoutes = [
	{path: '/error', component: Error, exact: true},
	{path: '/login', component: Login, exact: true}
]

