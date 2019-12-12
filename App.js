import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderBlock from './src/components/Header';
import FooterBlock from './src/components/Footer';
import BodyBlock from './src/components/Body';
import TodoScreen from './src/screens/TodoScreen';

const App = () => {
    const [todoId, setTodoId] = useState(null);
    const [todos, setTodos] = useState([]);

    let content = (
        <BodyBlock onScreen={id => setTodoId(id)} todos={todos} setTodos={setTodos} />
    );

    if (todoId) {
        const selectTodo = todos.find(e => e.id === todoId);
        content = (
            <TodoScreen
                todo={selectTodo}
                onBack={() => setTodoId()}
                onDelete={id => {
                    setTodos(todos.filter(e => e.id !== id))
                    setTodoId(null);
                }}
            />
        );
    }

    return (
        <View style={styles.content}>
            <HeaderBlock />
            {content}
            <FooterBlock />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
    }
})

export default App;