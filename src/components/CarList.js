import React, { Component } from "react";
import { View } from "react-native";
import axios from "axios";

import CarDetail from "./CarDetail";
// const CarList = () => {
//     return (
//         <View>
//             <Text>CarList</Text>            
//         </View>
//     );                                     //functional component
// };
class CarList extends Component {
    constructor() {
        super();
        this.state = { carList: [] };
    }
    componentDidMount() {
        axios.get("https://givecars.herokuapp.com").then(response => {
            this.setState({ carList: response.data });
        });
    }
    //nfn kısayolu
    renderList = () => {              //anfn kısayolu
        return this.state.carList.map((brand) => {
            < CarDetail key={brand.model[0].name} brand ={brand}> {brand.model[0].name} </CarDetail>
        })
    }

    render() {
        console.log(this.state);
        return (
            <View>
                {this.renderList()}
            </View>
        );                                     //class-based component
    }
}

export default CarList;