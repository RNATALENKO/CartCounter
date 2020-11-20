
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

     handleDelete = (counterId) =>{
         console.log("handler method called", counterId);
         //filter out counters based on id
         const counters = this.state.counters.filter(counter => counter.id !== counterId);

         //override state with the new counters
         this.setState({counters});
     }

     handleReset = ()=>{
        const counters = this.state.counters.map(counter =>{
            counter.value = 0; 
            return counter; 
        })

        this.setState({counters});
     }

    //render the counter component within the ListCounter Component
    render() { 
        return (
            <div>
                <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.state.counters.map(counter => <Counter 
               onDelete={this.handleDelete} 
               key={counter.id} 
               counter={counter}>
               </Counter>)}
            </div>
        );
    }
}
 
export default ListCounter;
