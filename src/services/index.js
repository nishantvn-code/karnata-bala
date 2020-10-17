
const axios = require('axios');

const post_service_call = async (url, data) => {
    const response = await axios.post(url,data)
      .then(response => {
        if(response && response.data && response.data.error){
            return response;
        }
        if(response && response.data.success && response.data.error === null) {
            console.log('save success post response ', response);
            return response;
        }
      })
      .catch(error => {
        console.log('post response error',error);
        return error;
      });
      return response;
};
// function getUserAccount() {
//     return axios.get('/user/12345');
//   }
export const saveUserDetail = async (data) => {
    debugger
    const saveUserUrl = 'http://localhost:5000/saveUserDetails';
    if(data) {
        const response = await post_service_call(saveUserUrl, data);
        if(response && response.data && response.data.error){
            console.log('Error while getting user details');
            return false;
        } else if(response && response.data.success && response.data.error === null) {
            return true;
        }
    }
};

export const postService =  (url, payload) =>  axios.post(url,payload);

export const getService = (url, auth) => axios.get(url, {
    headers: {
     'Content-Type': 'application/json',
      'Authorization': auth
    },
    params: {filter: {"limit":20,"skip":0,"where":{"agentId":"5bcee5bafe751a289f6154cf"}}}
  });