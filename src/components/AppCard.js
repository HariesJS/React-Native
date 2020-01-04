import React, { useContext } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { ThemeContext } from './context/theme/themeContext';

const AppCard = ({ children, ...props }) => {
    const { color } = useContext(ThemeContext);
    
    return (
        <View style={{ ...styles.default, backgroundColor: color, ...props.style }}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    default: {
        shadowOpacity: 0.8,
        shadowOffset: {
            width: 2,
            height: 2
        },
        elevation: 8,
        width: Dimensions.get('window').width / 2,
        padding: Dimensions.get('window').width / 15,
        alignItems: 'center'
    }
})

export default AppCard;