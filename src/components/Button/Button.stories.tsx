import React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import Button from "./index";
import Example from "utils/Example";

setAddon(JSXAddon);

(storiesOf("Button", module) as any).addWithJSX("Normal Buttons", () => (
  <Example>
    <Button appearance="primary" mx={2}>
      Primary
    </Button>
    <Button appearance="success" mx={2}>
      Success
    </Button>
    <Button appearance="danger" mx={2}>
      Danger
    </Button>
  </Example>
));

(storiesOf("Button", module) as any).addWithJSX("Outlined Buttons", () => (
  <Example>
    <Button appearance="primary" type="outline" mx={2}>
      Primary
    </Button>
    <Button appearance="success" type="outline" mx={2}>
      Success
    </Button>
    <Button appearance="danger" type="outline" mx={2}>
      Danger
    </Button>
  </Example>
));

(storiesOf("Button", module) as any).addWithJSX("Text Buttons", () => (
  <Example>
    <Button appearance="primary" type="text" mx={2}>
      Primary
    </Button>
    <Button appearance="success" type="text" mx={2}>
      Success
    </Button>
    <Button appearance="danger" type="text" mx={2}>
      Danger
    </Button>
  </Example>
));

(storiesOf("Button", module) as any).addWithJSX("Size variant", () => (
  <Example>
    <Button size="small" mx={2} my={3}>
      Small
    </Button>
    <Button size="medium" mx={2} my={3}>
      Medium
    </Button>
    <Button size="large" mx={2} my={3}>
      Large
    </Button>
    <br />
    <Button size="small" type="outline" mx={2} my={3}>
      Small
    </Button>
    <Button size="medium" type="outline" mx={2} my={3}>
      Medium
    </Button>
    <Button size="large" type="outline" mx={2} my={3}>
      Large
    </Button>
    <br />
    <Button size="small" type="text" mx={2} my={3}>
      Small
    </Button>
    <Button size="medium" type="text" mx={2} my={3}>
      Medium
    </Button>
    <Button size="large" type="text" mx={2} my={3}>
      Large
    </Button>
  </Example>
));
