import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome'
import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Register from './screens/Register'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();

export function Home() {
    return (
        <Tab.Navigator initialRouteName="Feed" tabBarOptions={{ showLabel: false, activeTintColor: '#e91e63' }}>

            <Tab.Screen
                name="Feed"
                component={Feed}
                options={{
                    tabBarIcon: ({ color }) =>
                        <Icon name="home" color={color} size={30} />
                }}
            />
            <Tab.Screen
                name="AddPhoto"
                component={AddPhoto}
                options={{
                    tabBarIcon: ({ color }) =>
                        <Icon name="camera" color={color} size={30} />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) =>
                        <Icon name="user" color={color} size={30} />
                }}
            />
            <Tab.Screen name="Login">
                {() => (
                    <Stack.Navigator>
                        <Stack.Screen name="Login" component={Login} />
                    </Stack.Navigator>
                )}

            </Tab.Screen>

        </Tab.Navigator>
    )
}

