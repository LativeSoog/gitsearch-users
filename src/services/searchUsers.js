import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const DATA_TAG = { type: 'Search', id: 'LIST' }

export const searchUserApi = createApi({
  reducerPath: 'searchUserApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  endpoints: (build) => ({
    getUser: build.query({
      query: ({ userName, pageNumber, sortUser }) => ({
        url: `/search/users?q=${userName}&page=${pageNumber}&sort=${sortUser}`,
        method: 'GET',
      }),
      providesTags: (result = []) => [DATA_TAG],
    }),

    getCountRep: build.query({
      query: ({ userName }) => ({
        url: `/users/${userName}/repos`,
        method: 'GET',
      }),
      providesTags: (result = []) => [DATA_TAG],
    }),
  }),
})

export const { useGetUserQuery, useGetCountRepQuery } = searchUserApi
