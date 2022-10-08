import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import useTheme, { ThemeProvider } from './hooks/useTheme';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from './screens/Welcome.screens';
import { Dashboard } from './screens/Dashboard.screens';
import { NewRequest } from './screens/NewRequest.screens';
import { SendMoney } from './screens/SendMoney.screens';

const Stack = createStackNavigator();

export const App: React.FC = () => {
    const { colors } = useTheme();

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <SafeAreaProvider>
                    <SafeAreaView
                        style={{
                            flex: 1,
                            backgroundColor: colors.primaryBackground
                        }}
                    >
                        <ThemeProvider>
                            <Stack.Navigator
                                screenOptions={{ headerShown: false }}
                                initialRouteName="WelcomeScreen"
                            >
                                <Stack.Screen
                                    name="WelcomeScreen"
                                    component={Welcome}
                                />
                                <Stack.Screen
                                    name="Dashboard"
                                    component={Dashboard}
                                />
                                <Stack.Screen
                                    name="NewRequest"
                                    component={NewRequest}
                                />
                                <Stack.Screen
                                    name="SendMoney"
                                    component={SendMoney}
                                />
                            </Stack.Navigator>
                        </ThemeProvider>
                    </SafeAreaView>
                </SafeAreaProvider>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
};
