import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Modal, TextInput } from 'react-native';
import AppCard from '../components/AppCard';
import { Feather, AntDesign } from '@expo/vector-icons';
import AddButton from '../components/ui/AddButton';
import { ThemeContext } from '../components/context/theme/themeContext';
import { ScreenContext } from '../components/context/screen/screenContext';
import { TodoContext } from '../components/context/todo/todoContext';

const WithButtons = ({ style, nameOne, colorOne, onPressOne, nameTwo, colorTwo, onPressTwo, titleOne, titleTwo }) => (
    <View style={style}>
        <View style={styles.button}>
            <AddButton color={colorOne} onPress={onPressOne}>
                {titleOne
                ? titleOne 
                : <AntDesign name={nameOne} size={35} color='white' />}
            </AddButton>
        </View>
        <View style={styles.button}>
            <AddButton color={colorTwo} onPress={onPressTwo}>
                {titleTwo 
                ? titleTwo 
                : <AntDesign name={nameTwo} size={35} color='white' />}
            </AddButton>
        </View>
    </View>
)

const TodoScreen = () => {
    const { color } = useContext(ThemeContext);
    const { index, todoId, setScreen } = useContext(ScreenContext);
    const { todo, deleteTodo, changeTodo } = useContext(TodoContext);

    const todos = todo.find(({ id }) => id === todoId);

    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState(todos.title);

    const onSave = () => {
        changeTodo(todos.id, value);
        setVisible(false);
    }

    return (
        <View style={styles.screen}>
            <WithButtons
                nameOne='back'
                colorOne='gray'
                onPressOne={() => setScreen(null)}
                nameTwo='delete'
                colorTwo='red'
                onPressTwo={() => deleteTodo(todos.id, index)}
                style={styles.buttons}
            />
            <Text style={styles.title}>Target number {index}</Text>
            <View style={styles.target}>
                <AppCard style={styles.card}>
                    <Text style={styles.currentTarget}>{todos.title}</Text>
                    <TouchableOpacity onPress={() => setVisible(true)}>
                        <Feather
                            name='edit'
                            size={30}
                            color='white'
                        />
                    </TouchableOpacity>
                </AppCard>
            </View>
            <Modal visible={visible} animationType='slide'>
                <View style={styles.form}>
                    <View style={{ alignItems: 'center', paddingBottom: '2%' }}>
                        <TextInput
                            maxLength={19}
                            value={value}
                            onChangeText={setValue}
                            style={{ ...styles.input, borderColor: color }}
                        />
                    </View>
                    <WithButtons
                        titleOne='Cancel'
                        colorOne='red'
                        onPressOne={() => setVisible(false)}
                        titleTwo='Save'
                        colorTwo='green'
                        style={styles.formButtons}
                        onPressTwo={onSave}
                    />
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 10
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        paddingTop: Dimensions.get('window').height / 8,
        textTransform: 'uppercase'
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    },
    target: {
        alignItems: 'center',
        paddingTop: Dimensions.get('window').height / 15
    },
    currentTarget: {
        color: 'white',
        fontSize: 20
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '2%'
    },
    button: {
        width: '40%',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        borderBottomWidth: 2,
        borderStyle: 'solid',
        width: Dimensions.get('window').width / 1.5,
        margin: '2%',
    },
    formButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: '2%'
    }
})

export default TodoScreen;