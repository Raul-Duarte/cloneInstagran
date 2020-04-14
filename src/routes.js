import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'

const Tab = createBottomTabNavigator();

export default function Routes() {
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
            
        </Tab.Navigator>
    )
}