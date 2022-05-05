/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export enum AgentsRoles {
  Holder = 'holder',
  Issuer = 'issuer',
  Verifier = 'verifier'
}

export type EventLogEntry = {
  __typename?: 'EventLogEntry';
  eventDate: Scalars['DateTime'];
  eventType: Scalars['String'];
  id: Scalars['Int'];
  message: Scalars['String'];
  ownerDid: Scalars['String'];
  vcDid: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  issuerVC: Scalars['Boolean'];
  requestVcVerification: Scalars['Boolean'];
  verifyVC: Scalars['Boolean'];
};


export type MutationIssuerVcArgs = {
  holderDid: Scalars['String'];
  vcParams: Scalars['String'];
  vcTypeDid: Scalars['String'];
};


export type MutationRequestVcVerificationArgs = {
  vcDid: Scalars['String'];
  verifierDid: Scalars['String'];
};


export type MutationVerifyVcArgs = {
  vcDid: Scalars['String'];
  verificationStatus: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  checkAccountExists: Scalars['Boolean'];
  getAllAccounts: Array<Scalars['String']>;
  getEventLogEntries: Array<EventLogEntry>;
  getUserVCs: Array<Vc>;
  getVC: Vc;
  getVcTypes: Array<VcTypeInfo>;
  whoami: Scalars['String'];
};


export type QueryCheckAccountExistsArgs = {
  did: Scalars['String'];
};


export type QueryGetEventLogEntriesArgs = {
  count?: InputMaybe<Scalars['Int']>;
  startIndex?: InputMaybe<Scalars['Int']>;
};


export type QueryGetUserVCsArgs = {
  count?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<AgentsRoles>;
  startIndex?: InputMaybe<Scalars['Int']>;
};


export type QueryGetVcArgs = {
  vcDid: Scalars['String'];
};

export type Vc = {
  __typename?: 'VC';
  createdAt: Scalars['String'];
  holderDid: Scalars['String'];
  issuerDid: Scalars['String'];
  updatedAt: Scalars['String'];
  vcDid: Scalars['String'];
  vcParams: Scalars['String'];
  vcRawText: Scalars['String'];
  vcTypeDid: Scalars['String'];
  verificationCases: Array<VerificationCase>;
};

export type VcTypeInfo = {
  __typename?: 'VcTypeInfo';
  vcTypeDid: Scalars['String'];
  vcTypeTag: Scalars['String'];
};

export type VerificationCase = {
  __typename?: 'VerificationCase';
  verificationStatus: VerificationStatuses;
  verifierDid: Scalars['String'];
};

export enum VerificationStatuses {
  Accepted = 'ACCEPTED',
  PendingVerify = 'PENDING_VERIFY',
  Rejected = 'REJECTED'
}

export type GetUserVCsHolderQueryVariables = Exact<{
  role?: InputMaybe<AgentsRoles>;
  startIndex?: InputMaybe<Scalars['Int']>;
  count?: InputMaybe<Scalars['Int']>;
}>;


export type GetUserVCsHolderQuery = { __typename?: 'Query', getUserVCs: Array<{ __typename?: 'VC', vcDid: string, vcTypeDid: string, vcParams: string, vcRawText: string, issuerDid: string, holderDid: string, createdAt: string, updatedAt: string, verificationCases: Array<{ __typename?: 'VerificationCase', verifierDid: string, verificationStatus: VerificationStatuses }> }> };

export type GetUserVCsIssuerQueryVariables = Exact<{
  role?: InputMaybe<AgentsRoles>;
  startIndex?: InputMaybe<Scalars['Int']>;
  count?: InputMaybe<Scalars['Int']>;
}>;


export type GetUserVCsIssuerQuery = { __typename?: 'Query', getUserVCs: Array<{ __typename?: 'VC', vcDid: string, vcTypeDid: string, vcParams: string, issuerDid: string, holderDid: string, createdAt: string }> };

export type GetUserVCsVerifierQueryVariables = Exact<{
  role?: InputMaybe<AgentsRoles>;
  startIndex?: InputMaybe<Scalars['Int']>;
  count?: InputMaybe<Scalars['Int']>;
}>;


export type GetUserVCsVerifierQuery = { __typename?: 'Query', getUserVCs: Array<{ __typename?: 'VC', vcDid: string, vcTypeDid: string, vcParams: string, issuerDid: string, holderDid: string, createdAt: string, verificationCases: Array<{ __typename?: 'VerificationCase', verifierDid: string, verificationStatus: VerificationStatuses }> }> };

export type GetVcQueryVariables = Exact<{
  vcDid: Scalars['String'];
}>;


export type GetVcQuery = { __typename?: 'Query', getVC: { __typename?: 'VC', vcDid: string, vcTypeDid: string, vcParams: string, vcRawText: string, issuerDid: string, holderDid: string, createdAt: string, updatedAt: string, verificationCases: Array<{ __typename?: 'VerificationCase', verifierDid: string, verificationStatus: VerificationStatuses }> } };

export type CheckAccountExistsQueryVariables = Exact<{
  did: Scalars['String'];
}>;


export type CheckAccountExistsQuery = { __typename?: 'Query', checkAccountExists: boolean };

export type GetEventLogEntriesQueryVariables = Exact<{
  startIndex?: InputMaybe<Scalars['Int']>;
  count?: InputMaybe<Scalars['Int']>;
}>;


export type GetEventLogEntriesQuery = { __typename?: 'Query', getEventLogEntries: Array<{ __typename?: 'EventLogEntry', id: number, ownerDid: string, eventType: string, vcDid: string, message: string, eventDate: any }> };

export type GetVcTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVcTypesQuery = { __typename?: 'Query', getVcTypes: Array<{ __typename?: 'VcTypeInfo', vcTypeDid: string, vcTypeTag: string }> };

export type WhoamiQueryVariables = Exact<{ [key: string]: never; }>;


export type WhoamiQuery = { __typename?: 'Query', whoami: string };

export type GetAllAccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllAccountsQuery = { __typename?: 'Query', getAllAccounts: Array<string> };

export type IssuerVcMutationVariables = Exact<{
  holderDid: Scalars['String'];
  vcTypeDid: Scalars['String'];
  vcParams: Scalars['String'];
}>;


export type IssuerVcMutation = { __typename?: 'Mutation', issuerVC: boolean };

export type RequestVcVerificationMutationVariables = Exact<{
  verifierDid: Scalars['String'];
  vcDid: Scalars['String'];
}>;


export type RequestVcVerificationMutation = { __typename?: 'Mutation', requestVcVerification: boolean };

export type VerifyVcMutationVariables = Exact<{
  vcDid: Scalars['String'];
  verificationStatus: Scalars['String'];
}>;


export type VerifyVcMutation = { __typename?: 'Mutation', verifyVC: boolean };


export const GetUserVCsHolderDocument = gql`
    query getUserVCsHolder($role: AgentsRoles, $startIndex: Int, $count: Int) {
  getUserVCs(role: $role, startIndex: $startIndex, count: $count) {
    vcDid
    vcTypeDid
    vcParams
    vcRawText
    issuerDid
    holderDid
    createdAt
    updatedAt
    verificationCases {
      verifierDid
      verificationStatus
    }
  }
}
    `;

/**
 * __useGetUserVCsHolderQuery__
 *
 * To run a query within a React component, call `useGetUserVCsHolderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserVCsHolderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserVCsHolderQuery({
 *   variables: {
 *      role: // value for 'role'
 *      startIndex: // value for 'startIndex'
 *      count: // value for 'count'
 *   },
 * });
 */
export function useGetUserVCsHolderQuery(baseOptions?: Apollo.QueryHookOptions<GetUserVCsHolderQuery, GetUserVCsHolderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserVCsHolderQuery, GetUserVCsHolderQueryVariables>(GetUserVCsHolderDocument, options);
      }
export function useGetUserVCsHolderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserVCsHolderQuery, GetUserVCsHolderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserVCsHolderQuery, GetUserVCsHolderQueryVariables>(GetUserVCsHolderDocument, options);
        }
export type GetUserVCsHolderQueryHookResult = ReturnType<typeof useGetUserVCsHolderQuery>;
export type GetUserVCsHolderLazyQueryHookResult = ReturnType<typeof useGetUserVCsHolderLazyQuery>;
export type GetUserVCsHolderQueryResult = Apollo.QueryResult<GetUserVCsHolderQuery, GetUserVCsHolderQueryVariables>;
export const GetUserVCsIssuerDocument = gql`
    query getUserVCsIssuer($role: AgentsRoles, $startIndex: Int, $count: Int) {
  getUserVCs(role: $role, startIndex: $startIndex, count: $count) {
    vcDid
    vcTypeDid
    vcParams
    issuerDid
    holderDid
    createdAt
  }
}
    `;

/**
 * __useGetUserVCsIssuerQuery__
 *
 * To run a query within a React component, call `useGetUserVCsIssuerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserVCsIssuerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserVCsIssuerQuery({
 *   variables: {
 *      role: // value for 'role'
 *      startIndex: // value for 'startIndex'
 *      count: // value for 'count'
 *   },
 * });
 */
export function useGetUserVCsIssuerQuery(baseOptions?: Apollo.QueryHookOptions<GetUserVCsIssuerQuery, GetUserVCsIssuerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserVCsIssuerQuery, GetUserVCsIssuerQueryVariables>(GetUserVCsIssuerDocument, options);
      }
export function useGetUserVCsIssuerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserVCsIssuerQuery, GetUserVCsIssuerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserVCsIssuerQuery, GetUserVCsIssuerQueryVariables>(GetUserVCsIssuerDocument, options);
        }
export type GetUserVCsIssuerQueryHookResult = ReturnType<typeof useGetUserVCsIssuerQuery>;
export type GetUserVCsIssuerLazyQueryHookResult = ReturnType<typeof useGetUserVCsIssuerLazyQuery>;
export type GetUserVCsIssuerQueryResult = Apollo.QueryResult<GetUserVCsIssuerQuery, GetUserVCsIssuerQueryVariables>;
export const GetUserVCsVerifierDocument = gql`
    query getUserVCsVerifier($role: AgentsRoles, $startIndex: Int, $count: Int) {
  getUserVCs(role: $role, startIndex: $startIndex, count: $count) {
    vcDid
    vcTypeDid
    vcParams
    issuerDid
    holderDid
    createdAt
    verificationCases {
      verifierDid
      verificationStatus
    }
  }
}
    `;

/**
 * __useGetUserVCsVerifierQuery__
 *
 * To run a query within a React component, call `useGetUserVCsVerifierQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserVCsVerifierQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserVCsVerifierQuery({
 *   variables: {
 *      role: // value for 'role'
 *      startIndex: // value for 'startIndex'
 *      count: // value for 'count'
 *   },
 * });
 */
export function useGetUserVCsVerifierQuery(baseOptions?: Apollo.QueryHookOptions<GetUserVCsVerifierQuery, GetUserVCsVerifierQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserVCsVerifierQuery, GetUserVCsVerifierQueryVariables>(GetUserVCsVerifierDocument, options);
      }
export function useGetUserVCsVerifierLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserVCsVerifierQuery, GetUserVCsVerifierQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserVCsVerifierQuery, GetUserVCsVerifierQueryVariables>(GetUserVCsVerifierDocument, options);
        }
export type GetUserVCsVerifierQueryHookResult = ReturnType<typeof useGetUserVCsVerifierQuery>;
export type GetUserVCsVerifierLazyQueryHookResult = ReturnType<typeof useGetUserVCsVerifierLazyQuery>;
export type GetUserVCsVerifierQueryResult = Apollo.QueryResult<GetUserVCsVerifierQuery, GetUserVCsVerifierQueryVariables>;
export const GetVcDocument = gql`
    query getVC($vcDid: String!) {
  getVC(vcDid: $vcDid) {
    vcDid
    vcTypeDid
    vcParams
    vcRawText
    issuerDid
    holderDid
    createdAt
    updatedAt
    verificationCases {
      verifierDid
      verificationStatus
    }
  }
}
    `;

/**
 * __useGetVcQuery__
 *
 * To run a query within a React component, call `useGetVcQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVcQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVcQuery({
 *   variables: {
 *      vcDid: // value for 'vcDid'
 *   },
 * });
 */
export function useGetVcQuery(baseOptions: Apollo.QueryHookOptions<GetVcQuery, GetVcQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVcQuery, GetVcQueryVariables>(GetVcDocument, options);
      }
export function useGetVcLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVcQuery, GetVcQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVcQuery, GetVcQueryVariables>(GetVcDocument, options);
        }
export type GetVcQueryHookResult = ReturnType<typeof useGetVcQuery>;
export type GetVcLazyQueryHookResult = ReturnType<typeof useGetVcLazyQuery>;
export type GetVcQueryResult = Apollo.QueryResult<GetVcQuery, GetVcQueryVariables>;
export const CheckAccountExistsDocument = gql`
    query checkAccountExists($did: String!) {
  checkAccountExists(did: $did)
}
    `;

/**
 * __useCheckAccountExistsQuery__
 *
 * To run a query within a React component, call `useCheckAccountExistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckAccountExistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckAccountExistsQuery({
 *   variables: {
 *      did: // value for 'did'
 *   },
 * });
 */
export function useCheckAccountExistsQuery(baseOptions: Apollo.QueryHookOptions<CheckAccountExistsQuery, CheckAccountExistsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckAccountExistsQuery, CheckAccountExistsQueryVariables>(CheckAccountExistsDocument, options);
      }
export function useCheckAccountExistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckAccountExistsQuery, CheckAccountExistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckAccountExistsQuery, CheckAccountExistsQueryVariables>(CheckAccountExistsDocument, options);
        }
export type CheckAccountExistsQueryHookResult = ReturnType<typeof useCheckAccountExistsQuery>;
export type CheckAccountExistsLazyQueryHookResult = ReturnType<typeof useCheckAccountExistsLazyQuery>;
export type CheckAccountExistsQueryResult = Apollo.QueryResult<CheckAccountExistsQuery, CheckAccountExistsQueryVariables>;
export const GetEventLogEntriesDocument = gql`
    query getEventLogEntries($startIndex: Int, $count: Int) {
  getEventLogEntries(startIndex: $startIndex, count: $count) {
    id
    ownerDid
    eventType
    vcDid
    message
    eventDate
  }
}
    `;

/**
 * __useGetEventLogEntriesQuery__
 *
 * To run a query within a React component, call `useGetEventLogEntriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventLogEntriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventLogEntriesQuery({
 *   variables: {
 *      startIndex: // value for 'startIndex'
 *      count: // value for 'count'
 *   },
 * });
 */
export function useGetEventLogEntriesQuery(baseOptions?: Apollo.QueryHookOptions<GetEventLogEntriesQuery, GetEventLogEntriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventLogEntriesQuery, GetEventLogEntriesQueryVariables>(GetEventLogEntriesDocument, options);
      }
export function useGetEventLogEntriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventLogEntriesQuery, GetEventLogEntriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventLogEntriesQuery, GetEventLogEntriesQueryVariables>(GetEventLogEntriesDocument, options);
        }
export type GetEventLogEntriesQueryHookResult = ReturnType<typeof useGetEventLogEntriesQuery>;
export type GetEventLogEntriesLazyQueryHookResult = ReturnType<typeof useGetEventLogEntriesLazyQuery>;
export type GetEventLogEntriesQueryResult = Apollo.QueryResult<GetEventLogEntriesQuery, GetEventLogEntriesQueryVariables>;
export const GetVcTypesDocument = gql`
    query getVcTypes {
  getVcTypes {
    vcTypeDid
    vcTypeTag
  }
}
    `;

/**
 * __useGetVcTypesQuery__
 *
 * To run a query within a React component, call `useGetVcTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVcTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVcTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetVcTypesQuery(baseOptions?: Apollo.QueryHookOptions<GetVcTypesQuery, GetVcTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVcTypesQuery, GetVcTypesQueryVariables>(GetVcTypesDocument, options);
      }
export function useGetVcTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVcTypesQuery, GetVcTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVcTypesQuery, GetVcTypesQueryVariables>(GetVcTypesDocument, options);
        }
export type GetVcTypesQueryHookResult = ReturnType<typeof useGetVcTypesQuery>;
export type GetVcTypesLazyQueryHookResult = ReturnType<typeof useGetVcTypesLazyQuery>;
export type GetVcTypesQueryResult = Apollo.QueryResult<GetVcTypesQuery, GetVcTypesQueryVariables>;
export const WhoamiDocument = gql`
    query whoami {
  whoami
}
    `;

/**
 * __useWhoamiQuery__
 *
 * To run a query within a React component, call `useWhoamiQuery` and pass it any options that fit your needs.
 * When your component renders, `useWhoamiQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWhoamiQuery({
 *   variables: {
 *   },
 * });
 */
export function useWhoamiQuery(baseOptions?: Apollo.QueryHookOptions<WhoamiQuery, WhoamiQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WhoamiQuery, WhoamiQueryVariables>(WhoamiDocument, options);
      }
export function useWhoamiLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WhoamiQuery, WhoamiQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WhoamiQuery, WhoamiQueryVariables>(WhoamiDocument, options);
        }
export type WhoamiQueryHookResult = ReturnType<typeof useWhoamiQuery>;
export type WhoamiLazyQueryHookResult = ReturnType<typeof useWhoamiLazyQuery>;
export type WhoamiQueryResult = Apollo.QueryResult<WhoamiQuery, WhoamiQueryVariables>;
export const GetAllAccountsDocument = gql`
    query getAllAccounts {
  getAllAccounts
}
    `;

/**
 * __useGetAllAccountsQuery__
 *
 * To run a query within a React component, call `useGetAllAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllAccountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllAccountsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllAccountsQuery, GetAllAccountsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllAccountsQuery, GetAllAccountsQueryVariables>(GetAllAccountsDocument, options);
      }
export function useGetAllAccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllAccountsQuery, GetAllAccountsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllAccountsQuery, GetAllAccountsQueryVariables>(GetAllAccountsDocument, options);
        }
export type GetAllAccountsQueryHookResult = ReturnType<typeof useGetAllAccountsQuery>;
export type GetAllAccountsLazyQueryHookResult = ReturnType<typeof useGetAllAccountsLazyQuery>;
export type GetAllAccountsQueryResult = Apollo.QueryResult<GetAllAccountsQuery, GetAllAccountsQueryVariables>;
export const IssuerVcDocument = gql`
    mutation issuerVC($holderDid: String!, $vcTypeDid: String!, $vcParams: String!) {
  issuerVC(holderDid: $holderDid, vcTypeDid: $vcTypeDid, vcParams: $vcParams)
}
    `;
export type IssuerVcMutationFn = Apollo.MutationFunction<IssuerVcMutation, IssuerVcMutationVariables>;

/**
 * __useIssuerVcMutation__
 *
 * To run a mutation, you first call `useIssuerVcMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useIssuerVcMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [issuerVcMutation, { data, loading, error }] = useIssuerVcMutation({
 *   variables: {
 *      holderDid: // value for 'holderDid'
 *      vcTypeDid: // value for 'vcTypeDid'
 *      vcParams: // value for 'vcParams'
 *   },
 * });
 */
export function useIssuerVcMutation(baseOptions?: Apollo.MutationHookOptions<IssuerVcMutation, IssuerVcMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<IssuerVcMutation, IssuerVcMutationVariables>(IssuerVcDocument, options);
      }
export type IssuerVcMutationHookResult = ReturnType<typeof useIssuerVcMutation>;
export type IssuerVcMutationResult = Apollo.MutationResult<IssuerVcMutation>;
export type IssuerVcMutationOptions = Apollo.BaseMutationOptions<IssuerVcMutation, IssuerVcMutationVariables>;
export const RequestVcVerificationDocument = gql`
    mutation requestVcVerification($verifierDid: String!, $vcDid: String!) {
  requestVcVerification(verifierDid: $verifierDid, vcDid: $vcDid)
}
    `;
export type RequestVcVerificationMutationFn = Apollo.MutationFunction<RequestVcVerificationMutation, RequestVcVerificationMutationVariables>;

/**
 * __useRequestVcVerificationMutation__
 *
 * To run a mutation, you first call `useRequestVcVerificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestVcVerificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestVcVerificationMutation, { data, loading, error }] = useRequestVcVerificationMutation({
 *   variables: {
 *      verifierDid: // value for 'verifierDid'
 *      vcDid: // value for 'vcDid'
 *   },
 * });
 */
export function useRequestVcVerificationMutation(baseOptions?: Apollo.MutationHookOptions<RequestVcVerificationMutation, RequestVcVerificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestVcVerificationMutation, RequestVcVerificationMutationVariables>(RequestVcVerificationDocument, options);
      }
export type RequestVcVerificationMutationHookResult = ReturnType<typeof useRequestVcVerificationMutation>;
export type RequestVcVerificationMutationResult = Apollo.MutationResult<RequestVcVerificationMutation>;
export type RequestVcVerificationMutationOptions = Apollo.BaseMutationOptions<RequestVcVerificationMutation, RequestVcVerificationMutationVariables>;
export const VerifyVcDocument = gql`
    mutation verifyVC($vcDid: String!, $verificationStatus: String!) {
  verifyVC(vcDid: $vcDid, verificationStatus: $verificationStatus)
}
    `;
export type VerifyVcMutationFn = Apollo.MutationFunction<VerifyVcMutation, VerifyVcMutationVariables>;

/**
 * __useVerifyVcMutation__
 *
 * To run a mutation, you first call `useVerifyVcMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyVcMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyVcMutation, { data, loading, error }] = useVerifyVcMutation({
 *   variables: {
 *      vcDid: // value for 'vcDid'
 *      verificationStatus: // value for 'verificationStatus'
 *   },
 * });
 */
export function useVerifyVcMutation(baseOptions?: Apollo.MutationHookOptions<VerifyVcMutation, VerifyVcMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyVcMutation, VerifyVcMutationVariables>(VerifyVcDocument, options);
      }
export type VerifyVcMutationHookResult = ReturnType<typeof useVerifyVcMutation>;
export type VerifyVcMutationResult = Apollo.MutationResult<VerifyVcMutation>;
export type VerifyVcMutationOptions = Apollo.BaseMutationOptions<VerifyVcMutation, VerifyVcMutationVariables>;