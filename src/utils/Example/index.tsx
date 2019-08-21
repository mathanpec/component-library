import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "theme";

const Element = styled("div")`
  font-family: "Roboto";
`;

const Example = (props: any) => {
  return (
    <ThemeProvider theme={theme}>
      <Element>{props.children}</Element>
    </ThemeProvider>
  );
};

export default Example;
