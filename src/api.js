import { scrubRandomData, scrubSearchData } from './utilities.js';


export const getRandomPhoto = () => {
 return fetch(`https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_KEY}&orientation=squarish`)
          .then(response => response.json())
          .then(x => scrubRandomData(x))
}