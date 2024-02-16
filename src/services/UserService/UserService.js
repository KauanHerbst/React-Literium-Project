import axios from 'axios';

export default class UserService {
  constructor() {
    this.axios = axios.create({ baseURL: 'http://localhost:8080' });
    this.errors = [];
    this.success = false;
  }

  isValid(email, senha) {
    if (email && senha) {
      return true;
    }
    return false;
  }

  isFieldsValid(accountData) {
    if (!accountData.name) this.errors.push('Campo Nome Vázio!');
    if (!accountData.email) this.errors.push('Campo Email Vázio!');
    if (!accountData.password) this.errors.push('Campo Senha Vázio!');
  }

  async isTokenValid() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    try {
      if (userData) {
        const { token } = userData;
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/auth/valid`,
          { token },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.status === 200) {
          return true;
        }
        return false;
      }
    } catch (error) {
      localStorage.removeItem('userData');
      console.log(error);
      return false;
    }

    return false;
  }

  async sendLogin(email, senha) {
    try {
      if (!this.isValid(email, senha)) this.errors.push('Campos Inválidos!');
      if (this.errors.length > 0) {
        return [this.success, this.errors];
      }

      const credentials = { email, password: senha };
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        credentials
      );
      const userData = response.data;
      localStorage.setItem('userData', JSON.stringify(userData));
      this.success = true;
    } catch (e) {
      this.errors.push(e.response.data.message);
      return [this.success, this.errors];
    }

    return [this.success, this.errors];
  }

  isUserAdmin() {
    let isAdmin = false;
    const dados = localStorage.getItem('userData');
    if (dados) {
      const { roles } = JSON.parse(dados);
      roles.forEach((role) => {
        if (role.authority === 'ROLE_ADMIN') isAdmin = true;
      });
    }
    return isAdmin;
  }

  async createaAccount(accountData) {
    this.isFieldsValid(accountData);
    if (this.errors.length > 0) return [this.success, this.errors];
    this.errors.push('Sistema de Criação de Conta Desativado');
    return [this.success, this.errors];
  }
}
