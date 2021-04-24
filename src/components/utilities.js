export const scrubRandomData = (randomMovieData) => {
  const trimmedData = {url: randomMovieData.urls.full, altDescription: randomMovieData.alt_description}
  console.log('randomdData',trimmedData)
  return trimmedData;
}

export const scrubSearchData = (searchData) => {

  const trimmedData = searchData.results.map(result => {
    const reducedResult = {url: result.urls.regular, altDescription: result.alt_description}
    return reducedResult
  })

  console.log('searchData', trimmedData)
  return trimmedData;
}