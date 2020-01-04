import React, { useContext } from 'react';
import { ActivityIndicator, Text, View, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/theme/themeContext';

export const AppLoad = () => {
    const { color } = useContext(ThemeContext);

    return (
        <View style={styles.loader}>
            <ActivityIndicator size='large' color={color} />
        </View>
    );
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})