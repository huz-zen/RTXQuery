import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

interface Post{
    title: string;
    body : string;
    userId : string;
    id : string; 
}

export const myApi = createApi({
    reducerPath:"api",
    baseQuery :fetchBaseQuery({
        baseUrl:"http://192.168.1.107:3000/"
    }),
    tagTypes:["Posts"],
    endpoints:(builder)=>({
        getPosts: builder.query<Post[],string>({
        query:()=>"posts",
        providesTags:["Posts"],
        }),
        newPosts : builder.mutation<Post,Post>({
            query:(post)=> ({
                url:"posts",
                method:"POST", 
                body: post,

            }),
            invalidatesTags:["Posts"],
        }),
    }),

});

export const  {useGetPostsQuery,useNewPostsMutation} = myApi;