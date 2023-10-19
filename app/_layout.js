import { Image, StatusBar } from 'react-native';
import { Tabs, Slot, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { COLORS, icons } from '../constants';
import style from '../components/common/navBar/navBar.style';
import { store } from '../redux/store';
import { Provider, useSelector } from 'react-redux';

function LoggedInCheck() {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    if (!isLoggedIn) {
        return <Stack />;
    }

    return (
        <>
            <StatusBar barStyle={'dark-content'} />
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: { backgroundColor: COLORS.accents8, color: '#004950' }
                }}
            >
                <Tabs.Screen name="index" options={{ href: null }} />
                <Tabs.Screen name="login" options={{ href: null }} />
                <Tabs.Screen name="register/index" options={{ href: null }} />
                <Tabs.Screen
                    name="discover"
                    options={{
                        title: 'Discover',
                        tabBarIcon: ({ focused, color, size }) => (
                            <Image source={focused ? icons.discoverFocused : icons.discover} resize="cover" style={style.tabIcon(size)} />
                        ),
                        // tabBarIconStyle: { color: "red" },
                        tabBarActiveTintColor: '#8e0387'
                        // tabBarInactiveTintColor: "green",
                        // tabBarActiveBackgroundColor: "accents6",
                        // tabBarInactiveBackgroundColor: "#fb7061",
                    }}
                />
                <Tabs.Screen
                    name="map"
                    options={{
                        title: 'Map',
                        tabBarIcon: ({ focused, color, size }) => (
                            <Image source={focused ? icons.mapFocused : icons.map} resize="cover" style={style.tabIcon(size)} />
                        ),
                        tabBarActiveTintColor: '#8e0387'
                    }}
                />
                <Tabs.Screen
                    name="forum"
                    options={{
                        title: 'Forum',
                        tabBarIcon: ({ focused, color, size }) => (
                            <Image source={focused ? icons.forumFocused : icons.forum} resize="cover" style={style.tabIcon(size)} />
                        ),
                        tabBarActiveTintColor: '#8e0387'
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'Profile',
                        tabBarIcon: ({ focused, color, size }) => (
                            <Image source={focused ? icons.profileFocused : icons.profile} resize="cover" style={style.tabIcon(size)} />
                        ),
                        tabBarActiveTintColor: '#8e0387'
                    }}
                />
            </Tabs>
        </>
    );
}

export default function Layout() {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
        HomenajeRegular: require('../assets/fonts/Homenaje-Regular.ttf')
    });

    if (!fontsLoaded) {
        return null;
    }

    if (Platform.OS === 'web') {
        return (
            <Provider store={store}>
                <Slot />
            </Provider>
        );
    }

    return (
        <Provider store={store}>
            <LoggedInCheck />
        </Provider>
    );
}
