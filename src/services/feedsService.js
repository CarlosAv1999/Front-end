import axios from 'axios';
import { BASE_BACKEND_URL } from '../shared/consts/envar';

function feedsService() {
  function create(feeds) {
    let feedj = JSON.stringify(feeds);
    return axios({
      method: 'GET',
      baseURL: BASE_BACKEND_URL,
      url: `postFeed.php/?feeds=${feedj}`,
    });
  }
  
  function all() {
    return axios({
      method: 'GET',
      baseURL: BASE_BACKEND_URL,
      url: 'feeds.php'
    });
  }

  function updateAll(){
    return axios({
      method: 'GET',
      baseURL: BASE_BACKEND_URL,
      url: 'refresh.php'
    });
  }

  function news(id){
    return axios({
      method: 'GET',
      baseURL: BASE_BACKEND_URL,
      url: `newsfeed.php/?id=${id}`
    });
  }

  return {
    create,
    all,
    updateAll,
    news
  };
}

export { feedsService };