import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';
import { THEME } from '../theme';
import { ThemeContext } from './context/theme/themeContext';

const WithNav = (Component, name, color = 'white') => (
    <TouchableOpacity>
        <Component name={name} size={35} color={color} />
    </TouchableOpacity>
)

export const FooterBlock = () => {
    const { color } = useContext(ThemeContext);
    
    return (
        <View style={{...styles.footer, backgroundColor: color}}>
            {WithNav(Feather, 'menu')}
            {WithNav(Feather, 'message-circle')}
            {WithNav(Entypo, 'users')}
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: Platform.OS === 'ios' ? '3%' : 0,
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowOffset: {},
    }
})