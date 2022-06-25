import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o8fa11155101z76eu00htv/master',
    // uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o8fa11155101z76eu00htv/master',
    cache: new InMemoryCache()
})
