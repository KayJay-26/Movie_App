# Studio Ghibli Explorer

A movie search application built using JavaScript and the Studio Ghibli API. The application allows users to search for Studio Ghibli films and view information such as the title, poster, director, release year, and description.

---

# JavaScript Concepts Used

## 1. DOM Selection

HTML elements are selected using `getElementById()`.

```javascript
const movieInput = document.getElementById("movieInput");
const searchBtn = document.getElementById("searchBtn");
const movieResult = document.getElementById("movieResult");
```

This allows JavaScript to interact with webpage elements.

---

## 2. Event Listeners

The application waits for the user to click the Search button.

```javascript
searchBtn.addEventListener("click", async () => {
});
```

When the button is clicked, the callback function executes.

---

## 3. Async/Await

The application communicates with an external API.

```javascript
const response = await fetch(url);
```

Since the request takes time to complete, `await` pauses execution until a response is received.

---

## 4. Fetch API

The Fetch API is used to retrieve movie data from the Studio Ghibli API.

```javascript
const response = await fetch(
  "https://ghibliapi.vercel.app/films"
);
```

This sends an HTTP request and retrieves movie information.

---

## 5. JSON Parsing

The API response is returned in JSON format.

```javascript
const data = await response.json();
```

The `.json()` method converts the response into a JavaScript array of movie objects.

---

## 6. Working with Arrays

The API returns an array containing multiple movie objects.

```javascript
[
  {...},
  {...},
  {...}
]
```

Each object represents a Studio Ghibli movie.

Example:

```javascript
data[0]
```

Accesses the first movie in the array.

---

## 7. Array Searching using `.find()`

Instead of hardcoding an index, the application searches for a movie based on the user's input.

```javascript
const movie = data.find(item =>
  item.title
      .toLowerCase()
      .includes(movieName.toLowerCase())
);
```

### How it works

The `.find()` method loops through the array and returns the first movie that matches the search condition.

Example:

```javascript
[
  { title: "Castle in the Sky" },
  { title: "My Neighbor Totoro" }
]
```

Searching for:

```text
totoro
```

returns:

```javascript
{
  title: "My Neighbor Totoro"
}
```

---

## 8. String Methods

### `toLowerCase()`

Used to make searches case-insensitive.

```javascript
movieName.toLowerCase()
```

This allows:

```text
Totoro
TOTORO
totoro
```

to produce the same result.

---

### `includes()`

Checks whether a string contains another string.

```javascript
item.title.includes(movieName)
```

Example:

```javascript
"My Neighbor Totoro".includes("Totoro")
```

returns:

```javascript
true
```

---

## 9. Object Destructuring (ES6)

After finding a movie, specific properties are extracted.

```javascript
const {
  title,
  image,
  director,
  release_date,
  description
} = movie;
```

Instead of:

```javascript
movie.title
movie.image
movie.director
movie.release_date
```

Destructuring creates variables directly from object properties.

---

## 10. Template Literals (ES6)

Template literals allow variables to be embedded inside strings.

```javascript
`${title}`
```

Example:

```javascript
<h2>${title}</h2>
```

JavaScript replaces `${title}` with the actual movie title.

---

## 11. DOM Manipulation

Movie information is dynamically inserted into the webpage.

```javascript
movieResult.innerHTML = `
  ...
`;
```

This updates the page without requiring a refresh.

---

## 12. Dynamic Image Rendering

The API provides a poster URL.

```javascript
<img src="${image}">
```

The browser automatically downloads and displays the image.

---

## 13. Error Prevention

Before accessing movie data, the application checks whether a movie was found.

```javascript
if (!movie) {
  movieResult.innerHTML =
    "<h2>Movie Not Found</h2>";

  return;
}
```

This prevents runtime errors and improves user experience.

---

# Application Flow

### Step 1

The user enters a movie title.

```text
Totoro
```

---

### Step 2

The Search button is clicked.

---

### Step 3

An event listener detects the click event.

---

### Step 4

The Fetch API sends a request to the Studio Ghibli API.

```javascript
await fetch(...)
```

---

### Step 5

The JSON response is converted into a JavaScript array.

```javascript
await response.json()
```

---

### Step 6

The `.find()` method searches the array for a matching movie title.

---

### Step 7

The matching movie object is returned.

```javascript
const movie = ...
```

---

### Step 8

Object destructuring extracts the required movie properties.

```javascript
title
image
director
release_date
description
```

---

### Step 9

Template literals generate dynamic HTML content.

---

### Step 10

`innerHTML` updates the DOM and displays the movie information on the webpage.

---

# JavaScript Features Demonstrated

- DOM Selection
- Event Handling
- Async/Await
- Fetch API
- JSON Parsing
- Array Traversal
- Array Searching with `.find()`
- String Methods (`toLowerCase()`, `includes()`)
- Object Destructuring
- Template Literals
- DOM Manipulation
- Dynamic Image Rendering
- Basic Error Handling

---

Built as a learning project to practice API consumption, JSON handling, ES6 features, and dynamic DOM manipulation using JavaScript.
