import axios from 'axios';

export default {
  async login(email, password) {
    return await axios.post('/api/auth', { email, password })
  },

  async getAdminData(token) {
    return await axios.get('/api/auth', {
      headers: { 
        'x-auth-token': token 
      }})
  }
}

