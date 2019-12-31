import React, { useState } from 'react';
import { MainLayout } from './src/components/MainLayout';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { TodoState } from './src/components/context/todo/TodoState';
import { ScreenState } from './src/components/context/screen/ScreenState';
import { ThemeState } from './src/components/context/theme/ThemeState';

async function loadingApplication() {
    await Font.loadAsync({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
    });
}

const App = () => {
    const [load, setLoad] = useState(false);

    if (!load) {
        return (
            <AppLoading
                startAsync={loadingApplication}
                onError={e => console.log(e)}
                onFinish={() => setLoad(true)}
            />
        )
    }
    return (
        <ScreenState>
            <ThemeState>
                <TodoState>
                    <MainLayout />
                </TodoState>
            </ThemeState>
        </ScreenState>
    )
}

export default App;