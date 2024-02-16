import React from 'react';
import UserService from '../../services/UserService/UserService';

function PrivateRouteAdmin({ children, element }) {
  const [isUserAdmin, setIsUserAdmin] = React.useState(false);
  const userService = new UserService();
  React.useEffect(() => {
    function isAdmin() {
      setIsUserAdmin(userService.isUserAdmin());
    }
    isAdmin();
  }, []);

  return isUserAdmin ? element : children;
}

export default PrivateRouteAdmin;
