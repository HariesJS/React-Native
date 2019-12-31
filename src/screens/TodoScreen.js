import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import { AddButton } from '../components/ui/AddButton';
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';
import { AppCard } from '../components/AppCard';
import { THEME } from '../theme';
import { TodoContext } from '../components/context/todo/todoContext';
import { ScreenContext } from '../components/context/screen/screenContext';
import { ThemeContext } from '../components/context/theme/themeContext';

const WithButtons = ({ title, titleTwo, prop, onPressOne, onPressTwo }) => (
    <View style={{ ...styles.buttons, ...prop }}>
        <View style={styles.button}>
            <AddButton color='gray' onPress={onPressOne}>
                {title
                ? <Text>{title}</Text>
                : <Entypo name='back' size={25} />}
            </AddButton>
        </View>
        <View style={styles.button}>
            <AddButton color='#84101B' onPress={onPressTwo}>
                {titleTwo
                ? <Text>{titleTwo}</Text>
                : <AntDesign name='delete' size={25} />}
            </AddButton>
        </View>
    </View>
)

export const TodoScreen = () => {
    const { todos, index, deleteTarget, changeTarget } = useContext(TodoContext);
    const { todoId, setScreen } = useContext(ScreenContext);
    const { color } = useContext(ThemeContext);

    const todo = todos.find(({ id }) => id === todoId);

    const [value, setValue] = useState(todo.title);
    const [visible, setVisible] = useState(false);

    const saveChanges = () => {
        if (value.trim()) {
            changeTarget(todo.id, value);
            setVisible(false);
        }
    }

    return (
        <View style={styles.todo}>
            <WithButtons 
                onPressOne={() => setScreen(null)} 
                onPressTwo={() => deleteTarget(todo.id, index)}
            />
            <Text style={styles.title}>Target number {index}</Text>
            <View style={styles.card}>
                <AppCard>
                    <Text style={styles.target}>{todo.title}</Text>
                    <TouchableOpacity>
                        <FontAwesome
                            name='edit' size={30}
                            color='white'
                            onPress={() => setVisible(true)}
                        />
                    </TouchableOpacity>
                </AppCard>
            </View>
            <Modal visible={visible} transparent={false} animationType='slide'>
                <View style={styles.form}>
                    <TextInput
                        value={value}
                        onChangeText={setValue}
                        style={{ ...styles.input, borderBottomColor: color }}
                        maxLength={19}
                        autoCorrect={false}
                        autoCapitalize='words'
                    />
                    <WithButtons
                        title='Cancel'
                        titleTwo='Save'
                        prop={styles.next_buttons}
                        onPressOne={() => setVisible(false)}
                        onPressTwo={saveChanges}
                    />
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {
        flex: 10,
    },
    title: {
        fontSize: 20,
        textTransform: 'uppercase',
        textAlign: 'center',
        paddingTop: Dimensions.get('window').height / 8
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5
    },
    button: {
        width: '40%'
    },
    target: {
        fontSize: 20,
        color: 'white'
    },
    card: {
        alignItems: 'center',
        paddingTop: Dimensions.get('window').height / 10
    },
    form: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderStyle: 'solid',
        borderBottomWidth: 2,
        width: Dimensions.get('window').width / 1.2
    },
    next_buttons: {
        width: Dimensions.get('window').width / 1.2
    }
})