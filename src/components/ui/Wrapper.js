import { Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

export const Wrapper = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;