import React, { useContext } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { THEME } from '../../theme';
import { ThemeContext } from '../context/theme/themeContext';

export const AppLoad = () => {
    const { color } = useContext(ThemeContext);
    return (
        <View style={styles.loader}>
            <ActivityIndicator size='large' color={color} />
        </View>
    )
}

const styles = StyleSheet.create({
    loader: {
        flex: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})