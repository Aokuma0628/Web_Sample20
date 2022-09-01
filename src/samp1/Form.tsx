import React, { FC } from 'react';
import { InputValue, INPUT_TYPE } from './FormLogic';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const containerStyle = css`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  width: 400px;
`;

const titleStyle = css`
  text-align: center;
  margin: 0 0 20px;
`;

const formStyle = css`
  padding: 30px 40px;
`;

const formControlStyle = css`
  margin-bottom: 10px;
  padding-bottom: 20px;
  position: relative;
`;

const formControlLabelStyle = css`
  color: #777;
  display: block;
  margin-bottom: 5px;
`;

const formButtonStyle = css`
  cursor: pointer;
  background-color: #3498db;
  border: 2px solid #3498db;
  border-radius: 4px;
  color: #fff;
  display: block;
  font-size: 16px;
  padding: 10px;
  margin-top: 20px;
  width: 100%;
`;

const getFormInputStyle = (type: INPUT_TYPE) => {
  let color = '';

  switch(type) {
  case INPUT_TYPE.NORMAL:
    color = '';
    break;
  case INPUT_TYPE.ERROR:
    color = '#e74c3c';
    break;
  case INPUT_TYPE.SUCCESS:
    color = '#2ecc71';
    break;
  }

  return css`
    border: 2px solid #f0f0f0;
    border-radius: 4px;
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 14px;
    ${color.length > 0 && 'border-color: ' + color + ';'}
  `;
};

const getSmallStyle = (length: number) => {
  return css`
    color: var(--error-color);
    position: absolute;
    bottom: 0;
    left: 0;
    visibility: ${length > 0 ? 'visible' : 'hidden'};
    color: red;
  `;
};


type Props = {
  inputs: InputValue[];
  submit: (e: React.FormEvent) => void;
};


// Presentational
const Form: FC<Props> = (props) => {
  const [name, email, passwd, passwd2] = props.inputs;
  const submitFunc = props.submit;

  return (
    <div css={containerStyle}>
      <form id="form" className="form" onSubmit={submitFunc} css={formStyle}>
        <h2 css={titleStyle}>Register With Us</h2>
        <div className='form-control' css={formControlStyle}>
          <label htmlFor="username" css={formControlLabelStyle}>Username</label>
          <input type="text" id="username" placeholder="Enter username" ref={name.ref}
            autoComplete="off" onChange={name.onChange} css={getFormInputStyle(name.type)}/>
          <small css={getSmallStyle(name.errMsg.length)}>{name.errMsg}</small>
        </div>
        <div className='form-control' css={formControlStyle}>
          <label htmlFor="email" css={formControlLabelStyle}>Email</label>
          <input type="text" id="email" placeholder="Enter email" ref={email.ref}
            autoComplete="off" onChange={email.onChange} css={getFormInputStyle(email.type)} />
          <small css={getSmallStyle(email.errMsg.length)}>{email.errMsg}</small>
        </div>
        <div className='form-control' css={formControlStyle}>
          <label htmlFor="password" css={formControlLabelStyle}>Passwod</label>
          <input type="text" id="password" placeholder="Enter password" ref={passwd.ref}
            autoComplete="off" onChange={passwd.onChange} css={getFormInputStyle(passwd.type)} />
          <small css={getSmallStyle(passwd.errMsg.length)}>{passwd.errMsg}</small>
        </div>
        <div className='form-control' css={formControlStyle}>
          <label htmlFor="confirm-password" css={formControlLabelStyle}>Confirm Password</label>
          <input type="text" id="confirm-password" placeholder="Enter confirm password" 
            ref={passwd2.ref} autoComplete="off" 
            onChange={passwd2.onChange} css={getFormInputStyle(passwd2.type)} />
          <small css={getSmallStyle(passwd2.errMsg.length)}>{passwd2.errMsg}</small>
        </div>
        <button type="submit" css={formButtonStyle}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
