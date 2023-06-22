import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.value       
    };
   
    styles ={
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "cursive"
    };


  
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value } = this.props.counter;
        const text = "Zero";
        return value === 0 ? text : value;
    }
  
    
    render() { 
       
        // console.log(this.props);
        return (
            
            <div>
               
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                onClick={ () => this.props.onIncrement(this.props.counter) } className='btn btn-success btn-sm m-2'>Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
               
            </div>
          
          
           
        );
       
    }
    
   
}
 
export default Counter;