import {
     fetchBaseQuery,
   } from '@reduxjs/toolkit/query'
import { RootState } from './store';

let base = "http://localhost:3000";

export const baseUrl  = "http://192.168.0.104:5000"
export const baseQuery =(suffix : string) =>fetchBaseQuery({ baseUrl: base + suffix,
prepareHeaders:   (headers, {getState}) => {
const access_token = (getState() as RootState).AuthSlice.access_token;
if(access_token) {
headers.set('authorization',  `Bearer ${access_token}`);
}
return headers;

}
})
   