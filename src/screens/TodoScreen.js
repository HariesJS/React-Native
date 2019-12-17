import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput, Modal } from 'react-native';
import AppCard from '../components/AppCard';
import { THEME } from '../theme';

const TodoScreen = ({ todo: { id, title }, index, onScreen, onDelete, changeTarget }) => {
    const [visible, setVisible] = useState(false);
    const [nowValue, setNowValue] = useState(title);
    
    const saveTarget = () => {
        changeTarget(id, nowValue);
        setVisible(false);
    }
    return (
        <View style={styles.todo}>
            <WithButtons
                titleOne='Back'
                onPressOne={() => onScreen()}
                colorOne='gray'
                titleTwo='Delete'
                onPressTwo={() => onDelete(id, index)}
                colorTwo='red'
            />
            <Text style={styles.title}>Target number {index}</Text>
            <View style={styles.card}>
                <AppCard>
                    <Text style={styles.target}>{title}</Text>
                    <Button title='Edit' color='white' onPress={() => setVisible(true)} />
                </AppCard>
            </View>
            <Modal animationType='slide' transparent={false} visible={visible}>
                <View style={styles.editform}>
                    <TextInput
                        maxLength={19}
                        value={nowValue}
                        onChangeText={setNowValue}
                        style={styles.input}
                    />
                    <WithButtons
                        titleOne='Cancel'
                        onPressOne={() => setVisible(false)}
                        colorOne='red'
                        titleTwo='Save'
                        onPressTwo={saveTarget}
                        colorTwo='green'
                    />
                </View>
            </Modal>
        </View>
    )
}

const WithButtons = ({ titleOne, onPressOne, colorOne, titleTwo, onPressTwo, colorTwo }) => (
    <View style={styles.buttons}>
        <View style={styles.button}>
            <Button title={titleOne} onPress={onPressOne} color={colorOne} />
        </View>
        <View style={styles.button}>
            <Button title={titleTwo} onPress={onPressTwo} color={colorTwo} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    todo: {
        flex: 8,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '40%'
    },
    title: {
        fontSize: 21,
        textAlign: 'center',
        paddingTop: '20%',
        textTransform: 'uppercase'
    },
    card: {
        flex: 1,
        alignItems: 'center',
        paddingTop: '20%',
    },
    target: {
        color: 'white'
    },
    editform: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderStyle: 'solid',
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '75%'
    }
})

export default TodoScreen;