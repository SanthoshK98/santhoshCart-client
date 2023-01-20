import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import cookie from 'react-cookies'

const token = cookie.load('token')

export const baseUrl = 'https://nogue5gytf.execute-api.ap-south-1.amazonaws.com/Prod/'
export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        // baseUrl: 'http://localhost:5000/',
        baseUrl,
        prepareHeaders: (headers, {getState})=>{
            headers.set('Access-Control-Allow-Origin','*')
            headers.append('token',token)
            return headers
        }
    }),
    tagTypes: ['Product','Cart','Orders','User'],
    endpoints: (builder)=>({
        postUser: builder.mutation({
            query: (user)=>({
                url: 'signup',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['User']
        }),
        loginUser: builder.mutation({
            query: (user)=>({
                url: 'signin',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['User']
        }),
        products: builder.query<any, void>({
            query: ()=>'getProducts',
            providesTags: ['Product']
        }),
        product: builder.query({
            query: (id)=>`product/${id}`,
            providesTags: ['Product']
        }),
        cart: builder.query({
            query: ()=>'getCart',
            providesTags: ['Cart']
        }),
        addCart: builder.mutation({
            query: (cart)=>({
                url: 'postCart',
                method: 'POST',
                body: cart
            }),
            invalidatesTags: ['Cart']
        }),
        orders: builder.query({
            query: ()=>'getOrders',
            providesTags: ['Orders']
        }),
        addOrder: builder.mutation({
            query: (order)=>({
                url: 'orders',
                method: 'POST',
                body: order
            }),
            invalidatesTags: ['Orders']
        })
    })
})

export const {
    useProductsQuery,
    useProductQuery,
    useAddCartMutation,
    useAddOrderMutation,
    useCartQuery,
    useOrdersQuery,
    usePostUserMutation,
    useLoginUserMutation
} = productsApi

// export const { 
//     useProductsQuery, 
//     useProductQuery,
//     useCartQuery,
//     useAddCartMutation,
//     useOrdersQuery,
//     useAddOrderMutation
// } = productsApi