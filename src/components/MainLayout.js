import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { HeaderBlock } from './Header';
import { FooterBlock } from './Footer';
import { BodyBlock } from './Body';
import { ScreenContext } from './context/screen/screenContext';
import { TodoScreen } from '../screens/TodoScreen';

export const MainLayout = () => {
    const { todoId } = useContext(ScreenContext);

    let content = <BodyBlock />

    if (todoId) {
        content = <TodoScreen />
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
        flex: 1
    }
})