import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "../interceptor";

export interface UserDetail  {
  qualification?: qualification;
  name?: string;
  userId?: string;
  email?: string;
  avatar?: string;
  bio?: string;
  skills?: string[];
  recommended: string;
}
export enum qualification {
  ssc =  "10",
   hsc =  "12",
   underGraduate =  "Under Graduate",
   graduate =  "Graduate",
   postgraduate =  "Post Graduate",
 
 }
   export const userDetailApiSlice = createApi({
    reducerPath: "userDetailApi",
    baseQuery: baseQuery("/user-detail"),
    endpoints(builder) {
      return {
        getUserDetail: builder.query<UserDetail, void>({
          query() {
            return "/";
          },
        }),
        getUserDetailById: builder.query<UserDetail, void>({
          query() {
            return '/by-user';
          },
        }),
       createUserDetail : builder.mutation({
          query: (body: UserDetail) => {
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

  export const {useGetUserDetailByIdQuery, useGetUserDetailQuery, useCreateUserDetailMutation} = userDetailApiSlice;