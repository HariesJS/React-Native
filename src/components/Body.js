import React, { useContext, useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Text, TextInput, Dimensions, ScrollView, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ThemeContext } from './context/theme/themeContext';
import { TodoContext } from './context/todo/todoContext';
import { Wrapper } from './ui/Wrapper';
import { ScreenContext } from './context/screen/screenContext';
import { AppLoad } from './ui/AppLoad';
import AddButton from './ui/AddButton';

const BodyBlock = () => {
    const { color } = useContext(ThemeContext);
    const { todo, addTodo, deleteTodo, fetchTodos, isLoad, error } = useContext(TodoContext);
    const { setIndex, setScreen } = useContext(ScreenContext);

    const [value, setValue] = useState('');

    const loadTodos = useCallback(() => fetchTodos(), [fetchTodos]);

    useEffect(() => {
        loadTodos();
    }, []);

    const appendTarget = () => {
        if (value.trim() && value.trim().length >= 6) {
            addTodo(value);
            setValue('');
        } else if (!value.trim()) {
            Alert.alert('Enter target!');
        } else if (value.trim().length < 6) {
            Alert.alert(`Min. target length is 6! Now length: ${value.trim().length}`);
        }
    }

    if (error) {
        return (
            <View style={styles.errorBlock}>
                <Text style={styles.error}>{error.toString()}</Text>
                <AddButton onPress={loadTodos} color={color}>
                    Retry
                </AddButton>
            </View>
        )
    }

    return (
        <View style={styles.errorBlock}>
            <Text style={styles.title}>Target list</Text>
            <View style={styles.form}>
                <TextInput
                    style={{ ...styles.input, borderColor: color }}
                    maxLength={19}
                    autoCapitalize='words'
                    autoCorrect={false}
                    placeholder='Enter target'
                    value={value}
                    onChangeText={setValue}
                />
                <AntDesign.Button
                    style={{ backgroundColor: color }}
                    name='edit'
                    onPress={appendTarget}
                >
                    Add
                </AntDesign.Button>
            </View>
            {isLoad
            ? <AppLoad />
            : <ScrollView style={styles.scroll}>{
                !todo.length
                ? <Text style={styles.undefined}>Target list is null</Text>
                : todo.map(({ id, title }, index) => (
                    <Wrapper
                        key={id}
                        onLongPress={() => deleteTodo(id, index + 1)}
                        onPress={() => {
                            setScreen(id);
                            setIndex(index + 1);
                        }}
                    >
                        <View style={{ ...styles.targetBlock, backgroundColor: color }}>
                            <Text style={styles.target}>{index + 1}</Text>
                            <Text style={styles.target}>{title}</Text>
                        </View>
                    </Wrapper>
                ))
            }</ScrollView>}
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        textTransform: 'uppercase',
        paddingTop: Dimensions.get('window').height / 8,
        paddingBottom: '10%'
    },
    form: {
        flexDirection: 'row',
    },
    input: {
        borderBottomWidth: 2,
        borderStyle: 'solid',
        width: Dimensions.get('window').width / 1.8,
        marginHorizontal: '1%'
    },
    targetBlock: {
       flexDirection: 'row',
       padding: '5%',
       justifyContent: 'space-between',
       shadowOpacity: 0.8,
       shadowOffset: {
           width: 2,
           height: 2
       },
       margin: '2%'
    },
    scroll: {
        paddingTop: Dimensions.get('window').height / 20,
        width: '80%'
    },
    target: {
        fontSize: 20,
        color: 'white'
    },
    undefined: {
        fontSize: 20,
        textAlign: 'center',
        paddingTop: Dimensions.get('window').height / 10,
        textTransform: 'uppercase'
    },
    errorBlock: {
        flex: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    error: {
        fontSize: 25,
        paddingBottom: '5%',
        textAlign: 'center'
    }
})

export default BodyBlock;