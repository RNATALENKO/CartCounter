
import React, { Component } from 'react';

//import the counter
import Counter from "./counter";

class ListCounter extends Component {

    state = { 
        //array of counter objects
        counters: [
            {id:1, value: 0},
            {id:2, value: 1},
            {id:3, value: 2},
            {id:4, value: 3},
        ]
     }

    //render the counter component within the ListCounter Component
    render() { 
        return (
            <div>
               {this.state.counters.map(counter => <Counter key={counter.id} value={counter.value} selected={true}/>)}
            </div>
        );
    }
}
 
export default ListCounter;
