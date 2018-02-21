// @flow

import axios from 'axios';

export const request = (
  url: string
): Promise<*> => {
  return axios({ url })
    .then(resp => resp.data)
    .catch(err => {
      console.log(err)
    });
};
// / /g
export const dollarStrToNumber = (str: string) => {
  const cleanStr = str.replace(/\$|,| /g, '')
  return !cleanStr ? NaN : parseFloat(+cleanStr)
}

export const mapQuotesToDisplay = () => {
  
}