import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import MainLayout from './src/components/MainLayout';
import { ThemeState } from './src/components/context/theme/ThemeState';
import { TodoState } from './src/components/context/todo/TodoState';
import { ScreenState } from './src/components/context/screen/ScreenState';

async function loadAppliaction() {
    await Font.loadAsync({
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf')
    });
}

const App = () => {
    const [isReady, setIsReady] = useState(false);

    if (!isReady) {
        return (
            <AppLoading
                startAsync={loadAppliaction}
                onError={e => console.log(e)}
                onFinish={() => setIsReady(true)}
            />
        );
    }
    return (
        <ScreenState>
            <TodoState>
                <ThemeState>
                    <MainLayout />
                </ThemeState>
            </TodoState>
        </ScreenState>
    );
}

export default App;