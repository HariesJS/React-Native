import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { THEME } from '../theme';

const BodyBlock = ({ onScreen, todos, setTodos }) => {
    const [value, setValue] = useState('');

    const appendTarget = () => {
        if (value.trim() && value.trim().length >= 6) {
            setTodos(state => [
                ...state,
                {id: Date.now().toString(), title: value},
            ])
            setValue('');
        } else if (!value.trim()) {
            Alert.alert('Target is null!');
        } else if (value.trim().length <= 6) {
            Alert.alert('Target value have min six symbols!');
        }
    }

    const deleteTarget = id => {
        setTodos(todos.filter(e => e.id !== id));
    }
    return (
        <View style={styles.body}>
            <Text style={styles.title}>Owners</Text>
            <View style={styles.form}>
                <TextInput style={styles.input} value={value} onChangeText={e => setValue(e)} />
                <Button title='Add' onPress={appendTarget} />
            </View>
            <ScrollView style={styles.targets}>{
                !todos.length
                ? <Text style={styles.undefined}>Targe list is null!</Text>
                : todos.map(e => (
                    <View key={e.id}>
                        <TouchableOpacity
                            onLongPress={() => deleteTarget(e.id)}
                            onPress={() => onScreen(e.id)}
                        >
                            <Text style={styles.target}>{e.title.trim()}</Text>
                        </TouchableOpacity>
                    </View>
                ))
            }</ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 8,
        alignItems: 'center',
    },
    title: {
        marginTop: '15%',
        textTransform: 'uppercase',
        fontSize: 20
    },
    form: {
        flexDirection: 'row',
    },
    input: {
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR,
        width: '60%',
        marginHorizontal: '2%',
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowOffset: {}
    },
    undefined: {
        fontSize: 19,
        textAlign: 'center',
        paddingTop: '50%'
    },
    targets: {
        paddingTop: '10%',
        width: '80%',
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: {}
    },
    target: {
        fontSize: 15,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: THEME.MAIN_COLOR,
        padding: '5%',
        borderRadius: 20,
        alignItems: 'center',
        margin: '3%',
        textAlign: 'center'
    }
})

export default BodyBlock;