import React, { InputHTMLAttributes } from "react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function TextField(props: Props) {
  return (
    <div>
      <span>{props.label}</span>
      <input {...props} />
    </div>
  );
}

export default TextField;
