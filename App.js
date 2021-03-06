import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator, createAppContainer, createSwitchNavigator, createStackNavigator } from "react-navigation";
import styles from "./assets/styles";
import HomeScreen from "./containers/Home";
import MatchesScreen from "./containers/Matches";
import MessagesScreen from "./containers/Messages";
import ProfileScreen from "./containers/Profile";
import OnboardScreen from "./containers/Onboard";
import Example from "./containers/Login";
import Icon from "./components/Icon";

//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';

const App = createBottomTabNavigator(
	{
		/*
		Login: {
			screen: LoginScreen,
			navigationOptions: {
				tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? "#7444C0" : "#363636";
					return (
						<Text style={[styles.iconMenu, { color: iconFocused }]}>
							<Icon name="heart" />
						</Text>
					);
				}
			}
		},
		*/
		Explore: {
			screen: HomeScreen,
			navigationOptions: {
				tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? "#7444C0" : "#363636";
					return (
						<Text style={[styles.iconMenu, { color: iconFocused }]}>
							<Icon name="explore" />
						</Text>
					);
				}
			}
		},
		Matches: {
			screen: MatchesScreen,
			navigationOptions: {
				tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? "#7444C0" : "#363636";
					return (
						<Text style={[styles.iconMenu, { color: iconFocused }]}>
							<Icon name="heart" />
						</Text>
					);
				}
			}
		},
		Chat: {
			screen: MessagesScreen,
			navigationOptions: {
				tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? "#7444C0" : "#363636";
					return (
						<Text style={[styles.iconMenu, { color: iconFocused }]}>
							<Icon name="chat" />
						</Text>
					);
				}
			}
		},
		Profile: {
			screen: ProfileScreen,
			navigationOptions: {
				tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? "#7444C0" : "#363636";
					return (
						<Text style={[styles.iconMenu, { color: iconFocused }]}>
							<Icon name="user" />
						</Text>
					);
				}
			}
		}
	},
	{
		tabBarOptions: {
			activeTintColor: "#7444C0",
			inactiveTintColor: "#363636",
			labelStyle: {
				fontSize: 14,
				textTransform: "uppercase",
				paddingTop: 10
			},
			style: {
				backgroundColor: "#FFF",
				borderTopWidth: 0,
				paddingVertical: 30,
				height: 60,
				marginBottom: 0,
				shadowOpacity: 0.05,
				shadowRadius: 10,
				shadowColor: "#000",
				shadowOffset: { height: 0, width: 0 }
			}
		}
	}
);


const AuthStack = createStackNavigator({
	SignIn:{
	  screen: Example,
	  navigationOptions: {
		headerTitle: 'Sign In',
	  },
	},/*
	CreateAccount: {
	  screen: Example,
	  navigationOptions: {
		headerTitle: 'Create Account',
	  },
	},
	ForgotPassword: {
	  screen: Example,
	  navigationOptions: {
		headerTitle: 'Forgot Password',
	  },
	},
	ResetPassword: {
	  screen: Example,
	  navigationOptions: {
		headerTitle: 'Reset Password',
	  },
	},*/
  });

const CoreApp = createSwitchNavigator({
	Auth: {
		screen: AuthStack, // https://github.com/ryanmcdermott/react-native-login/blob/master/ReactNativeLogin/App/components/LoggedIn.js
	  },
	Onboard: {
		screen: OnboardScreen,
	},
	App: {
		screen: App,
	  },
	
	
	
});

export default createAppContainer(CoreApp);
//export default createAppContainer(CoreApp);
