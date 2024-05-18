function renderCards(data, list) {
  console.log(data);
  const films = data.Search;
  let li = "";
  films.forEach((film) => {
    const getRandomInt = Math.ceil(Math.random() * (10 - 5) + 5);
    li += `<li class="card" data-id="${film.imdbID}">
              <a href="#" >
                <img src="${film.Poster}" alt="${film.Title}" />
              </a>
              <div class="card-description">
                <div class="splitter">
                  <h3 class="card-title">${film.Title}</h3>
                  <div class="split-content">
                    <p class="card-rating">
                      ${getRandomInt}/10
                      <svg width="25" height="25">
                        <use href="./img/symbol-defs.svg#icon-star"></use>
                      </svg>
                    </p>
                  </div>
                </div>
                <div class="description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Fugit aliquid enim blanditiis veritatis, iusto sequi obcaecati 
                    totam voluptatibus soluta id doloremque eius officia aperiam numquam 
                    ea ab, iste ipsa deserunt.
                  </p>
                </div>
                <div class="splitter">
                  <p class="card-text">Country</p>
                  <p class="card-year">${film.Year}</p>
                  <p class="card-text">${film.Type}</p>
                </div>
              </div>
            </li>`;
  });

  list.insertAdjacentHTML("beforeend", li);
}

export default renderCards;
