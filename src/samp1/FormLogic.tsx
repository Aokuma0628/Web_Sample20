import React, { FC, useState, useRef } from 'react';
import Form from './Form';

export type InputValue = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: INPUT_TYPE;
  setType: React.Dispatch<React.SetStateAction<INPUT_TYPE>>;
  errMsg: string;
  setErrMsg: React.Dispatch<React.SetStateAction<string>>;
  ref: React.RefObject<HTMLInputElement>
};

export enum INPUT_TYPE {
  NORMAL = 0,
  ERROR,
  SUCCESS,
}


const useInput = (initValue: string, initMsg: string): InputValue => {
  const[value, setValue]         = useState(initValue);
  const[type, setType]           = useState(INPUT_TYPE.NORMAL);
  const[errMsg, setErrMsg]       = useState(initMsg);

  const ref = useRef<HTMLInputElement>(null);

  return ({
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    type,
    setType,
    errMsg,
    setErrMsg,
    ref,
  });
};

const getFieldName = (input: InputValue): string => {
  const element = input.ref.current;
  return element ? element.id : '';
};

const showError = (input: InputValue, message: string): void => {
  input.setType(INPUT_TYPE.ERROR);
  input.setErrMsg(message);
};

const showSuccess = (input: InputValue): void => {
  input.setType(INPUT_TYPE.SUCCESS);
  input.setErrMsg('');
};

const showNormal = (input: InputValue): void => {
  input.setType(INPUT_TYPE.NORMAL);
  input.setErrMsg('');
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
  } 
  else {
    showError(input, 'Email is not valid');
  }
};

const checkPasswordsMatch = (input1: InputValue, input2: InputValue):void => {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
  else {
    showSuccess(input2);
  }
};

// Container
const FormLogic: FC = () => {
  const name    = useInput('', '');
  const email   = useInput('', '');
  const passwd  = useInput('', '');
  const passwd2 = useInput('', '');

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
