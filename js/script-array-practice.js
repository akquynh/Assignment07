//STEP 1
let favoriteMovies = ["Totoro", "Spirited Away", "Howl's Moving Castle", "Kiki's Delivery Service", "Ponyo"];

// Display the second movie in the array
console.log(favoriteMovies[1]);

//STEP 2
let movies = new Array(5);

movies[0] = "Totoro";
movies[1] = "Spirited Away";
movies[2] = "Howl's Moving Castle";
movies[3] = "Kiki's Delivery Service";
movies[4] = "Ponyo";

console.log(movies[0]);

//STEP 3
let movies = new Array(5);

// Assign favorite movies to each index
movies[0] = "Totoro";
movies[1] = "Spirited Away";
movies[2] = "Howl's Moving Castle";
movies[3] = "Kiki's Delivery Service";
movies[4] = "Ponyo";

movies.splice(2, 0, "Castle in the Sky");

console.log(movies.length);

console.log(movies);

//STEP 4
let movies = ["Totoro", "Spirited Away", "Howl's Moving Castle", "Kiki's Delivery Service", "Ponyo"];

// Use the delete operator to remove the first movie
delete movies[0];

// Display the contents of the array
console.log(movies);

//STEP 5
let movies = ["Totoro", "Spirited Away", "Howl's Moving Castle", "Kiki's Delivery Service", "Ponyo", "Castle in the Sky", "Princess Mononoke"];

// Use a for/in loop to iterate through the array and display each movie
for (let index in movies) {
    console.log(movies[index]);
}

//STEP 6
let movies = ["Totoro", "Spirited Away", "Howl's Moving Castle", "Kiki's Delivery Service", "Ponyo", "Castle in the Sky", "Princess Mononoke"];

for (let movie of movies) {
    console.log(movie);
}

//STEP 7
let movies = ["Totoro", "Spirited Away", "Howl's Moving Castle", "Kiki's Delivery Service", "Ponyo", "Castle in the Sky", "Princess Mononoke"];

movies.sort();

for (let movie of movies) {
    console.log(movie);
}

//STEP 8
let movies = ["Totoro", "Spirited Away", "Howl's Moving Castle", "Kiki's Delivery Service", "Ponyo", "Castle in the Sky", "Princess Mononoke"];

let leastFavMovies = ["Death Note", "The Kissing Booth", "Tall Girl"];

console.log("Movies I like:\n");
for (let movie of movies) {
    console.log(movie);
}

console.log("\nMovies I regret watching:\n");
for (let movie of leastFavMovies) {
    console.log(movie);
}

//STEP 9
let movies = ["Totoro", "Spirited Away", "Howl's Moving Castle", "Kiki's Delivery Service", "Ponyo", "Castle in the Sky", "Princess Mononoke"];

let leastFavMovies = ["Death Note", "The Kissing Booth", "Tall Girl"];

let allMovies = movies.concat(leastFavMovies);

allMovies.sort().reverse();

console.log("All movies in reverse sorted order:\n");
for (let movie of allMovies) {
    console.log(movie);
}

//STEP 10
let movies = ["Totoro", "Spirited Away", "Howl's Moving Castle", "Kiki's Delivery Service", "Ponyo", "Castle in the Sky", "Princess Mononoke"];

let leastFavMovies = ["Death Note", "The Kissing Booth", "Tall Girl"];

let allMovies = movies.concat(leastFavMovies);

allMovies.sort().reverse();

console.log("All movies in reverse sorted order:\n");
for (let movie of allMovies) {
    console.log(movie);
}

// Return and display the last item in the array
let lastMovie = allMovies.slice(-1)[0];
console.log("\nLast movie in the array:", lastMovie);

//STEP 11
let movies = ["Totoro", "Spirited Away", "Howl's Moving Castle", "Kiki's Delivery Service", "Ponyo", "Castle in the Sky", "Princess Mononoke"];

let leastFavMovies = ["Death Note", "The Kissing Booth", "Tall Girl"];

let allMovies = movies.concat(leastFavMovies);

allMovies.sort().reverse();

console.log("All movies in reverse sorted order:\n");
for (let movie of allMovies) {
    console.log(movie);
}

let firstMovie = allMovies.shift();
console.log("\nFirst movie in the array:", firstMovie);

//STEP 12
let movies = ["Totoro", "Spirited Away", "Howl's Moving Castle", "Kiki's Delivery Service", "Ponyo", "Castle in the Sky", "Princess Mononoke"];

let leastFavMovies = ["Death Note", "The Kissing Booth", "Tall Girl"];

let allMovies = movies.concat(leastFavMovies);

allMovies.sort().reverse();

console.log("All movies in reverse sorted order:\n");
for (let movie of allMovies) {
    console.log(movie);
}

let dislikedMovieIndices = [];
for (let i = 0; i < allMovies.length; i++) {
    if (leastFavMovies.includes(allMovies[i])) {
        dislikedMovieIndices.push(i);
    }
}

console.log("\nIndices of movies I do not like:", dislikedMovieIndices);

let likedMovies = ["The Shawshank Redemption", "The Godfather", "Forrest Gump"];
for (let i = 0; i < dislikedMovieIndices.length; i++) {
    allMovies[dislikedMovieIndices[i]] = likedMovies[i];
}

console.log("\nUpdated movie list:\n");
for (let movie of allMovies) {
    console.log(movie);
}

//STEP 13
let movies = [
    ["Totoro", 1],
    ["Spirited Away", 2],
    ["Howl's Moving Castle", 3],
    ["Kiki's Delivery Service", 4],
    ["Ponyo", 5]
  ];
  
  let movieNames = movies.filter(movie => typeof movie[0] === 'string').map(movie => movie[0]);

  console.log("Movie names:");
  movieNames.forEach(movie => console.log(movie));

//STEP 14
let employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];

let showEmployee = function(employeeArray) {
    console.log("Employees:");
    
    for (let employee of employeeArray) {
        console.log(employee.toUpperCase());
    }
};
showEmployee(employees);

//STEP 15
function filterValues(arr) {
    return arr.filter(value => value !== false && value !== null && value !== 0 && value !== '');
}

console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

//STEP 16
function getRandomItem(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(getRandomItem(numbers));

//STEP 17
function getLargestNumber(arr) {
    return Math.max(...arr);
}

let numbers = [1, 5, 3, 9, 7, 2];

console.log(getLargestNumber(numbers));
