const defaultColors = {
  "pink-400": "#F26391",
  "pink-300": "rgba(252, 102, 150, 1)",
  "pink-200": "rgba(255, 103, 152, 0.98)",
  "pink-100": "rgba(255, 103, 152, 0.78)",
  "violet-400": "#856FDE",
  "violet-300": "#8E76EC",
  "violet-200": "rgba(152, 126, 252, 0.98)",
  "violet-100": "rgba(149, 124, 247, 0.85)",
  "orange-400": "#F09730",
  "orange-300": "#FCA138",
  "orange-200": "rgba(252, 161, 56, 0.92)",
  "orange-100": "rgba(255, 163, 57, 0.84)",
  "green-400": "#2AB582",
  "green-300": "#26BF87",
  "green-200": "rgba(37, 196, 138, 0.9)",
  "green-100": "rgba(33, 207, 143, 0.78)",
  "red-200": "#F03C47",
  "red-100": "rgba(240, 60, 71, 0.96)",
  white: "#F9F9F9",
  "gray-100": "#E6E8EB",
  "gray-200": "#808080",
  "gray-300": "#494D4B"
}

export const lightTheme = {
  title: "light",
  colors: {
    bgPrimary: "rgba(250, 250, 250, 0.97)",
    bgSecondary: "#F9F9F9",
    text: "#585757",
    ...defaultColors
  }
};

export const darkTheme = {
  title: "dark",
  colors: {
    bgPrimary: "#110F0F",
    bgSecondary: "#2B2A2A",
    text: "#E5E5E5",
    ...defaultColors
  }
}

export type ThemeColorsType = {
  title: string,
  colors: {
    bgPrimary: string,
    bgSecondary: string,
    text: string,
    "pink-400": string,
    "pink-300": string,
    "pink-200": string,
    "pink-100": string,
    "violet-400": string,
    "violet-300": string,
    "violet-200": string,
    "violet-100": string,
    "orange-400": string,
    "orange-300": string,
    "orange-200": string,
    "orange-100": string,
    "green-400": string,
    "green-300": string,
    "green-200": string,
    "green-100": string,
    "red-200": string,
    "red-100": string,
    white: string,
    "gray-100": string;
    "gray-200": string;
    "gray-300": string;
  }
}