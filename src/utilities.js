export const scrubRandomData = (randomMovieData) => {
  const trimmedData = {id: randomMovieData.id, url: randomMovieData.urls.full, 
    altDescription: randomMovieData.alt_description, name: randomMovieData.user.name, 
    download: randomMovieData.links.download + '?force=true'
  }
  console.log('randomData',trimmedData)
  return trimmedData;
}

export const scrubSearchData = (searchData) => {

  const trimmedData = searchData.results.map(result => {
    const reducedResult = {id: result.id, url: result.urls.regular, 
      altDescription: result.alt_description, name: result.user.name, 
      download: result.links.download + '?force=true'
    }
    return reducedResult
  })

  console.log('searchData', trimmedData)
  return trimmedData;
}