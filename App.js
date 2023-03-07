import Main from './src/Main';
import { NativeRouter } from 'react-router-native';
import createApolloClient from './src/utils/apolloClient';
import { ApolloProvider } from '@apollo/client';
const apolloClient = createApolloClient();
const App = () => {
  return (
    <>
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main />

      </ApolloProvider>

    </NativeRouter>
  </>
  )

};

export default App;