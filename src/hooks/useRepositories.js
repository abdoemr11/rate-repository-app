import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
    const { loading, error, data } = useQuery(GET_REPOSITORIES, {fetchPolicy: 'cache-and-network'});
    console.log('from apollo',loading, error,data);
    let repositories = []
    repositories = !loading? data.repositories: []

    return { repositories, loading};

}

export default useRepositories;