import {ApolloClient, createHttpLink, InMemoryCache, useQuery, gql} from "@apollo/client";


const client = new ApolloClient({
    uri: "http://localhost:8080/graphql",
    cache: new InMemoryCache(),
    credentials: "include"
});

const graphqlCalls = (schema) => {
    return client
    .query({
        query: gql`${schema}`,
        fetchPolicy: "no-cache"
    })
    .then(result => {
        return result.data
    })
    .then((result) => {
        return result;
    });
};


const graphqlMutate = (schema) => {
    return client
    .mutate({
        mutation: gql`${schema}`,
        fetchPolicy: "no-cache"
    })
    .then(result => {
        return result.data
    })
    .then((result) => {
        return result;
    });
};

const graphqlMutateVariables = (schema,data, title) => {
    return client
    .mutate({
        mutation: gql`${schema}`,
        fetchPolicy: "no-cache",
        variables: {
            data: data,
            data2: title
        }

    })
    .then(result => {
        return result.data
    })
    .then((result) => {
        return result;
    });
};


export {
    graphqlCalls,
    graphqlMutate,
    graphqlMutateVariables
}
