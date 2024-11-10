import { client } from '@/lib/rpc';
import { useMutation } from '@tanstack/react-query';
import { InferRequestType, InferResponseType } from 'hono';

type ResponseType = InferResponseType<(typeof client.api.auth.login)['$post']>;
type RequestType = InferRequestType<
  (typeof client.api.auth.login)['$post']
>['json'];

export const useLogin = () => {
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async json => {
      try {
        const response = await client.api.auth.login['$post']({ json });

        // Check if the response is ok (HTTP status 2xx)
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        return await response.json();
      } catch (error) {
        console.error('Login mutation error:', error);
        throw error; // Ensure the error is thrown to be caught by React Query
      }
    },
  });

  return mutation;
};
