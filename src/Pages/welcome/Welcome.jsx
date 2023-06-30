import React, { useEffect } from 'react'
import './Welcome.css';
import { useNavigate } from 'react-router-dom';
export default function Welcome() {
  const navigate = useNavigate();
  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigate('/')
    }, 2000)
    return () => clearTimeout(timeOut)
  }, [navigate]);
  return (
    <div id='welcome'> <span>Welcome To </span> <span id='social-vibes' ><span id='social'> Social</span><span>Vibes</span></span></div>
  )
}
