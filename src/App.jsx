import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import imgDesktop from './images/hero-desktop.jpg';
import logo from './images/logo.svg';
import arrow from './images/icon-arrow.svg';
import errorIcon from './images/icon-error.svg';
import imgMobile from './images/hero-mobile.jpg';

function App() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
  };

  const validateEmail = () => {
    if (!email.includes('@')) {
      setError('Please provide a valid email');
      return false;
    }
    setError('');
    return true;
  };

  const handleClick = () => {
    const isValidEmail = validateEmail();
  };

  return (
    <>
      <div className="container">
        <div className="info-coming">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="principal">
            <img src={imgMobile} alt="" />
          </div>
          <div className='row'>
            <div className="title">
              <h1 className='we-are'>We're</h1>
              <h1 className='coming-soon'>coming <br/> soon</h1>
            </div>
            <div className="text">
              <p>Hello fellow shoppers! We're currently building our new <br/> fashion store. 
              Add your email below to stay up-to-date with <br/> announcements and our launch deals.</p>
            </div>
            <form action="" noValidate>
              <div className="input">
                <div className='container-form'>
                <input type="email" placeholder='Email Address' 
                  required 
                  value={email} 
                  onChange={handleInputChange} 
                  className={error ? 'error-border ' : ''}
                />
               {error ?  <div className='error-icon'>
                  <img src={errorIcon} alt="erro" />
                </div> : ''}
                <div className="error-message">{error}</div>
                </div>
                <div className="button">
                  <button type='button' onClick={handleClick}>
                    <img src={arrow} alt="" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="img-principal">
          <img src={imgDesktop} alt="imagem principal" />
        </div>
      </div>

        {/*<footer>
          <p class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="#">Your Name Here</a>.
          </p>
        </footer>*/}
    </>
  )
}

export default App
