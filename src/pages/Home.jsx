import { useState } from "react";
import Training from '../components/Training';
import { useLocation } from 'react-router-dom';

function Home() {
     const location = useLocation();
     const userDetails = location.state?.userDetails;
     const [childInputValue, setChildInputValue] = useState("Default Value");
    return (
        <>
            <h2 className="text-3xl font-bold my-3">Hello, {userDetails?.email || "Siva Venkatesan"}</h2> 
            <h3 className="text-3xl font-bold my-3"> Testing CI/CD </h3>
            <p className='text-2xl font-bold my-3'>Data from child input: <span className='text-red-600'>{childInputValue}</span></p>
            <Training userDetails={userDetails} inputDatatoParent={setChildInputValue} />  
        </>
    );
}

export default Home;
