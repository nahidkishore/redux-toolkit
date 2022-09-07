import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const bookService = createApi({
  reducerPath: ['books'],
  tagTypes: ['books'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => ({
        url: 'books',
        method: 'GET',
      }),
      providesTags: ['books'],
    }),
    createBook: builder.mutation({
      query: (book) => ({
        headers: { 'Content-Type': 'application/json' },
        url: 'books',
        method: 'POST',
        body: book,
      }),
      invalidatesTags: ['books'],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['books'],
    }),
  }),
});
export const {
  useGetBooksQuery,
  useCreateBookMutation,
  useDeleteBookMutation,
} = bookService;
