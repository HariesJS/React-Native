import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { THEME } from '../theme';

const WithNav = ({ title }) => (
    <View>
        <TouchableOpacity onLongPress={() => Alert.alert(title)}>
            <Text style={styles.nav}>
                {title}
            </Text>
        </TouchableOpacity>
    </View>
)

const FooterBlock = () => {
    return (
        <View style={styles.footer}>
            <WithNav title='Profile' />
            <WithNav title='To-Do' />
            <WithNav title='Users' />
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: THEME.MAIN_COLOR,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowOffset: {}
    },
    nav: {
        paddingBottom: '2%',
        paddingHorizontal: '9%',
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 20,
    }
})

export default FooterBlock;