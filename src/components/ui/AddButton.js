import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Wrapper } from './Wrapper';

const AddButton = ({ children, onPress, color = 'gray', ...props }) => {
    return (
        <Wrapper onPress={onPress}>
            <View style={{ ...styles.button, backgroundColor: color, ...props.style }}>
                <Text style={styles.current}>{children}</Text>
            </View>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: '2%',
        alignItems: 'center',
        shadowOpacity: 0.4,
        shadowOffset: {
            width: 2,
            height: 2
        }
    },
    current: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 20,
    }
})

export default AddButton;