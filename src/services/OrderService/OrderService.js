import axios from 'axios';
import UserService from '../UserService/UserService';

export default class OrderService {
  constructor() {
    this.userService = new UserService();
  }

  async findAllOrders(userId) {
    const { token } = JSON.parse(localStorage.getItem('userData'));
    this.userService.isTokenValid();
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/orders/${userId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.content;
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  async removeOrder(bookId, userId) {
    const { token } = JSON.parse(localStorage.getItem('userData'));
    this.userService.isTokenValid();
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/orders/${userId}/${bookId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response;
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  async addOrder(bookId, userId, amount) {
    const { token } = JSON.parse(localStorage.getItem('userData'));
    this.userService.isTokenValid();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/orders/insert/${userId}/${bookId}`,
        { amount },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response;
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  async updateOrder(bookId, userId, amount) {
    const { token } = JSON.parse(localStorage.getItem('userData'));
    this.userService.isTokenValid();
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/orders/${userId}/${bookId}`,
        { amount },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response;
    } catch (e) {
      console.log(e);
    }
    return null;
  }
}
