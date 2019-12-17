import React from 'react';
import { View, StyleSheet } from 'react-native';
import { THEME } from '../theme';

const AppCard = ({ children }) => {
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: THEME.MAIN_COLOR,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 3,
            height: 3,
        },
        elevation: 8,
        width: '80%',
        padding: 20,
    }
})

export default AppCard;