import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
    const [repositories, setRepositories] = useState();
    const { loading, error, data } = useQuery(GET_REPOSITORIES, {fetchPolicy: 'cache-and-network'});
    console.log('from apollo',loading,data);



    return { repositories, loading};

}

export default useRepositories;