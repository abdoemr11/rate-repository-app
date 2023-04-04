import { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet, ActivityIndicator, Pressable } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import theme from '../theme';
import RepositoryItem from './RepositoryItem';
import { useNavigate } from 'react-router-native';
import ItemSeparator from './ItemSeprator';



export const RepositoryListContainer = ({ repositories }) => {
  const navigate = useNavigate();
  const navigateToSingleRepo = (id) => {
    console.log('id : ', id);
    navigate('/repositories/' + id)
  }
  return (
    <FlatList
            data={repositories}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({item}) => <Pressable onPress={()=> navigateToSingleRepo(item.id)}> 
                    <RepositoryItem repository={item}/>
             </Pressable>}
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
