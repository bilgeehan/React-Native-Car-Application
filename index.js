//import libraries
import React from "react";
import { AppRegistry, View,Text } from "react-native";

import Header from "./src/components/Header";
import CarList from "./src/components/Carlist";

//create component
const App = () => {
    return (
        <View>
            <Header title={"Cars"} />
            <CarList />
        </View>
    );

};

//render component to screen

AppRegistry.registerComponent("mymobileapp", () => App);