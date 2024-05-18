import axios from 'axios';

const filmsAPi = async searchValue => {
  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?i=tt3896198&apikey=e9dc5fd8&s=${searchValue}`
    );
    return response.data;
  } catch (error) {
    console.log('Cant make request', error);
    errormsg.style.display = 'block';
    errormsg.textContent = 'Cant take response :(';
  }
};

export default filmsAPi;
