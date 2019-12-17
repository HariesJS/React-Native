import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { THEME } from '../theme';

const HeaderBlock = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Haries Network</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        backgroundColor: THEME.MAIN_COLOR,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowOffset: {},
    },
    title: {
        fontSize: 22,
        textTransform: 'uppercase',
        color: 'white',
        padding: '5%',
        paddingTop: '10%'
    }
})

export default HeaderBlock;