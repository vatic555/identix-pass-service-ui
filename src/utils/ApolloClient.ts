import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import {LocalStorageWrapper, persistCache} from 'apollo3-cache-persist';
import {setContext} from '@apollo/client/link/context';


const cache = new InMemoryCache();

if (process.env.NEXT_PUBLIC_PERSIST_CACHE === 'true' && typeof window !== 'undefined') {
    persistCache({
        cache,
        storage: new LocalStorageWrapper(window.localStorage)
    }).then(() => {
        // Continue setting up Apollo Client as usual.
    });
}

const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL
});

const authLink = setContext((_, {headers}) => {
    if (typeof localStorage !== 'undefined') {
        const token = localStorage.getItem('authorization-token');

        if (token) {
            return {
                headers: {
                    ...headers,
                    authorization: `${token}`
                }
            };
        } else {
            return {
                headers
            };
        }
    } else {
        return {
            headers
        };
    }
});

export const getApolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
    connectToDevTools: process.env.NEXT_PUBLIC_DEBUG === 'true'
});
