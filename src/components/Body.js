import React from 'react';
import { View, StyleSheet, Text, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import { THEME } from '../theme';

const BodyBlock = ({ todo, value, setTodo, onDelete, setValue, onScreen, setIndex }) => {

    return (
        <View style={styles.body}>
            <Text style={styles.title}>Targets</Text>
            <View style={styles.form}>
                <TextInput maxLength={19} style={styles.input} value={value} onChangeText={setValue} />
                <Button title='Add' onPress={setTodo} />
            </View>
            <ScrollView style={styles.targets}>{
                !todo.length
                ? <Text style={styles.undefined}>Target list is null</Text>
                : todo.map(({ id, title }, index) => (
                    <View key={id}>
                        <TouchableOpacity
                            onPress={() => {
                                onScreen(id);
                                setIndex(index + 1);
                            }}
                            onLongPress={() => onDelete(id, index + 1)}
                        >
                            <View style={styles.block}>
                                <Text style={styles.index}>{index + 1}</Text>
                                <Text style={styles.target}>{title.trim()}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))
            }</ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 8,
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        paddingTop: '20%',
        textTransform: 'uppercase'
    },
    circle: {
        textDecorationLine: 'line-through'
    },
    form: {
        flexDirection: 'row',
    },
    input: {
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderBottomColor: THEME.MAIN_COLOR,
        width: '60%',
        marginHorizontal: '1%'
    },
    targets: {
        paddingTop: '10%',
        width: '75%'
    },
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderStyle: 'solid',
        borderWidth: 2,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 2,
            height: 2
        },
        borderColor: THEME.MAIN_COLOR,
        backgroundColor: THEME.MAIN_COLOR,
        margin: '2%',
    },
    index: {
        color: 'white',
        fontSize: 20,
        padding: '4%'
    },
    target: {
        fontSize: 20,
        color: 'white',
        padding: '4%',
    },
    undefined: {
        fontSize: 20,
        textTransform: 'uppercase',
        textAlign: 'center',
        paddingTop: '30%'
    }
})

export default BodyBlock;