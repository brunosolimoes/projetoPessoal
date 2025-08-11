import React, {useRef} from 'react';
import styled from 'styled-components';


const propTypes = {};
const defaultProps = {};


const Join = ({setChatVisibility}) => {

    const usernameRef = useRef<HTMLInputElement>(null);

    const handleSubmit = ()=>{
        const username = usernameRef.current.value
        if(!username.trim()){return} 
        console.log('Submit')
        setChatVisibility(true)
    }

    return (
    <div>
        <h1>Join</h1>
        <input type='text' ref={usernameRef} placeholder='Nome de usuario'></input>
        <button onClick={()=>handleSubmit()}>Entrar</button>
    </div>
    )
}


Join.propTypes = propTypes;
Join.defaultProps = defaultProps;


export default Join;