const size = {
  mobile: "20rem", //320px
  tablet: "30rem", //480px
  laptop: "48rem", //768px
  desktop: "64rem", //1024px
  desktopLarge: "76rem", //1216px
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopLarge: `(min-width: ${size.desktop})`,
};
