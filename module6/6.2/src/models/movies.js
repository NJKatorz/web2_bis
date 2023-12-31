/* eslint-disable no-console */


async function readAllMovies() {
    try {
      const response = await fetch('/api/films');
  
      if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
  
      const movie = await response.json();
  
      return movie;
    } catch (err) {
      console.error('getAllPizzas::error: ', err);
      throw err;
    }
  }

async function addMovies(movie){
    try {
        const options = {
          method: 'POST',
          body: JSON.stringify(movie),
          headers: {
            'Content-Type': 'application/json',
          },
        };
    
        const response = await fetch('/api/films', options);
    
        if (!response.ok) {
          throw new Error(`addOneMovie :: fetch error : ${response.status} : ${response.statusText}`);
        }

        const createdFilm = await response.json();
    
        return createdFilm;
      } catch (err) {
        console.error('addOneMovie::error: ', err);
        throw err;
      }
}
async function deleteOneMovie(id) {
    if (!id) return undefined;
  
    try {
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      };
  
      const response = await fetch(`/api/films/${id}`, options);
  
      if (!response.ok) {
        throw new Error(`deleteOneFilm :: fetch error : ${response.status} : ${response.statusText}`);
      }
      const deletedFilm = await response.json();
      return deletedFilm;
    } catch (err) {
      console.error('deleteOneMovie::error: ', err);
      throw err;
    }
  }

async function updateOneMovie(id, newMovieData) {
    if (!id || !newMovieData) return undefined;
  
    try {
      const options = {
        method: 'PATCH',
        body: JSON.stringify(newMovieData),
        headers: {
          'Content-Type': 'application/json',
        },
      };
  
      const response = await fetch(`/api/films/${id}`, options); // fetch return a promise => we wait for the response
  
      if (!response.ok) {
        throw new Error(
          `updateOneMovie :: fetch error : ${response.status} : ${response.statusText}`,
        );
      }
      const updatedFilm = await response.json(); // json() returns a promise => we wait for the data
  
      return updatedFilm;
    } catch (err) {
      console.error('updateOneMovie::error: ', err);
      throw err;
    }
  }


export {readAllMovies, addMovies, deleteOneMovie, updateOneMovie}