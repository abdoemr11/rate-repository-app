import { ApolloError, useApolloClient, useMutation } from "@apollo/client";
import { AUTHENTICATE_USER } from "../graphql/mutations";
import { useAuthStorage } from "./useAuthStorage";

const useSignIn = () => {
    const [mutate, result] = useMutation(AUTHENTICATE_USER);
    const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

    const signIn = async ({ username, password }) => {
    console.log('getting the accesstoken from useSignIn',await authStorage.getAccessToken());

        const credentials = { password: password}
        try {
          await mutate({ variables: {
            credentials: {
              username: username,
              password: password,
            },
          },})
          authStorage.setAccessToken(result.data.authenticate.accessToken)
        } catch (error) {
          console.log('When mutation ', error);
          //possibly check the type of the error then probagate
          throw error
        }

        // if(!result.loading)
        //   authStorage.
        apolloClient.resetStore();

        return result;
    };
  
    return [signIn, result.loading];
  };

  export default useSignIn;