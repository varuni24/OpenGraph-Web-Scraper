import React from 'react'
import { useNavigate } from 'react-router';

function NavigationBar() {
    const navigate = useNavigate();
    return (
      <div>
        <button onClick={() => navigate("/")}> Home </button>
        <button onClick={() => navigate("/documentation")}> Documentation </button>
        <button onClick={() => navigate("/tryme")}> Try Me! </button>
      </div>
    );
}

export default NavigationBar

