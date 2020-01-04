import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { ThemeContext } from './context/theme/themeContext';
import { MaterialIcons } from '@expo/vector-icons';

const HeaderBlock = () => {
    const { color, setThemeColor } = useContext(ThemeContext);

    return (
        <View style={{ ...styles.header, backgroundColor: color }}>
            <Text style={styles.title}>Haries Network</Text>
            <TouchableOpacity 
                onPress={() => {
                    Alert.alert(
                        'SET TWO COLOR OF APP',
                        'default: blue',
                        [
                            { text: 'Blue', onPress: () => setThemeColor('#3959ab') },
                            { text: 'Green', onPress: () => setThemeColor('green') },
                            { text: 'Gray', onPress: () => setThemeColor('gray') },
                            { text: 'Cancel', style: 'destructive' }
                        ],
                        { cancelable: true }
                    )
                }}
            >
                <MaterialIcons
                    style={styles.setColor}
                    name='invert-colors'
                    size={30}
                    color='white'
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
        color: 'white',
        fontSize: 20,
        textTransform: 'uppercase',
        padding: '5%',
        paddingTop: '10%',
        paddingHorizontal: '20%',
        marginLeft: Dimensions.get('window').width / 20,
        fontFamily: 'roboto-regular'
    },
    setColor: {
        paddingTop: '5%',
    },
})

export default HeaderBlock;