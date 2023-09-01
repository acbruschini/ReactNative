import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../Database/firebaseConfig";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "categories.json",
    }),
    getProducts: builder.query({
      query: () => "products.json",
    }),
    getProductsByCategory: builder.query({
      query: (category) =>
        `products.json?orderBy="category"&equalTo="${category}"`,
      transformResponse: (response) => {
        const productsTrans = Object.values(response);
        return productsTrans;
      },
    }),
    getProductById: builder.query({
      query: (id) => {
        `products.json?equalTo="${id}"`;
      },
      transformResponse: (response) => {
        const productTrans = Object.values(response).pop();
        return productTrans;
      },
    }),
    postCart: builder.mutation({
      query: (order) => ({
        url: "orders.json",
        method: "POST",
        body: order,
      }),
    }),
    postProfileImage: builder.mutation({
      query: ({ image, localId }) => ({
        url: `profileImages/${localId}.json`,
        method: "PUT",
        body: {
          image: image,
        },
      }),
    }),
    getProfileImage: builder.query({
      query: (localId) => `profileImages/${localId}.json`,
    }),
    getOrders: builder.query({
      query: (user) => `orders.json?orderBy="user"&equalTo="${user}"`,
      transformResponse: (response) => {
        const ordersTrans = Object.values(response);
        return ordersTrans;
      },
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  usePostCartMutation,
  useGetProfileImageQuery,
  usePostProfileImageMutation,
  useGetOrdersQuery,
} = shopApi;
