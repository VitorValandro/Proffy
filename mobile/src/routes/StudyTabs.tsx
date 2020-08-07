import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs(){
  return(
    <Navigator
      tabBarOptions={{
        style:{
          elevation: 0,
          shadowOpacity: 0,
          heigth: 64
        },
        tabStyle:{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        },
        iconStyle:{
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle:{
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d'
      }}
    >
      <Screen 
        name="TeacherList" 
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
        }} 
      />
      <Screen 
        name="Favorites" 
        component={Favorites} 
        options={{

        }}
      />
    </Navigator>
  )
}

export default StudyTabs;