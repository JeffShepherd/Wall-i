export const scrubRandomData = (randomMovieData) => {
  const trimmedData = {url: randomMovieData.urls.full, altDescription: randomMovieData.alt_description}
  console.log(trimmedData)
  return trimmedData;
}