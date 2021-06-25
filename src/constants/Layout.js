import { Dimensions, Platform, StyleSheet, StatusBar } from 'react-native';
import Colors from './Colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const WIDTH = width;
export const WIDTH_UNIT = width / 375;
export const HEIGHT = height;
export const DEFAULT_MARGIN = WIDTH_UNIT * 20;
const defaultHorizontalMargin = WIDTH_UNIT * 20;
const defaultPaddingXS = width * 0.01;
const defaultPaddingS = width * 0.02;
const defaultPaddingM = width * 0.04;
const defaultPaddingL = width * 0.053;
const defaultPaddingXL = width * 0.08;
const defaultPadding13 = width * 0.013;
const defaultPadding27 = width * 0.027;
const defaultPadding53 = width * 0.0533;
const defaultPadding66 = width * 0.066;
const defaultPadding93 = width * 0.093;
const defaultPadding147 = width * 0.147;
const defaultPadding187 = width * 0.187;

const defaultBorderRadius = 4;

const defaultRadius = 15;
const dimen = Dimensions.get('window');

export function isIphoneXorAbove() {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (height === 812 ||
      width === 812 ||
      height === 896 ||
      width === 896 ||
      (height === 844 && width === 390) ||
      dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 844 ||
      dimen.width === 844 ||
      dimen.height === 896 ||
      dimen.width === 896 ||
      dimen.height === 926 ||
      dimen.width === 926)
  );
}

const isIphoneX =
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  ((Dimensions.get('window').height === 812 && Dimensions.get('window').width === 375) ||
    (Dimensions.get('window').height === 844 && Dimensions.get('window').width === 390) ||
    Dimensions.get('window').height === 896 ||
    dimen.height === 780 ||
    dimen.width === 780 ||
    dimen.height === 812 ||
    dimen.width === 812 ||
    dimen.height === 844 ||
    dimen.width === 844 ||
    dimen.height === 896 ||
    dimen.width === 896 ||
    dimen.height === 926 ||
    dimen.width === 926);
const keyboardVerticalOffset = Platform.OS === 'ios' ? (isIphoneX ? 90 : 60) : 80;
export const BOTTOM_PADDING = Platform.OS === 'ios' ? (isIphoneXorAbove() ? 25 : 0) : 0;

const statusBarHeight = Platform.OS === 'ios' ? (isIphoneXorAbove() ? 44 : 20) : 0; //StatusBar.currentHeight;

// const navigationOptions = {
//   headerLayoutPreset: 'left',
//   defaultNavigationOptions: {
//     headerTintColor: Colors.mainBlack,
//     headerTitleStyle: {
//       // fontFamily: 'bold',
//       fontSize: 16,
//       marginHorizontal: 0,
//       paddingTop: 0,
//       paddingBottom: 0,
//       // backgroundColor: 'yellow',
//     },
//     headerTitleContainerStyle: {
//       // backgroundColor: 'blue',
//       marginLeft: Platform.OS === 'ios' ? 13 : 0,
//       marginRight: Platform.OS === 'ios' ? 13 : 0,
//       paddingLeft: Platform.OS === 'ios' ? 13 : 0,
//     },
//     headerLeftContainerStyle: {
//       // backgroundColor: 'green',
//       // marginRight: 10,
//     },
//     headerRightContainerStyle: {
//       // backgroundColor: 'green',
//     },
//     headerStyle: {
//       backgroundColor: Colors.backgroundColor,
//       shadowColor: 'transparent',
//       borderBottomWidth: 0,
//       elevation: 0,
//     },
//   },
// };

// const themeStyle = StyleSheet.create({
//   box: {
//     padding: defaultPaddingL,
//     backgroundColor: 'white',
//   },
//   shadow: {
//     elevation: 3,
//     shadowOpacity: 0.2,
//     // shadowColor:Colors,
//     shadowRadius: 2,
//     shadowOffset: {
//       height: 2,
//       width: 0,
//     },
//   },
//   fullWidthButtonContainer: {
//     backgroundColor: Colors.buttonColor,
//     height: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   fullWidthButtonText: {
//     textAlign: 'center',
//     includeFontPadding: false,
//     fontSize: 16,
//     textAlignVertical: 'center',
//     fontFamily: 'bold',
//     color: 'white',
//   },
//   h1Text: {
//     fontSize: 20,
//   },
//   h2Text: {
//     fontSize: 18,
//   },
//   h3Text: {
//     fontSize: 16,
//     fontFamily: 'bold',
//   },
//   body: {
//     fontSize: 14,
//   },
//   buttonText: {
//     color: Colors.buttonColor,
//     fontFamily: 'bold',
//   },
//   descriptionGreyText: {
//     fontSize: 12,
//     color: Colors.fontGrey,
//   },

//   devMessageText: {
//     fontSize: 12,
//     color: Colors.notificationRed,
//   },

//   navigationHeaderContainer: {
//     // backgroundColor: Colors.mainColor,
//     // backgroundColor: 'white',
//     paddingTop: statusBarHeight,
//     paddingHorizontal: defaultHorizontalMargin,
//     height: 40 + statusBarHeight,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },

//   moduleHeaderContainer: {
//     backgroundColor: '#BCBCBC',
//     paddingVertical: DEFAULT_MARGIN / 4,
//     paddingHorizontal: DEFAULT_MARGIN,
//   },
//   moduleHeaderContainerHorizontal: {
//     backgroundColor: '#BCBCBC',
//     paddingVertical: DEFAULT_MARGIN / 4,
//     paddingHorizontal: DEFAULT_MARGIN,
//     alignItems: 'center',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   moduleHeaderText: {
//     color: 'white',
//     fontSize: 10,
//     fontFamily: 'bold',
//   },
//   moduleBodyContainer: {
//     paddingVertical: WIDTH_UNIT * 25,
//     paddingHorizontal: DEFAULT_MARGIN,
//   },
// });

export default {
  window: {
    width,
    height,
  },
  keyboardVerticalOffset,
  // themeStyle,
  defaultRadius,
  defaultHorizontalMargin,
  defaultPaddingXS,
  defaultPaddingS,
  defaultPaddingM,
  defaultPaddingL,
  defaultPaddingXL,
  isSmallDevice: width < 375,
  isIphoneX,

  defaultBorderRadius,

  // navigationOptions,
  defaultPadding13,
  defaultPadding27,
  defaultPadding53,
  defaultPadding66,
  defaultPadding93,
  defaultPadding147,
  defaultPadding187,

  statusBarHeight,
};
