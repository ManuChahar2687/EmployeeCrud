import axios from 'axios';
import {  useEffect, useState } from 'react';
// import Message from '../Components/Message';


function HelloService(props) 
{
    const baseURL = "http://localhost:8081/";

    const [message,setmessage] = useState();

    const getHelloMessage =  () => {
        axios.get(baseURL+'hello')
        .then((response)=>{
            setmessage(response.data);
            console.log(message);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return (
        <>
        {getHelloMessage()}
        <p>message print: {message}</p>
        </>
    )

};

export default HelloService;






