import { Platform } from "react-native";

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',

      appBarBackColor: "#24292e",
      error: "#ff1122"
    },
    fontSizes: {
      body: 14,
      subheading: 16,
    },
    fonts: {
      main: Platform.select({
        default: 'System',
        android: 'Roboto',
        ios: 'Arial'
      }),
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
  };
  
  export default theme;