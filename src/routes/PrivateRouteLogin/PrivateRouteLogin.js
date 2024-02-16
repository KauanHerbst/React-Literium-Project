import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../../services/UserService/UserService';

async function checkTokenValidity(userService, navigate) {
  try {
    const isValid = await userService.isTokenValid();
    return isValid;
  } catch (error) {
    return false;
  }
}

function PrivateRouteLogin({ children, element }) {
  const userService = new UserService();
  const navigate = useNavigate();
  const [tokenUserValid, setTokenUserValid] = useState(false);

  useEffect(() => {
    checkTokenValidity(userService, navigate).then((isValid) => {
      setTokenUserValid(isValid);
    });
  }, [userService, navigate]);

  return tokenUserValid ? element : children;
}
export default PrivateRouteLogin;
