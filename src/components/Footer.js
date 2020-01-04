import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { ThemeContext } from './context/theme/themeContext';
import { Feather } from '@expo/vector-icons';

const WithFeather = ({ name }) => (
    <TouchableOpacity>
        <Feather name={name} size={35} color='white' />
    </TouchableOpacity>
)

const FooterBlock = () => {
    const { color } = useContext(ThemeContext);
    
    return (
        <View style={{ ...styles.footer, backgroundColor: color }}>
            <WithFeather name='menu' />
            <WithFeather name='search' />
            <WithFeather name='users' />
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        shadowOpacity: 0.8,
        shadowOffset: {},
        flexDirection: 'row-reverse',
        padding: Platform.OS === 'ios' ? '2%' : 0,
    }
})

export default FooterBlock;