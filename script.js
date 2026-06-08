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

  console.log(movie);
});
