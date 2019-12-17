import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import HeaderBlock from './src/components/Header';
import FooterBlock from './src/components/Footer';
import BodyBlock from './src/components/Body';
import TodoScreen from './src/screens/TodoScreen';

const App = () => {
    const [value, setValue] = useState('');
    const [todo, setTodo] = useState([]);
    const [todoId, setTodoId] = useState(null);
    const [index, setIndex] = useState(null);

    const deleteTarget = (id, index) => {
        Alert.alert(
            'Delete',
            `You confirm to remove ${index} target?`,
            [
                { text: 'Cancel' },
                { text: 'Delete', style: 'destructive', onPress: () => {
                    setTodoId();
                    setTodo(todo.filter(e => e.id !== id));
                } }
            ],
            { cancelable: false }
        );
    }

    const addTarget = () => {
        if (value.trim() && value.trim().length >= 6) {
            setTodo(state => [
                ...state,
                {id: Date.now().toString(), title: value},
            ])
            setValue('');
        } else if (!value.trim()) {
            Alert.alert('Target is null!');
        } else if (value.trim().length < 6) {
            Alert.alert(`Target symbols min 6! Now symbols is ${value.trim().length}`);
        }
    }

    const changeTarget = (id, title) => {
        setTodo(state => state.map(e => {
            if (e.id === id) {
                e.title = title;
            }
            return e;
        }));
    }

    let content = (
        <BodyBlock
            todo={todo}
            onDelete={deleteTarget}
            setTodo={addTarget}
            setValue={setValue}
            value={value}
            onScreen={setTodoId}
            setIndex={setIndex}
        />
    );
    
    if (todoId) {
        const selectTodo = todo.find(e => e.id === todoId);
        content = (
            <TodoScreen
                index={index}
                todo={selectTodo}
                onScreen={setTodoId}
                onDelete={deleteTarget}
                setValue={changeTarget}
                changeTarget={changeTarget}
            />
        );
    }
    return (
        <View style={styles.app}>
            <HeaderBlock />
            {content}
            <FooterBlock />
        </View>
    )
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
    }
})

export default App;