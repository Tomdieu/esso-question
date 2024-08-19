import { Platform } from 'react-native';
import { lightColors, createTheme, ThemeProvider } from '@rneui/themed';

const theme = createTheme({
    lightColors: {
      ...Platform.select({
        default: lightColors.platform.android,
        ios: lightColors.platform.ios,
      }),
    },
  });

export const ReactNativeElementProvider = ({children}:{children:React.ReactNode}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};