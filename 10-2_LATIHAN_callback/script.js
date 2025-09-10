$.ajax({
  // TODO: Incorrect Parameter "?apikey=294c8cf6&=avengers" should be "?apikey=294c8cf6&t=avengers". Missing "s=" for title
  url: 'https://www.omdbapi.com/?apikey=294c8cf6&=avengers',

  // TODO: Misspelled word "succes" should be "success"
  succes: (results) => {
    const movies = results.Search;
    let cards = '';
    movies.forEach(m => {
      // TODO: Misspelled word "<a href="#" class="btn btn-primary">Show Detaills</a>" should be "Details"
      cards += `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top">
                     <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
                         <a href="#" class="btn btn-primary">Show Detaills</a>
                    </div>
                </div>
            </div>`;         
    });
    $('.movie-container').html(cards);
  },
  // TODO: typo "Error" should be "error"
  Error: (e) => {
    console.log(e.responseText);
  }
  
});




