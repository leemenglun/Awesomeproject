import * as React from 'react';
import {Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {CustomDrawerContent} from './src';
import {TeacherScreen,WishScreen,GoalScreen,FeatureScreen,BriefScreen,MemberScreen,EventScreen,Feature_1Screen,Feature_2Screen,Feature_3Screen,Feature_4Screen,Feature_5Screen,Mapscreen,ClassScreen} from './src/tab';
import {LoginScreen,ResgisterScreen} from './src/auth';
import {IMAGE} from './src/constants/Image';

const Tab = createBottomTabNavigator();
const Tab2 = createBottomTabNavigator();
const Tab3 = createBottomTabNavigator();
const Tab4 = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown : false
})

const StackFeature = createStackNavigator();
function FeatureStack(){
  return(
    <StackFeature.Navigator initialRouteName="Feature">
      <StackFeature.Screen name="Feature" component={FeatureScreen} options={navOptionHandler} />
      <StackFeature.Screen name="Feature_1" component={Feature_1Screen} options={navOptionHandler} />
      <StackFeature.Screen name="Feature_2" component={Feature_2Screen} options={navOptionHandler} />
      <StackFeature.Screen name="Feature_3" component={Feature_3Screen} options={navOptionHandler} />
      <StackFeature.Screen name="Feature_4" component={Feature_4Screen} options={navOptionHandler} />
      <StackFeature.Screen name="Feature_5" component={Feature_5Screen} options={navOptionHandler} />
    </StackFeature.Navigator>
  )
}

function TabNavigator(){
  return(
    <Tab2.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Hope') {
          iconName = focused
            ? IMAGE.ICON_HOME
            : IMAGE.ICON_HOME_BLACK
        } else if (route.name === 'Map') {
          iconName = focused 
          ? IMAGE.ICON_CLASS_WHITE
          : IMAGE.ICON_CLASS
        }
        else if (route.name==='Member'){
          iconName = focused
          ? IMAGE.ICON_TEACHER_WHITE
          : IMAGE.ICON_TEACHER
        }

        // You can return any component that you like here!
        return <Image source={iconName} style={{width:20,height:20,resizeMode:'contain'}}/>;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'black',
    }}
    >
      <Tab2.Screen name="Hope" component={WishScreen} />
      <Tab2.Screen name="Map" component={Mapscreen} />
      <Tab2.Screen name="Member" component={LoginScreen} />
    </Tab2.Navigator>
  )
}

function Tab2Navigator(){
  return(
    <Tab2.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Hope') {
          iconName = focused
            ? IMAGE.ICON_WISHLIST_WHITE
            : IMAGE.ICON_WISHLIST
        } else if (route.name === 'Class') {
          iconName = focused 
          ? IMAGE.ICON_CLASS_WHITE
          : IMAGE.ICON_CLASS
        }
        else if (route.name==='Teacher'){
          iconName = focused
          ? IMAGE.ICON_TEACHER_WHITE
          : IMAGE.ICON_TEACHER
        }

        // You can return any component that you like here!
        return <Image source={iconName} style={{width:20,height:20,resizeMode:'contain'}}/>;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'black',
    }}
    >
      <Tab2.Screen name="Hope" component={WishScreen} />
      <Tab2.Screen name="Class" component={ClassScreen} />
      <Tab2.Screen name="Teacher" component={TeacherScreen} />
    </Tab2.Navigator>
  )
}

function Tab3Navigator(){
  return(
    <Tab3.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Goal') {
          iconName = focused
            ? IMAGE.ICON_GOAL_WHITE
            : IMAGE.ICON_GOAL
        } else if (route.name === 'Feature') {
          iconName = focused 
          ? IMAGE.ICON_FEATURE_WHITE
          : IMAGE.ICON_FEATURE
        }
        // You can return any component that you like here!
        return <Image source={iconName} style={{width:20,height:20,resizeMode:'contain'}}/>;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'black',
    }}
    >
      <Tab3.Screen name="Goal" component={GoalScreen} />
      <Tab3.Screen name="Feature" component={FeatureStack} />
    </Tab3.Navigator>
  )
}

function Tab4Navigator(){
  return(
    <Tab4.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Brief') {
          iconName = focused
            ? IMAGE.ICON_BRIEF_WHITE
            : IMAGE.ICON_BRIEF
        } else if (route.name === 'Event') {
          iconName = focused 
          ? IMAGE.ICON_EVENT_WHITE
          : IMAGE.ICON_EVENT
        }
        else if (route.name === 'Member') {
          iconName = focused 
          ? IMAGE.ICON_MEMBER_WHITE
          : IMAGE.ICON_MEMBER
        }
        // You can return any component that you like here!
        return <Image source={iconName} style={{width:20,height:20,resizeMode:'contain'}}/>;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'black',
    }}
    >
      <Tab4.Screen name="Brief" component={BriefScreen} />
      <Tab4.Screen name="Event" component={EventScreen} />
      <Tab4.Screen name="Member" component={MemberScreen} />
    </Tab4.Navigator>
  )
}

const Drawer = createDrawerNavigator();

function DrawerNavigator({navigation}){
  return(
    <Drawer.Navigator initialRouteName="MenuTab" drawerContent={() => <CustomDrawerContent navigation={navigation}/>}>
    <Drawer.Screen name="MenuTab" component={TabNavigator} />
    <Drawer.Screen name="Ic department introduce" component={Tab2Navigator} />
    <Drawer.Screen name="Course" component={Tab3Navigator}/>
    <Drawer.Screen name="Union" component={Tab4Navigator}/>
    </Drawer.Navigator>
  )
}

const StackApp=createStackNavigator()

export default function App() {
  console.disableYellowBox = true;
  return (
    <NavigationContainer>
    <StackApp.Navigator initialRouteName="HomeApp">
      <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler}></StackApp.Screen>
      <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler}></StackApp.Screen>
      <StackApp.Screen name="Resgister" component={ResgisterScreen} options={navOptionHandler}></StackApp.Screen>
    </StackApp.Navigator>
    </NavigationContainer>
  )
}