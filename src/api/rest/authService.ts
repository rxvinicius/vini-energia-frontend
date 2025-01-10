import api from './apiConfig';

class AuthService {
  private api;

  constructor() {
    this.api = api;
  }

  login(credentials: { email: string; password: string }): Promise<any> {
    return this.api.post('/auth/login', credentials);
  }

  register(credentials: {
    email: string;
    name: string;
    password: string;
  }): Promise<any> {
    return this.api.post('/auth/register', credentials);
  }
}

export default new AuthService();
