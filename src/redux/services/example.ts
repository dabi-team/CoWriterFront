import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "../interceptor";

export interface form { 
  title: string;
  abstract: string;
  introduction: string;
  result: string;
  conclusion: string;
 }

export const formApiSlice = createApi({
    reducerPath: "formApi",
    baseQuery: baseQuery("/generate"),
    endpoints(builder) {
      return {
       postform : builder.mutation({
          query: (body: form) => {
            return {
              url: '/',
              method: 'POST',
              body,
            }
          }
        }),
      };
    } 
  });

  export const {usePostformMutation} = formApiSlice;