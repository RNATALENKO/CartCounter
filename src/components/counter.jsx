import React, {Component} from "react";


//component object
class Counter extends Component{

    //state object, holds data that will be dynamically displayed into a component
    //props is an object, and you can access your property with .property
    state = {
        count:this.props.counter.value,
        imageUrl: "https://picsum.photos/200",
        tags: []
    }



    //method that will return a value, can return jsx as well
    formatCount() {
        const {count} = this.state; 
        return count == 0 ?"zero":count;
    }

    //method that will return a jsx component based on condition
    renderTags(){

        //store the tags
        var {tags} = this.state; 

        //if there are no tags in state object, return a <p> element
        if(tags.length === 0){
            return <p>No tags</p>;
        }

        //otherwise map tags and interpolate them into a list item
        //then return the unorderd list
         return <ul>{tags.map(function(tag){
                return <li key={tag}>{tag}</li>
            })}</ul>; 
        }
    

    //execute on click
    handleIncrement = () => {
        console.log(this.state.count);
        //add to the state count, and set that as the object count property, which overrides state
        this.setState({count: this.state.count+1});
    }


    //method that returns and displays a component
    //can write css styling here because it's in a method not class
    
    render(){

        //some CSS classes
        const deleteButton ={
            marginLeft:"10px",
            padding:"5px",
        }


        console.log("props", this.props);


        //return the virtual DOM element
        return (
            <div>
                <h4>Counter #{this.props.counter.id}</h4>
                <span className={this.getBadgeClasses()}>  {this.formatCount()}  </span>
                <button onClick={this.handleIncrement} className="btn btn-sm btn-secondary">Increment</button>
                <button onClick={()=>{this.props.onDelete(this.props.counter.id)}} className="btn btn-danger" style={deleteButton}>delete</button>
            </div>
        );
    }

    //creates the classes depending on if the state count is zero or not
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0 ? "warning" : "primary");
        return classes;
    }

    


}

//export the counter component
export default Counter;