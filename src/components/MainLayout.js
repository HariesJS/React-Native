import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderBlock from './Header';
import FooterBlock from './Footer';
import BodyBlock from './Body';
import { ScreenContext } from './context/screen/screenContext';
import TodoScreen from '../screens/TodoScreen';

const MainLayout = () => {
    const { todoId } = useContext(ScreenContext);

    return (
        <View style={styles.app}>
            <HeaderBlock />
            {todoId ? <TodoScreen /> : <BodyBlock />}
            <FooterBlock />
        </View>
    )
}

const styles = StyleSheet.create({
    app: {
        flex: 1
    }
})

export default MainLayout;