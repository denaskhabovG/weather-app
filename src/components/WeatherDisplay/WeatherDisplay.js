import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {Loader} from "../Loader/Loader";

export const WeatherDisplay = ({ getData, data }) => {
    const {
        sys: {
            country,
            sunrise,
            sunset
        },
        name,
        weather: [{
            main,
            description,
        }],
        main: {
            temp,
            temp_max,
            temp_min,
            feels_like,
            humidity,
            pressure,
            sea_level,
        },
        wind: {
            speed,
            gust,
            deg,
        },
        timezone,
        visibility,
    } = data;

    return (
        <View style={styles.mainBlock}>
                <TouchableOpacity
                    onPress={getData}
                    style={styles.button}>
                    <Text>Reload</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Country - {country}</Text>
                <Text style={styles.text}>City - {name}</Text>
                <Text style={styles.text}>Main - {main}</Text>
                <Text style={styles.text}>Description - {description}</Text>
                <Text style={styles.text}>Temperature - {temp}</Text>
                <Text style={styles.text}>Max-Temperature - {temp_max}</Text>
                <Text style={styles.text}>Min-Temperature - {temp_min}</Text>
                <Text style={styles.text}>Feels Like - {feels_like}</Text>
                <Text style={styles.text}>Humidity - {humidity}</Text>
                <Text style={styles.text}>Pressure - {pressure}</Text>
                <Text style={styles.text}>Sea Level - {sea_level}</Text>
                <Text style={styles.text}>Wind speed - {speed}</Text>
                <Text style={styles.text}>Wind gust - {gust}</Text>
                <Text style={styles.text}>Wind degrees - {deg}</Text>
                <Text style={styles.text}>Timezone - {timezone}</Text>
                <Text style={styles.text}>Visibility - {visibility}</Text>
                <Text style={styles.text}>Sunrise - {sunrise}</Text>
                <Text style={styles.text}>Sunset - {sunset}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainBlock: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 15
    },
    text: {
        fontSize: 24
    },
    button: {
        fontSize: 20,
        borderRadius: 5,
        backgroundColor: '#a4f9c8',
        padding: 5,
        marginBottom: 15
    }
});
