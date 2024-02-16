import axios from 'axios';

export default class CategoryService {
  async findCategories() {
    let response = null;
    try {
      response = await axios.get(`${process.env.REACT_APP_API_URL}/categories`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
    return response.data;
  }

  async findById(id) {
    let response = null;
    try {
      response = await axios.get(
        `${process.env.REACT_APP_API_URL}/categories/${id}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
    return response.data;
  }
}
