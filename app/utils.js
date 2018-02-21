// @flow

import axios from 'axios'

export const request = (
  url: string
): Promise<*> => {
  return axios({ url })
    .then(resp => resp.data)
    .catch(err => {
      console.log(err)
    })
}

export const dollarStrToNumber = (str: string) => {
  const cleanStr = str.replace(/\$|,| /g, '')
  return !cleanStr ? NaN : parseFloat(+cleanStr)
}

export const getCurrPath = () => window.location.pathname.substring(1)

export const mapQuotesToDisplay = () => {
  
}