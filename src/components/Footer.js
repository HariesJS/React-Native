import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { THEME } from '../theme';

const WithNav = ({ title }) => {
    return (
        <View>
            <TouchableOpacity onLongPress={() => Alert.alert(title)}>
                <Text style={styles.nav}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const FooterBlock = () => {
    return (
        <View style={styles.footer}>
            <WithNav title='Profile' />
            <WithNav title='Messages' />
            <WithNav title='Users' />
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.MAIN_COLOR,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowOffset: {},
    },
    nav: {
        fontSize: 20,
        textTransform: 'uppercase',
        paddingHorizontal: '5%',
        color: 'white'
    }
})

export default FooterBlock;