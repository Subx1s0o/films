import filmsAPi from './js/fetch.js';
import renderCards from './js/render.js';

const totalSearch = document.querySelector('.totalSearch span');
const input = document.querySelector('.input');
const list = document.querySelector('.list');
const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const errormsg = document.querySelector('.errormsg');
totalSearch.textContent = '0';

form.addEventListener('submit', e => {
  e.preventDefault();
  const search = input.value.trim();
  list.innerHTML = '';
  input.value = '';
  loader.style.visibility = 'visible';
  errormsg.style.display = 'none';
  filmsAPi(search)
    .then(data => {
      if (search !== '' && data.Response === 'True') {
        loader.style.visibility = 'hidden';
        totalSearch.textContent = data.totalResults;

        renderCards(data, list);
      } else {
        totalSearch.textContent = '0 ';
        errormsg.style.display = 'block';
        errormsg.textContent = 'We don`t find the films :(';

        loader.style.visibility = 'hidden';
      }
    })
    .catch(error => {
      loader.style.visibility = 'hidden';
      console.log('Cant take response', error);
      errormsg.style.display = 'block';
      errormsg.textContent = 'Sorry, check your internet connection! :(';
    });
});
