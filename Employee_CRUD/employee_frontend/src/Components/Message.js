import { getHelloMessage, result} from '../Services/HelloService';
import {  useEffect, useState } from 'react';

function Message(props) {

        // const [hellomessage,sethellomessage] = useState('');
        // const mes2 = getHelloMessage();
        const [mess,setmessage]=useState(props.result);

        // useEffect( ()=>{
        //     fetchHelloMessage();
        // },[]);
    

    // const fetchHelloMessage = async ()=>{
    //     try {
    //         const mes = await getHelloMessage();
    //         sethellomessage(mes);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
       return (
        <>
            <p>This is react</p>
            {/* <p>{hellomessage}</p> */}
            <p>hb{mess}</p>
            <p>{getHelloMessage}</p>
            <p>{result}</p>
        </>
    )
}

export default Message;







