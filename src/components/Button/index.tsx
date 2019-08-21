import React from "react";
import Element from "utils/Element";
import styled from "styled-components";
import { size, type } from "theme/buttonStyle";

const ButtonElem = styled(Element)`
  ${size}
  ${type}
`;

const Button = ({ type, size, appearance, ...rest }: any) => {
  return (
    <ButtonElem
      type={type}
      size={size}
      appearance={appearance}
      as="button"
      {...rest}
    />
  );
};

Button.defaultProps = {
  type: "default",
  size: "medium",
  appearance: "primary"
};

export default Button;
