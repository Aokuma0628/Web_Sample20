import React, { FC } from 'react';
import { InputValue } from './FormLogic';


type Props = {
  inputs: InputValue[];
  submit: (e: React.FormEvent) => void;
};


// Presentational
const Form: FC<Props> = (props) => {
  const [name, email, passwd, passwd2] = props.inputs;
  const submitFunc = props.submit;

  return (
    <div className='container'>
      <form id="form" className="form" onSubmit={submitFunc}>
        <h2>Register With Us</h2>
        <div className={name.className}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter username" ref={name.ref}
            autoComplete="off" onChange={name.onChange} />
          <small>{name.errMsg}</small>
        </div>
        <div className={email.className}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Enter email" ref={email.ref}
            autoComplete="off" onChange={email.onChange} />
          <small>{email.errMsg}</small>
        </div>
        <div className={passwd.className}>
          <label htmlFor="password">Passwod</label>
          <input type="text" id="password" placeholder="Enter password" ref={passwd.ref}
            autoComplete="off" onChange={passwd.onChange} />
          <small>{passwd.errMsg}</small>
        </div>
        <div className={passwd2.className}>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="text" id="confirm-password" placeholder="Enter confirm password" 
            ref={passwd2.ref} autoComplete="off" onChange={passwd2.onChange} />
          <small>{passwd2.errMsg}</small>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
