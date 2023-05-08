// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map(element => element.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

  const result = array.filter(element => element.director === director);
  console.log("EXERCISE 2 ->", result);
  return result;


}



// Exercise 3: Calculate the average of the films of a given director.
function moviesAverage(arrayReduce) {

  const arrayFilter = Number((arrayReduce.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0) / arrayReduce.length).toFixed(2));

  return arrayFilter;
}

function moviesAverageOfDirector(array, director) {

  const arrayDirector = array.filter(element => element.director === director);
  const result = moviesAverage(arrayDirector);

  console.log("EXERCISE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const result = array.map(element => element.title).sort().slice(0, 20)


  console.log("EXERCISE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const result = [...array].sort((a, b) => {
    if (a.year == b.year) {
      const title1 = a.title.toUpperCase()
      const title2 = b.title.toUpperCase()
      return title1.localeCompare(title2)
    }
    return a.year - b.year
  });

  console.log("EXERCISE 5 ->", result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  const moviesByCat = array.filter(element => element.genre.includes(category) && typeof (element.score) === "number");
  const result = moviesAverage(moviesByCat);

  console.log("EXERCISE 6 ->", result);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const result = array.map(element => ({
    ...element
  })).map(element => {

    const min = (element.duration.split(" ").length == 2) ? parseInt(element.duration.split(" ")[0]) * 60 + parseInt(element.duration.split(" ")[1]) : parseInt(element.duration.split(" ")[0]) * 60;

    element.duration = min;
    return element;
  });

  console.log("EXERCISE 7 ->", result);
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {


  const result = array.filter(element => element.year === year).sort((a, b) => b.score - a.score).slice(0,1)

  console.log("EXERCISE 8 ->", result);
  return result;
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
