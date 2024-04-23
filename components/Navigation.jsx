import FindPet from "../pages/FindPet";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NewsPage from "../pages/NewsPage";
import Registration from "../pages/Registration";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OurFriends from "../pages/OurFriends";
import { Button } from "react-native";

const MainStack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            title: "",
            headerStyle: {
              height: 40,
            },
          }}
        />
        <MainStack.Screen
          name="News"
          component={NewsPage}
          options={{
            title: "",
            headerStyle: {
              height: 70,
            },
          }}
        />
        <MainStack.Screen
          name="Find pet"
          component={FindPet}
          options={{
            title: "",
            headerStyle: {
              height: 70,
            },
          }}
        />
        <MainStack.Screen
          name="Our friends"
          component={OurFriends}
          options={{
            title: "",
            headerStyle: {
              height: 70,
            },
          }}
        />
        <MainStack.Screen
          name="Registration"
          component={Registration}
          options={{
            title: "",
            headerStyle: {
              height: 40,
            },
          }}
        />
        <MainStack.Screen
          name="Login"
          component={Login}
          options={{
            title: "",
            headerStyle: {
              height: 40,
            },
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
