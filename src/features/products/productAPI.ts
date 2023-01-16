import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://nogue5gytf.execute-api.ap-south-1.amazonaws.com/Prod/'
    }),
    tagTypes: ['Product','Cart','Orders'],
    endpoints: (builder)=>({
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
                url: 'cart',
                method: 'POST',
                body: cart
            }),
            invalidatesTags: ['Cart']
        }),
        orders: builder.query({
            query: ()=>'orders',
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
    useOrdersQuery
} = productsApi

// export const { 
//     useProductsQuery, 
//     useProductQuery,
//     useCartQuery,
//     useAddCartMutation,
//     useOrdersQuery,
//     useAddOrderMutation
// } = productsApi