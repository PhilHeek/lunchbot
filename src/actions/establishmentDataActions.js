import { stopFetchingData } from './fetchDataActions';
import { setRecommendation } from './recommendationActions';


const receiveEstablishmentData = establishmentData => {
  return {
    type: 'RECEIVE_ESTABLISHMENT_DATA',
    establishmentData
  };
}

export const fetchEstablishmentData = () => {
  return dispatch => {
  //   fetch(`https://chs-lunch-finder-api.herokuapp.com/api/restaurants.json`,
  //   {method: 'GET',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //     'Origin': 'https://chs-lunch-finder.herokuapp.com'
  //   }
  // })
  //   .then(res => res.json())
  //   .then(establishmentData => {
  //     dispatch(receiveEstablishmentData(establishmentData))
  //     dispatch(stopFetchingData())
  //     dispatch(setRecommendation(establishmentData[Math.floor(Math.random()*establishmentData.length)]))
  //   });
  }
}
