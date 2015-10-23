import axios from 'axios';

var helpers = {
  getGithubInfo(username) {
    return axios.all([getRepos(username), getUserInfo(username)])
      .then((arr) => {
        return {
          repos: arr[0].data,
          bio: arr[1].data
        };
      });
  }
};

function getRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/repos`);
}

function getUserInfo(username) {
  return axios.get(`https://api.github.com/users/${username}`);
}

export default helpers;
