import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const ProtectedRoute = ({ auth, children }) => {
    
    ProtectedRoute.propTypes = {
        auth: PropTypes.bool,
        children: PropTypes.element,
      }

    if (!auth) {
      return <Navigate to="/auth" replace />;
    }
    return children;
  };

export default ProtectedRoute;