import React from 'react';
import styled from 'styled-components';



const propTypes = {};

const defaultProps = {};


const Chat = () => {
    return (
    <div>
        <h1>Chat</h1>
        <input type='text' placeholder='Mensagem'></input>
        <button>Enviar</button>
    </div>
    )
}

Chat.propTypes = propTypes;
Chat.defaultProps = defaultProps;


export default Chat;