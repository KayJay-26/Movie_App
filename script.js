const movieInput = document.getElementById("movieInput");
const searchBtn = document.getElementById("searchBtn");
const movieResult = document.getElementById("movieResult");

searchBtn.addEventListener("click", async () => {
  const response = await fetch("https://ghibliapi.vercel.app/films");

  const data = await response.json();

  const movieName = movieInput.value;

  const movie = data.find((item) =>
    item.title.toLowerCase().includes(movieName.toLowerCase()),
  );

  const { title, image, director, release_date, description } = movie;

  movieResult.innerHTML = `
  <h2>${title}</h2>

  <img
    src="${image}"
    alt="${title}"
    width="250"
  >

  <p>Director: ${director}</p>

  <p>Released: ${release_date}</p>

  <p>Released: ${description}</p>

`;
});
