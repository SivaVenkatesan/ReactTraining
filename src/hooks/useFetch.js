import { useState, useEffect } from "react";

function useFetch(){
    const [postData, setPostData] = useState([]);
    const [error, setError] = useState(null);
    useEffect( () => {

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => setPostData(data?.slice(0, 6))) //showing first 6 posts
            .catch((error) => setError(error));

    }, []);
    return { postData, error };
    //to check empty state and error scenario
    //return { postData: [], error: 'There is an error fetching posts' };
}
export default useFetch;

