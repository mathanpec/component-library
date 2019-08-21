import colors, { colorTheme } from "./colors";
import { radii, fontSizes } from "./basic";
import { variant, VariantArgs } from "styled-system";

export const size = variant({
  prop: "size",
  variants: {
    small: {
      fontSize: fontSizes[1],
      px: 4,
      py: 2
    },
    medium: {
      fontSize: fontSizes[2],
      px: 6,
      py: 3
    },
    large: {
      fontSize: fontSizes[3],
      px: 7,
      py: 4
    }
  }
} as VariantArgs);

const common = {
  cursor: "pointer",
  borderRadius: radii[1]
};

export const type = (props: any) =>
  variant({
    prop: "type",
    variants: {
      default: {
        color: colors.white,
        bg: colorTheme[props.appearance],
        border: 0,
        textTransform: "uppercase",
        ...common,
        "&:hover": {
          bg: colorTheme[`light-${props.appearance}`]
        }
      },
      outline: {
        border: `1px solid ${colorTheme[props.appearance]}`,
        color: colorTheme[props.appearance],
        backgroundColor: "transparent",
        textTransform: "uppercase",
        ...common,
        "&:hover": {
          bg: colorTheme[`lighter-${props.appearance}`]
        }
      },
      text: {
        border: 0,
        color: colorTheme[props.appearance],
        backgroundColor: "transparent",
        textTransform: "uppercase",
        fontWeight: 500,
        ...common,
        "&:hover": {
          bg: colorTheme[`lighter-${props.appearance}`]
        }
      }
    }
  } as VariantArgs);

export default { type, size };
