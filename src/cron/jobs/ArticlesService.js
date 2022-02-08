const axios = require('axios');

class ConnectArticles {
  constructor() {
    this.baseUrl = 'https://api.spaceflightnewsapi.net/v3',
      this.axiosInstance = axios.create({
        baseURL: this.baseUrl,
        timeout: 120000,
      })
  };

  async listArticles() {
    try {
      const requestConfig = {
        method: 'get',
        url: '/articles',
        params: {
          _limit: 12061
        }
      };

      const articlesResponse = await this.axiosInstance.request(requestConfig);

      const listArticles = articlesResponse.data;

      return listArticles;
    } catch (error) {
      return error
    }
  }
}

module.exports = new ConnectArticles();
