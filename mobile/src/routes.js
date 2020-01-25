/** @format */

import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"

import Main from "./screens/Main"
import Profile from "./screens/Profile"

const Routes = createAppContainer(
	createStackNavigator(
		{
			Main: {
				screen: Main,
				navigationOptions: {
					title: "DevRadar",
				},
			},
			Profile: {
				screen: Profile,
				navigationOptions: {
					title: "Perfil no Github",
				},
			},
		},
		{
			defaultNavigationOptions: {
				headerStyle: {
					backgroundColor: "#7D40e7",
				},
				headerTintColor: "#fff",
				headerBackTitleVisible: null,
			},
		}
	)
)

export default Routes
