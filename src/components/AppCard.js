import React, { useContext } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { THEME } from '../theme';
import { ThemeContext } from './context/theme/themeContext';

export const AppCard = ({ children, ...props }) => {
    const { color } = useContext(ThemeContext);
    
    return (
        <View style={{ ...styles.card, backgroundColor: color, ...props.style }}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowOffset: {
            width: 2,
            height: 2
        },
        width: Dimensions.get('window').width / 1.5,
        padding: 20,
        elevation: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})