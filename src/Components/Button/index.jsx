import React from 'react';
import './Button.css'

const Button = ({ children, onClick, className = '', disabled }) => {
    return (
        <button className={`custom-button ${className}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
