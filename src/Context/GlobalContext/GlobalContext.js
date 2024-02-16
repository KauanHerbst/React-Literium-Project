import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import FavoriteService from '../../services/FavoriteService/FavoriteService';
import UserService from '../../services/UserService/UserService';
import OrderService from '../../services/OrderService/OrderService';

export const GlobalContext = React.createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const favoriteService = new FavoriteService();
  const orderService = new OrderService();
  const userService = new UserService();
  let userDataLocal = null;

  const InitialStates = {
    userData: null,
    favoriteData: [],
    orderData: [],
    isReloading: false,
  };

  function userSession() {
    userDataLocal = JSON.parse(localStorage.getItem('userData'));
    if (userDataLocal) {
      return userDataLocal;
    }
    return null;
  }

  async function userFavoriteData() {
    userDataLocal = JSON.parse(localStorage.getItem('userData'));
    if (userDataLocal) {
      try {
        const response = await favoriteService.findAllFavorites(
          userDataLocal.id
        );
        return response;
      } catch (e) {
        console.log(e);
      }
    }
    return null;
  }

  async function userOrderData() {
    userDataLocal = JSON.parse(localStorage.getItem('userData'));
    if (userDataLocal) {
      try {
        const response = await orderService.findAllOrders(userDataLocal.id);
        return response;
      } catch (e) {
        console.log(e);
      }
    }
    return null;
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'RELOAD_COMPONENT': {
        return { ...state, isReloading: !state.isReloading };
      }
      case 'LOAD_SESSION': {
        const data = userSession();
        return { ...state, userData: data };
      }
      case 'LOAD_FAVORITE': {
        return { ...state, favoriteData: action.payload };
      }
      case 'LOAD_ORDER': {
        return { ...state, orderData: action.payload };
      }
      case 'LOUGOUT': {
        return {
          ...state,
          userData: null,
          favoriteData: [],
          orderData: [],
          isReloading: !state.isReloading,
        };
      }
      default:
        return state;
    }
  };

  const [globalState, dispatch] = React.useReducer(reducer, InitialStates);

  React.useEffect(() => {
    userService.isTokenValid();
    dispatch({ type: 'LOAD_SESSION' });

    async function handleFavorite() {
      try {
        const response = await userFavoriteData();
        dispatch({ type: 'LOAD_FAVORITE', payload: response });
      } catch (e) {
        console.log(e);
      }
    }

    async function handleOrder() {
      try {
        const response = await userOrderData();
        dispatch({ type: 'LOAD_ORDER', payload: response });
      } catch (e) {
        console.log(e);
      }
    }

    handleFavorite();
    handleOrder();
  }, [globalState.isReloading]);

  return (
    <GlobalContext.Provider value={{ globalState, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
