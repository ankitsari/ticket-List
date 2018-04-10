import { SET_COMPONENTS } from './types';
import axios from 'axios';

export function setComponents(payload) {
  return {
    type: SET_COMPONENTS,
    payload
  };
}

// export function fetchMarkets() {
//   return dispatch => {
//     return axios.get(process.env.API_URL + '/api/markets').then(res => {
//       if (res.status !== 200) {
//         console.log(`There was a problem: ${res.status}`);
//         return;
//       }
//       dispatch(setMarkets(res.data.markets));
//     }, err => {

//     });
//   }
// }

// export function fetchComponents() {
//   return dispatch => {
//     return fetch("components.json")
//       .then(response => {
//         if (response.status !== 200) {
//           console.log(`There was a problem: ${response.status}`)
//           return;
//         }
//         response.json().then(data => {
//           dispatch(setComponents(data));
//         });
//       }, err => {

//       });
//   }
// }
export function fetchComponents() {
  return dispatch => {
    return axios.get(process.env.API_URL).then(res => {
      if (res.status !== 200) {
        console.log(`There was a problem: ${res.status}`);
        return;
      }
      dispatch(setComponents(res.data));
    }, err => {

    });
  }
}