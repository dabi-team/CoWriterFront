import {
     fetchBaseQuery,
   } from '@reduxjs/toolkit/query'
import { RootState } from './store';

let base = "http://127.0.0.1:8000";

export const baseUrl  = base;
export const baseQuery =(suffix : string) =>fetchBaseQuery({ baseUrl: base + suffix})
   