import React, { useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ThemeContext } from './context/theme/themeContext';

export const HeaderBlock = () => {
    const { color, setThemeColor } = useContext(ThemeContext);

    const colors = ['#3959ab', 'green', 'orange'];

    const changeTheme = () => {
        Alert.alert(
            'Change Color',
            'Set Theme Color',
            [
                { text: 'Blue', onPress: () => setThemeColor(colors[0]) },
                { text: 'Green', onPress: () => setThemeColor(colors[1]) },
                { text: 'Orange', onPress: () => setThemeColor(colors[2]) },
                { text: 'Random', onPress: () => setThemeColor(colors[Math.floor(Math.random()*3)]) },
                { text: 'Cancel', style: 'destructive' }
            ],
            { cancelable: true }
        );
    }

    return (   
        <View style={{ ...styles.header, backgroundColor: color}}>
            <Text style={styles.title}>Haries Network</Text>
            <TouchableOpacity onPress={changeTheme}>
                <AntDesign
                    name='setting'
                    color='white'
                    size={30}
                    style={styles.setting}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowOffset: {},
        flexDirection: 'row',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        textTransform: 'uppercase',
        color: 'white',
        padding: '5%',
        paddingTop: '10%',
        fontFamily: 'roboto-regular',
        left: '20%',
        paddingHorizontal: '20%',
    },
    setting: {
        paddingTop: '5%',
    }
})