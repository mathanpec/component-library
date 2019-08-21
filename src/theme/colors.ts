const colors = {
  white: "#fff",
  reds: ["#feebe6", "#ffbdad", "#ff5630", "#df350b", "#bf2600"],
  yellows: ["#fffae6", "#fef0b3", "#ffab00", "#ff8b00"],
  blues: ["#deebff", "#b3d5ff", "#2683ff", "#0064ff", "#0747a5"],
  greens: ["#e2ffee", "#abf5d2", "#36b37d", "#008759", "#006544"],
  grays: ["#dfe1e6", "#b3bac6", "#8893a4", "#5d6b84", "#091e42"],
  black: "#00000"
};

export const colorTheme = {
  primary: colors.blues[3],
  success: colors.greens[3],
  danger: colors.reds[3],
  "light-primary": colors.blues[2],
  "light-success": colors.greens[2],
  "light-danger": colors.reds[2],
  "lighter-primary": colors.blues[0],
  "lighter-success": colors.greens[0],
  "lighter-danger": colors.reds[0]
};

export default colors;
