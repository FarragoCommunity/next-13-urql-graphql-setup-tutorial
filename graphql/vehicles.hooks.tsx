import * as Types from './types';

import * as Operations from './operations';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export function useVehiclesQuery(options?: Omit<Urql.UseQueryArgs<Operations.VehiclesQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.VehiclesQuery, Operations.VehiclesQueryVariables>({ query: Operations.VehiclesDocument, ...options });
};