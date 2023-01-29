import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import cookie from 'react-cookies'



console.log('API-TOKEN')
//Production
export const baseUrl = 'https://nogue5gytf.execute-api.ap-south-1.amazonaws.com/Prod/'
//Development
// export const baseUrl = 'http://localhost:5000/'
export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers, {getState})=>{
            const token = cookie.load('token')
            const role = cookie.load('role')
            headers.set('Access-Control-Allow-Origin','*')
            headers.append('token',token)
            headers.append('role',role)
            return headers
        }
    }),
    tagTypes: ['Product','Cart','Orders','User'],
    refetchOnMountOrArgChange: true,
    endpoints: (builder)=>({
        user: builder.query<any,void>({
            query: ()=>'getUser',
            providesTags: ['User']
        }),
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
        cart: builder.query<any, void>({
            query: ()=>'getCart',
            providesTags: ['Cart']
        }),
        addCart: builder.mutation<any, any>({
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
    useLoginUserMutation,
    useUserQuery
} = productsApi

// export const { 
//     useProductsQuery, 
//     useProductQuery,
//     useCartQuery,
//     useAddCartMutation,
//     useOrdersQuery,
//     useAddOrderMutation
// } = productsApi