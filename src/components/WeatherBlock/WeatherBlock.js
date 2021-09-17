import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {useNavigationState} from '@react-navigation/native';
import _ from 'lodash';
import {getWeatherData} from "../../api/fetchWeather";
import {getWeather, hideLoader, showLoader} from "../../redux/actions";
import {Loader} from "../Loader/Loader";
import {WeatherDisplay} from "../WeatherDisplay/WeatherDisplay";

export const WeatherBlock = () => {
    const dispatch = useDispatch();
    const weatherState = useSelector(state => state.weatherReducer.data);
    const loaderState = useSelector(state => state.loaderReducer.loader);
    const navigation = useNavigationState(state => state);

    const getData = async () => {
        dispatch(showLoader());
        const data = await getWeatherData(navigation.routeNames[navigation.index]);
        dispatch(getWeather(data));

        setTimeout(() => {
            dispatch(hideLoader());
        }, 2000);
    }

    useEffect(() => {
        if (!_.isEmpty(weatherState)) {
            getData();
        }
    }, [navigation]);

    if (_.isEmpty(weatherState)) {
        return <View style={styles.mainBlock}>
            <TouchableOpacity
                onPress={getData}
                style={styles.button}>
                <Text>Get {navigation.routeNames[navigation.index]} weather</Text>
            </TouchableOpacity>
            <Text style={styles.text}>There is no data</Text>
        </View>
    }

    return (
        <View style={styles.mainBlock}>{loaderState ? <Loader /> : <WeatherDisplay getData={getData} data={weatherState} />}</View>
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

