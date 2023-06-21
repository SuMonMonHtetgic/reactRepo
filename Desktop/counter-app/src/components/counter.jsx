import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        imageUrl: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*8K2hsvp6FclU4r35.png",
        tags: ['tag1', 'tag2', 'tag3']
    };
    styles ={
        fontSize: 50,
        fontWeight: "bold",
        fontFamily: "cursive"
    };
    
    render() { 
        // let classes = this.getBadgeClasses();
        
        return (
            // <React.Fragment>
            <div>
                <img src={this.state.imageUrl} alt="" width={400}/> <br /><br />
                {/* <span>{this.state.count}</span> */}
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                {/* <span>{2 + 3}</span> */}
                <button 
                onClick={this.handleIncrement} className='btn btn-primary btn-sm m-2'>Increment</button>
                <ul>
                    { this.state.tags.map(tag => <li key={tag}>{ tag }</li> )}
                    
                </ul>
                <div> {this.renderTags()}</div>
            </div>
          
          
            // </React.Fragment>
        );
       
    }
    
    handleIncrement(){
        console.log('Increment clicked', this.state.count)
    }

    renderTags(){
        if (this.state.tags.length === 0) return <p>There are no tags</p>;

        return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li> )}</ul>;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        const text = "Zero";
        return count === 0 ? text : count;
    }
}
 
export default Counter;