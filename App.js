import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {rootReducer} from "./src/redux/rootReducer";
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {WeatherBlock} from "./src/components/WeatherBlock/WeatherBlock";

const store = createStore(rootReducer);
const Tab = createBottomTabNavigator();

const App = () => {

  return (
      <Provider store={store}>
        <View style={styles.container}>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Krasnodar" component={WeatherBlock} />
              <Tab.Screen name="Moscow" component={WeatherBlock} />
            </Tab.Navigator>
          </NavigationContainer>
        </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3E8BD',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
});

export default App;
