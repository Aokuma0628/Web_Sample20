import React, { FC, useState, useRef } from 'react';
import Form from './Form';

export type InputValue = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className: string;
    setClassName: React.Dispatch<React.SetStateAction<string>>;
    errMsg: string;
    setErrMsg: React.Dispatch<React.SetStateAction<string>>;
    ref: React.RefObject<HTMLInputElement>
};


const useInput = (initValue: string, initClass: string, initMsg: string): InputValue => {
  const[value, setValue]         = useState(initValue);
  const[className, setClassName] = useState(initClass);
  const[errMsg, setErrMsg]       = useState(initMsg);

  const ref = useRef<HTMLInputElement>(null);

  return ({
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    className,
    setClassName,
    errMsg,
    setErrMsg,
    ref,
  });
};

const showError = (input: InputValue, message: string): void => {
  input.setClassName('form-control error');
  input.setErrMsg(message);
};

const showSuccess = (input: InputValue): void => {
  input.setClassName('form-control success');
};

const showNormal = (input: InputValue): void => {
  input.setClassName('form-control');
};

const getFieldName = (input: InputValue): string => {
  const element = input.ref.current;

  return element ? element.id : '';
};

const checkRequired = (inputArr: InputValue[]): boolean => {
  let isRequired = false;

  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
      isRequired = true;
    }
    else {
      showNormal(input);
    }
  });

  return isRequired;
};

const checkLength = (input:InputValue, min: number, max: number):void => {
  if (input.value.length < min) {
    showError(
      input, 
      `${getFieldName(input)} must be at least ${min} characters`,
    );
  }
  else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`,
    );
  }
  else {
    showSuccess(input);
  }
};

const checkEmail = (input: InputValue):void => {
  // eslint-disable-next-line no-useless-escape, max-len
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
};

const checkPasswordsMatch = (input1: InputValue, input2: InputValue):void => {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
};

// Container
const FormLogic: FC = () => {
  const name    = useInput('', 'form-control', 'Error message');
  const email   = useInput('', 'form-control', 'Error message');
  const passwd  = useInput('', 'form-control', 'Error message');
  const passwd2 = useInput('', 'form-control', 'Error message');

  const SubmitFunc = (e: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!checkRequired([name, email, passwd, passwd2])) {
      checkLength(name, 3, 15);
      checkLength(passwd, 6, 25);
      checkEmail(email);
      checkPasswordsMatch(passwd, passwd2);
    }
  };

  return (
    <Form inputs={[name, email, passwd, passwd2]} submit={SubmitFunc} />
  );
};

export default FormLogic;
