// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { fromJSON } from 'postcss'

// Define a service using a base URL and expected endpoints
export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API || 'http://localhost:4000/api/v1/' }),
  tagTypes: ["banner" , "category" , "subcategory"],
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
    DeleteBannerItem: builder.mutation({
      query: (deleteId) => ({
        url: `/deletebanner/${deleteId}`,
        method: "DELETE",
      }),
      // Invalidate the 'Cart' tag to trigger re-fetching of GetAllCart query
      invalidatesTags: ["banner"],
    }),
     UpdateBanner: builder.mutation({
      query: (data) => {
        const form = new FormData();
        form.append("image" , data?.image);
        
        return{
            url: `/bannerupdate/${data.id}`,
            method: "PUT",
            body: form,
        }
      },
      // Invalidate the 'Cart' tag to trigger re-fetching of GetAllCart query
      invalidatesTags: ["banner"],
    }),
    uploadcategory: builder.mutation({
      query: (bodyobject) => ({
        url: `/createcategory`,
        method: "POST",
        body: bodyobject
      }),
      invalidatesTags: ["category"]
    }),
    GetAllCategory: builder.query({
      query: () => "/allcategory", 
      providesTags: ["category"]
    }),
    DeleteCategoryItem: builder.mutation({
      query: (deleteId) => ({
        url: `/deletecategory/${deleteId}`,
        method: "DELETE",
      }),
      // Invalidate the 'Cart' tag to trigger re-fetching of GetAllCart query
      invalidatesTags: ["category"],
    }),
    Updatecategory: builder.mutation({
      query: (data) => ({
        url: `/updatecategory/${data.id}`,
        method: "PUT",
        body: data,
        
      }),
      // Invalidate the 'Cart' tag to trigger re-fetching of GetAllCart query
      invalidatesTags: ["category"],
    }),
    uploadsubcategoory: builder.mutation({
      query: (bodyobject) => ({
        url: `/subcategory`,
        method: "POST",
        body: bodyobject
      }),
      invalidatesTags: ["subcategory"]
    }),
    GetAllSubCategory: builder.query({
      query: () => "/subcategory", 
      providesTags: ["subcategory"]
    }),
    DeleteSubCategory: builder.mutation({
      query: (id) => ({
        url: `/deletesubcategory/${id}`,
        method: "DELETE",
      }),
      // Invalidate the 'Cart' tag to trigger re-fetching of GetAllCart query
      invalidatesTags: ["subcategory"],
    }),
    Updatesubcategory: builder.mutation({
      query: (data) => ({
        url: `/subcategoryupdate/${data.id}`,
        method: "PUT",
        body: data,
        
      }),
      // Invalidate the 'Cart' tag to trigger re-fetching of GetAllCart query
      invalidatesTags: ["subcategory"],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useUploadbannerMutation , useGetAllBannerQuery , useDeleteBannerItemMutation , useUpdateBannerMutation , useUploadcategoryMutation , useGetAllCategoryQuery , useDeleteCategoryItemMutation , useUpdatecategoryMutation , useUploadsubcategooryMutation , useGetAllSubCategoryQuery , useDeleteSubCategoryMutation  , useUpdatesubcategoryMutation} = dashboardApi