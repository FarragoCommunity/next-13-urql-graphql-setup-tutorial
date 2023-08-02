import * as Types from './types';

import gql from 'graphql-tag';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type CreateTodoMutationVariables = Types.Exact<{
  description: Types.Scalars['String']['input'];
  done: Types.Scalars['Boolean']['input'];
  id: Types.Scalars['String']['input'];
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', updateTodo?: { __typename?: 'Todo', id?: string | null } | null };

export type AllFilmsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AllFilmsQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', id?: string | null, name?: string | null } | null> | null };

export type VehiclesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type VehiclesQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', id?: string | null, name?: string | null } | null> | null };


export const CreateTodoDocument = gql`
    mutation CreateTodo($description: String!, $done: Boolean!, $id: String!) {
  updateTodo(input: {description: $description, done: $done, id: $id}) {
    id
  }
}
    `;
export const AllFilmsDocument = gql`
    query AllFilms {
  users {
    id
    name
  }
}
    `;
export const VehiclesDocument = gql`
    query Vehicles {
  users {
    id
    name
  }
}
    `;