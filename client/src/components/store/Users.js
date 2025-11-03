import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Users() {
    const navigate = useNavigate();
    return (
        <div className="users-page">
    
            <div className="buttons-wrapper">
                <button className="image-button" onClick={() => {
                    navigate("/logout")
                }}>
                    <img src="images/logout.png" alt="logout" />
                    <span className="image-label">התנתקות</span>
                </button>
                <button className="image-button" onClick={() => {
                    navigate("/register")
                }}>
                    <img src="images/register.png" alt="register" />
                    <span className="image-label">הרשמה</span>
                </button>
                <button className="image-button" onClick={() => {
                    navigate("/login")
                }}>
                    <img src="images/login.png" alt="login" />
                    <span className="image-label">כניסה</span>
                </button>
                
            </div>
        </div>
    );
}

