import colors, { colorTheme } from "./colors";
import { variant, VariantArgs } from "styled-system";

export const size = variant({
  prop: "size",
  variants: {
    small: {
      fontSize: 1,
      px: 4,
      py: 2
    },
    medium: {
      fontSize: 2,
      px: 6,
      py: 3
    },
    large: {
      fontSize: 3,
      px: 7,
      py: 4
    }
  }
} as VariantArgs);

const common = {
  borderRadius: 3,
  textTransform: "uppercase"
};

export const type = (props: any) =>
  variant({
    prop: "type",
    variants: {
      default: {
        color: props.disabled ? colors.grays[1] : colors.white,
        bg: props.disabled ? colors.grays[0] : colorTheme[props.appearance],
        border: 0,
        cursor: props.disabled ? "default" : "pointer",
        ...common,
        "&:hover": {
          bg: props.disabled
            ? colors.grays[0]
            : colorTheme[`light-${props.appearance}`]
        }
      },
      outline: {
        border: `1px solid ${
          props.disabled ? colors.grays[1] : colorTheme[props.appearance]
        }`,
        color: props.disabled ? colors.grays[1] : colorTheme[props.appearance],
        backgroundColor: "transparent",
        cursor: props.disabled ? "default" : "pointer",
        ...common,
        "&:hover": {
          bg: props.disabled
            ? "transparent"
            : colorTheme[`lighter-${props.appearance}`]
        }
      },
      text: {
        border: 0,
        color: props.disabled ? colors.grays[1] : colorTheme[props.appearance],
        backgroundColor: "transparent",
        fontWeight: 500,
        cursor: props.disabled ? "default" : "pointer",
        ...common,
        "&:hover": {
          bg: props.disabled
            ? "transparent"
            : colorTheme[`lighter-${props.appearance}`]
        }
      }
    }
  } as VariantArgs);

export default { type, size };
