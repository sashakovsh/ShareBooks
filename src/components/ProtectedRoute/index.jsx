import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
    
    ProtectedRoute.propTypes = {
        children: PropTypes.element,
      }

    if (!localStorage.authenticated) {
      return <Navigate to="/auth" replace />;
    }
    return children;
  };

export default ProtectedRoute;