import axios from 'axios';
import UserService from '../UserService/UserService';

export default class FavoriteService {
  constructor() {
    this.userService = new UserService();
  }

  async findAllFavorites(id) {
    this.userService.isTokenValid();
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/favorites/${id}`
      );
      return response.data.content;
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  async removeFavorite(bookId, userId) {
    const { token } = JSON.parse(localStorage.getItem('userData'));
    this.userService.isTokenValid();
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/favorites/${userId}/${bookId}`,
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

  async addFavorite(bookId, userId) {
    const { token } = JSON.parse(localStorage.getItem('userData'));
    this.userService.isTokenValid();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/favorites/insert/${userId}/${bookId}`,
        null,
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
}
