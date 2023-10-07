const COLORS = {
  primary: "#312651",
  secondary: "#444262",
  tertiary: "#FF7754",

  white: "#fff",

  accents1: "#111",
  accents2: "#333",
  accents3: "#444",
  accents4: "#666",
  accents5: "#888",
  accents6: "#999",
  accents7: "#eaeaea",
  accents8: "#fafafa",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
  homenaje: "HomenajeRegular",
};

const SIZES = {
  xxSmall: 5,
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  bar: {
    shadowColor: "#999",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.84,
  },
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
