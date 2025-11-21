import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'http://localhost/graphql';

export const graphQLClient = new GraphQLClient(endpoint);
