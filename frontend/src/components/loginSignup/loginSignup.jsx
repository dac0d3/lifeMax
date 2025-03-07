import React from 'react';
import '../../css/loginSignup.css';

const LoginSignup = () => {
    return (
        
        <div class = "container">
            <div class = "header">
                <div class = "title">Sign Up</div>
                <div class = "underline"></div>
            </div>
            
            <div class = "inputs">
                <div class = "input"></div>
                <input type = "text" placeholder = "Username" />
                <input type = "text" placeholder = "Email" />
                <input type = "password" placeholder = "Password" />
            </div>

               
    
        </div>
        
    );
}

export default LoginSignup;



