import Main from './src/Main';
import { NativeRouter } from 'react-router-native';
import createApolloClient from './src/utils/apolloClient';
import { ApolloProvider } from '@apollo/client';
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/hooks/useAuthStorage';
const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);
const App = () => {
  return (
    <>
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
          <Main />

        </AuthStorageContext.Provider>

      </ApolloProvider>

    </NativeRouter>
  </>
  )

};

export default App;