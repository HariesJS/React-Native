import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { THEME } from '../theme';

const TodoScreen = ({ todo: { id, title }, onBack, onDelete }) => {
    return (
        <View style={styles.todos}>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button color='gray' title='Back' onPress={onBack} />
                </View>
                <View style={styles.button}>
                    <Button color='red' title='Delete' onPress={() => onDelete(id)} />
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>TARGET</Text>
                <Text style={styles.target}>
                    {title}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    todos: {
        flex: 8,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 25,
        paddingTop: '10%',
    },
    target: {
        borderStyle: 'solid',
        borderWidth: 4,
        borderColor: THEME.MAIN_COLOR,
        padding: '5%',
        marginTop: '10%',
        paddingBottom: '7%',
        width: '80%',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20,
        borderRadius: 30,
    },
    button: {
        width: '40%'
    },
    content: {
        alignItems: 'center',
    }
})

export default TodoScreen;