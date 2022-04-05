import { themes } from "./primary";

const defaultTheme = { ...themes, name: "default" };

export { themes } from "./primary";

export default defaultTheme;

export type ThemeType = typeof defaultTheme;
