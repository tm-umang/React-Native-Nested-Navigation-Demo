import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import BottomTabNavigator from "./src/navigation/TabNavigation";

//  const App = () => {
//   return (
//     <NavigationContainer>
//       <BottomTabNavigator />
//     </NavigationContainer>
//   );
// }
// export default App


export default function App() {
  return (
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      );
}
