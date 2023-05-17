import React, { useState } from 'react';


const Converpage = (props) =>{

    const[newchat, setnewchat] = useState(" ");

const NEWCHAT = () =>
{
    setnewchat(props.text)
}

    return(
        <>
        
        <div onClick={NEWCHAT} className="USERNAME">
             {props.text}  
        </div>
        </>
    );
};

export default Converpage;