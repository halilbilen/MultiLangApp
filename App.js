import 'react-native-gesture-handler';
import React,{ Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store'
import MainContainer from './src/main'
import ChangeLanguageContainer from './src/changeLanguage'

const Stack = createStackNavigator();
class App extends Component {  
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="MainContainer" screenOptions={{ headerShown: true }}>
          <Stack.Screen name="MainContainer" component={MainContainer}/>
          <Stack.Screen name="ChangeLanguageContainer" component={ChangeLanguageContainer}/>
          </Stack.Navigator>
        </NavigationContainer >
      </Provider>
    );
  }
}

export default App;