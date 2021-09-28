//import libraries
import React from "react";
import { Text, View } from "react-native";

//create component
const Header = props => {
    const { textStyling, viewStyle } = styles;
    //    const textStyling=styles.textStyling;

    return (
        <View style={viewStyle}>
            <Text style={textStyling}>{props.title}</Text>
        </View>
    );
}; 
const styles = {
    textStyling: {
        fontSize: 22
    },
    viewStyle: {
        backgroundColor: "gainsboro",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 15

    }
};

//make components available to other components
export default Header; // diğer componentler tarafından görünür yapmak için 