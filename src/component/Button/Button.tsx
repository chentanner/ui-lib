import React, { FC, useState } from 'react';
import './Button.css';
import { useEffect } from 'react';

interface ButtonProps {
  label: string;
  api?: string;
}

class ButtonApiResponse {
  title = ""
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {

  const [label, setLabel] = useState<string | undefined>();

  useEffect(() => {
    setLabel(props.label);
  }, [])

  useEffect(() => {
    if (props.api) {
      fetch(props.api)
        .then(response => {
          return response.json()
        })
        .then((data: ButtonApiResponse) => {
          Object.assign(new ButtonApiResponse(), data);
          setLabel(data.title)
        })
    }
  }, [props.api]);

  return (
    <button>{label ? label : ""}</button>
  );
}

export default Button;
