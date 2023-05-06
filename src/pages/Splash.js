import {ImageBackground, StyleSheet} from "react-native";
import {memo} from "react";
import {StatusBar} from "expo-status-bar";

const Scene = memo(props => {
    return (
        <ImageBackground
            style={styles.container}
            source={require('../assets/splash.png')}
        >
            <StatusBar style={'auto'} />
        </ImageBackground>
    )
})
export default Scene

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
