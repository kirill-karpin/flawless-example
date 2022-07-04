import { gql, useMutation } from '@apollo/client';

export const SingInMutation = gql`
  mutation SingIn($input: SingInInput!) {
    auth: singIn(input: $input) {
      token
    }
  }
`;
export const useSingIn = (): any => useMutation(SingInMutation);
