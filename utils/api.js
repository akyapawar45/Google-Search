import React from 'react'
import axios from "axios";
// const BASE_URL = "https://www.googleapis.com/customsearch/v1";
 const BASE_URL = "https://www.googleapis.com/customsearch/v1";
const params={
    key:'AIzaSyC4R7W0FnChnGm2kbM4bMsAhirf9VUALvE',
    cx:'0692f4746098146d1'
};
export const fetchDataFromApi = async(payload) => {
    const {data}=await axios.get(BASE_URL,{
           params: {...params,...payload}
    })
    return data;
};
