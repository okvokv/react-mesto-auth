import { Navigate } from 'react-router-dom';

//функция перенаправления в зависимости от состояния индикатора входа пользователя
function ProtectedRoute(props) {
	return (
		props.loggedIn ? props.element : <Navigate to='/sign-in' replace />
	)
};

export default ProtectedRoute;