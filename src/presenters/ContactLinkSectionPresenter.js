import history from '../history';

export const isCurrentRouteInWhiteListRoutes = routesArray => {
	let currentRoute = history.location.pathname;

	let currentRouteWithoutSlash = currentRoute.replace('/', '');

	return routesArray.includes(currentRouteWithoutSlash);
};
