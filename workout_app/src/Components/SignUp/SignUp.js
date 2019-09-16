import React from 'react';
import Logo from './logo.png'

function SignUp() {
  return (
    <div className="App">
                    <div className="box">
              <div className="sign__in"> 
                <br />
                Welcome to FIT<br />
               <p> create your profile </p>
                <br />
                <br />
              </div>
               <br />
              <img src={Logo} />
               <br />
               <br />
              <form>
                <label>
                  <input type="text" name="name" placeholder="Email" className="email"/>
                </label>
                <br />
                <hr className="sign__in__hr" />
                <br />
                <input type="password" name="name" placeholder="Password" className="password" />
                <br />
                <hr className="sign__in__hr" />
                <br />
                <br />
                <input type="submit" value="READY?" className='button'/>
              </form>  
              <br />
              <br />
              <br />

              </div>       
            </div>
  );
}

export default SignUp;
