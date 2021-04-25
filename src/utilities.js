export const scrubRandomData = (randomMovieData) => {
  const trimmedData = {id: randomMovieData.id, url: randomMovieData.urls.full, altDescription: randomMovieData.alt_description}
  console.log('randomData',trimmedData)
  return trimmedData;
}

export const scrubSearchData = (searchData) => {

  const trimmedData = searchData.results.map(result => {
    const reducedResult = {id: result.id, url: result.urls.regular, altDescription: result.alt_description}
    return reducedResult
  })

  console.log('searchData', trimmedData)
  return trimmedData;
}