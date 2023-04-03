import { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import theme from '../theme';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 20,
  },
  list: {
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  return (
    <FlatList
            style={styles.list}
            data={repositories}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({item}) => <RepositoryItem repository={item}/>}
    />
  );
};
const RepositoryList = () => {
  const {repositories, loading} = useRepositories();
  const repositoryNodes = !loading
  ? repositories.edges.map(edge => edge.node)
  : [];
  console.log(repositories, loading);
  return (
    <View>
      {
        loading?
        <ActivityIndicator size="large" color="#0000ff" />
        : <RepositoryListContainer repositories={repositoryNodes}/>
      }
    </View>

  );
};

export default RepositoryList;
