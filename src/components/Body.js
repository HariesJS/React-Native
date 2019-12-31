import React, { useContext, useState, useCallback, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions, TextInput, ScrollView, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { THEME } from '../theme';
import { TodoContext } from './context/todo/todoContext';
import { AppLoad } from './ui/AppLoad';
import { Wrapper } from './ui/Wrapper';
import { ScreenContext } from './context/screen/screenContext';
import { ThemeContext } from './context/theme/themeContext';

export const BodyBlock = () => {
    const { todos, addTodo, fetchTodos, deleteTarget, isLoad, setIndex } = useContext(TodoContext);
    const { setScreen } = useContext(ScreenContext);
    const { color } = useContext(ThemeContext);
    const [value, setValue] = useState('');

    const loadTodos = useCallback(async () => fetchTodos(), [fetchTodos]);

    useEffect(() => {
        loadTodos();
    }, []);

    const addTarget = () => {
        if (value.trim() && value.trim().length >= 6) {
            addTodo(value);
            setValue('');
        } else if (!value.trim()) {
            Alert.alert('Enter target!');
        } else if (value.trim().length < 6) {
            Alert.alert(`Target length min. is 6! Now length ${value.trim().length}`)
        }
    }

    const content = (
        isLoad
        ? <AppLoad />
        : <Text style={styles.undefined}>Target list is null</Text>
    )
    return (
        <View style={styles.body}>
            <Text style={styles.title}>Target List</Text>
            <View style={styles.form}>
                <TextInput
                    value={value}
                    onChangeText={setValue}
                    placeholder='Enter target...'
                    maxLength={19}
                    autoCorrect={false}
                    autoCapitalize='words'
                    style={{ ...styles.input, borderBottomColor: color }}
                />
                <Entypo.Button
                    name='new-message'
                    onPress={addTarget}
                    style={{ backgroundColor: color }}
                >
                    Add
                </Entypo.Button>
            </View>
            <ScrollView style={styles.scroll}>{
                !todos.length
                ? content
                : todos.map(({ id, title }, index) => (
                    <Wrapper
                        key={id}
                        onLongPress={() => deleteTarget(id, index + 1)}
                        onPress={() => {
                            setScreen(id);
                            setIndex(index + 1);
                        }}
                    >
                        <View style={{ ...styles.target_block, backgroundColor: color }}>
                            <Text style={styles.target}>{index + 1}</Text>
                            <Text style={styles.target}>{title.trim()}</Text>
                        </View>
                    </Wrapper>
                ))
            }</ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 10,
        alignItems: 'center'
    },
    title: {
        paddingTop: Dimensions.get('window').height / 10,
        fontFamily: 'roboto-bold',
        textTransform: 'uppercase',
        fontSize: 20,
    },
    form: {
        flexDirection: 'row',
        paddingTop: Dimensions.get('window').height / 20
    },
    input: {
        borderStyle: 'solid',
        borderBottomWidth: 2,
        width: Dimensions.get('window').width / 1.6,
        marginHorizontal: '1%'
    },
    target_block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '5%',
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowOffset: {
            width: 2,
            height: 2
        },
        elevation: 8,
        margin: '2%'
    },
    scroll: {
        width: '80%',
        paddingTop: Dimensions.get('window').height / 15
    },
    target: {
        color: 'white',
        fontSize: 20,
    },
    undefined: {
        textAlign: 'center',
        paddingTop: Dimensions.get('window').height / 8,
        fontSize: 18,
        textTransform: 'uppercase'
    }
})