import React, { Component } from 'react';

export default class Cell extends Component {

   constructor(props){
      super()
      // console.log('cell props: ', props)
      this.state = {
         color: props.value
      }
   }

   handleClick = () => {
      this.setState({
         color: '#333'
      })
   }

   render(){
      // console.log('cell props: ', this.props[0])
      return(
         <div 
            className="cell" 
            style={{backgroundColor: this.state.color}}
            onClick={this.handleClick}>
         </div>
      )
   }
}

