import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import { Geist_400Regular, Geist_500Medium, Geist_700Bold } from '@expo-google-fonts/geist';
import { JetBrainsMono_400Regular, JetBrainsMono_500Medium } from '@expo-google-fonts/jetbrains-mono';

import { DashboardScreen } from './src/features/dashboard/DashboardScreen';
import { FinanceScreen } from './src/features/finance/FinanceScreen';
import { BottomNav } from './src/components/BottomNav';
import { theme } from './src/utils/theme';
import { View, ActivityIndicator } from 'react-native';

const Tab = createBottomTabNavigator();

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.obsidian,
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Geist_400Regular,
    Geist_500Medium,
    Geist_700Bold,
    JetBrainsMono_400Regular,
    JetBrainsMono_500Medium,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, backgroundColor: theme.colors.obsidian, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator color={theme.colors.neonCyan} />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={AppTheme}>
        <StatusBar style="light" />
        <Tab.Navigator 
          tabBar={(props) => <BottomNav {...props} />}
          screenOptions={{ headerShown: false }}
        >
          <Tab.Screen name="Dashboard" component={DashboardScreen} />
          <Tab.Screen name="Tasks" component={DashboardScreen} />
          <Tab.Screen name="Gym" component={DashboardScreen} />
          <Tab.Screen name="Meals" component={DashboardScreen} />
          <Tab.Screen name="Money" component={FinanceScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
