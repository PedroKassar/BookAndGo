import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../Screens/Login'
import SignUp from '../Screens/SignUp'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='SignUp' component={SignUp}/>
        </Stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})