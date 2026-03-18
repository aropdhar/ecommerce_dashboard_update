// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API || 'http://localhost:4000/api/v1/' }),
  tagTypes: ["banner"],
  endpoints: (builder) => ({
    uploadbanner: builder.mutation({
      query: (bodyobject) => ({
        url: `/banner`,
        method: "POST",
        body: bodyobject
      }),
      invalidatesTags: ["banner"]
    }),
    GetAllBanner: builder.query({
      query: () => "/banner", 
      providesTags: ["banner"],
    }),
    
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useUploadbannerMutation , useGetAllBannerQuery} = dashboardApi