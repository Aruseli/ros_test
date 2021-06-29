import { makeStyles } from '@material-ui/core';
import React, { useRef } from 'react';

// import ReCAPTCHA from "react-google-recaptcha";
 

// export const Recaptcha = () => {
//   const recaptchaRef = useRef();
//   function onChange(value) {
//     console.log("Captcha value:", value);
//   }

//   return (<form onSubmit={() => { recaptchaRef.current.execute(); }}>
//   <ReCAPTCHA
//     ref={recaptchaRef}
//     size="invisible"
//     sitekey="Your client site key"
//     onChange={onChange}
//   />
// </form>)
// }

import Recaptcha from 'react-recaptcha';


// const useStyles = makeStyles(theme => ({
//   styleRC: {
//     width: 100,
//     height: 50
//   }
// }))
// export const RecaptchaMy = () =>{
//   var callback = function () {
//     console.log('Done!!!!');
//   };
//   var verifyCallback = function (response) {
//     console.log(response);
//   };
//   const classes = useStyles();
//   return(<Recaptcha
//     className={classes.styleRC}
//     sitekey="xxxxxxxxxxxxxxxxxxxx"
//     render="explicit"
//     verifyCallback={verifyCallback}
//     onloadCallback={callback}
// />)}

let recaptchaInstance;
 
// manually trigger reCAPTCHA execution
const executeCaptcha = function () {
  recaptchaInstance.execute();
};
 
// executed once the captcha has been verified
// can be used to post forms, redirect, etc.
const verifyCallback = function (response) {
  console.log(response);
  document.getElementById("someForm").submit();
};

export const RecaptchaMy = () => {
  return(<div>
      <form id="someForm" action="/search" method="get">
        <input type="text" name="query"/>
      </form>
      <button onClick={executeCaptcha}>Submit</button>
 
    <Recaptcha
      ref={e => recaptchaInstance = e}
      sitekey="xxxxxxxxxxxxxxxxxxxx"
      size="invisible"
      verifyCallback={verifyCallback}
    />
  </div>
);
}