import React from 'react';
import InputMask, { Props } from 'react-input-mask';
 

function InputTel(props: JSX.IntrinsicAttributes & 
  JSX.IntrinsicClassAttributes<InputMask> & 
  Readonly<Props> & 
  Readonly<{ children?: React.ReactNode; }>): JSX.Element {
  return (
    <InputMask {...props} 
    mask="99 99999 9999"
    type="tel"
    placeholder="Digite o número com o DDD" 
    className="form-control"
    style={{marginBottom:"20px"}}
    required
   
    />
  )
};

export default InputTel;