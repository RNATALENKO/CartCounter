import React, {Component} from "react";


class MyInfo extends Component{


    day = " null ";

    state = {
        "firstname": "rodion",
        "lastname": "natalenko",
        "birthday": "June" + this.day + "1981",
        "favoritefood": "all",
        "favoriteNumber": 0
    }

    //method that will return a random number
    getRandomNumber(){
        const {favoriteNumber} = this.state;
        return favoriteNumber > 0 ? favoriteNumber : (Math.floor(Math.random()*1000));
    }


    //render method which outputs this jsx html element
    //call getRandomNumberMethod inside interpolation
    render(){
        return (
            <div>
                <h1>My info:</h1>
                <p>First name: {this.firstname}</p>
                <p>Last name: {this.state.lastname}</p> 
                <p>birthday name: {this.state.birthday}</p>
                <p>favorite food: {this.state.favoritefood}</p>
                <p>favorite number: {this.getRandomNumber()}</p>
            </div>
        )
    }



}


export default MyInfo;