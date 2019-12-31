import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { THEME } from '../../theme';
import { Wrapper } from './Wrapper';

export const AddButton = ({ children, color = THEME.MAIN_COLOR, onPress }) => (
    <Wrapper onPress={onPress}>
        <View style={{ ...styles.button, backgroundColor: color }}>
            <Text style={styles.text}>{children}</Text>
        </View>
    </Wrapper>
)

const styles = StyleSheet.create({
    button: {
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowOffset: {},
        elevation: 8
    },
    text: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 20,
        padding: '2%',
        textAlign: 'center'
    }
})