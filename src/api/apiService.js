import axios from 'axios';

export default {
  async getRepos() {
    return await axios.get('/api/user/github/gabrielvonplaten');
  },
}