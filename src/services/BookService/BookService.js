import axios from 'axios';
import UserService from '../UserService/UserService';

export default class BookService {
  constructor() {
    this.dataObject = {};
    this.errors = [];
    this.success = false;
    this.userService = new UserService();
  }

  async sendBookData(bookData) {
    this.userService.isTokenValid();
    this.checkData(bookData);
    const { token } = JSON.parse(localStorage.getItem('userData'));
    if (this.errors.length > 0) return [this.success, this.errors];
    try {
      if (token) {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/books`,
          this.dataObject,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        console.log(response);
        if (response.status === 201) this.success = true;
      }
    } catch (e) {
      this.errors.push('Error ao Cadastrar livro tente novamente em breve!');
      return [this.success, this.errors];
    }
    return [this.success, this.errors];
  }

  checkData(bookData) {
    if (!bookData.name) this.errors.push('Campo Nome Vazio!');
    if (!bookData.author) this.errors.push('Campo Autor Vazio!');
    if (!bookData.year) this.errors.push('Campo Ano Vazio!');
    if (!bookData.price) this.errors.push('Campo Preço Vazio!');
    if (!bookData.category) this.errors.push('Campo Categoria Vazio!');
    if (!bookData.imageUrl) this.errors.push('Campo Imagem Vazio!');

    if (this.errors.length === 0) {
      this.dataObject = {
        name: bookData.name,
        description: bookData.description,
        year: bookData.year,
        author: bookData.author,
        price: bookData.price,
        imageUrl: bookData.imageUrl,
        categories: [JSON.parse(bookData.category)],
      };
    }
  }

  async findBookById(id) {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/books/${id}`
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  async findBooksByCategory(id, page, size) {
    page = page || 0;
    size = size || 6;
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/categories/${id}/books?page=${page}&size=${size}`
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  async updateBookById(dataBook, id) {
    this.userService.isTokenValid();
    this.checkData(dataBook);
    if (this.errors.length > 0) return [this.success, this.errors];
    const { token } = JSON.parse(localStorage.getItem('userData'));
    if (token) {
      try {
        console.log(this.dataObject);
        const response = await axios.put(
          `${process.env.REACT_APP_API_URL}/books/${id}`,
          this.dataObject,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        this.success = true;
      } catch (e) {
        console.log(e);
      }
    }
    return [this.success, this.errors];
  }

  async findBookByPage(numberPage) {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/books?size=9&page=${numberPage}&sort=id`
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  async deleteBook(id) {
    this.userService.isTokenValid();
    const { token } = JSON.parse(localStorage.getItem('userData'));
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/books/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response);
      if (response.status === 204) {
        this.success = true;
        return this.success;
      }
      return response.data.status;
    } catch (e) {
      this.errors.push(e.response.data.message);
      console.log(e);
    }
    return null;
  }

  async findByName(name, numberpage) {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/books/name/${name}?sort=id&size=9&page=${numberpage}`
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
    return null;
  }
}
