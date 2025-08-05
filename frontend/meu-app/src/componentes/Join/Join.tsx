import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const propTypes = {};

const defaultProps = {};


const Join = () => {
    return (
    <div>
        <h1>Join</h1>
        <input type='text' placeholder='Nome de usuario'></input>
        <button>Entrar</button>
    </div>
    )
}

Join.propTypes = propTypes;
Join.defaultProps = defaultProps;


export default Join;