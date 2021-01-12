import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './base.css'
import avatim from './assets/avatar.jpg'


class Counter extends React.Component{
    constructor(props){
      super(props);
      this.state={       
        count:0,  
      }
    }
    render(){
      return (
        <div className="like-widget">
          <span className="like-txt">Likes {this.state.count}</span>
  
          <span onClick={() => this.setState({ count: this.state.count + 1 })} className="like-heart">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"  viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
          </svg>
          </span>
          
        </div>
      );
    }
  }

  class ImageAvatar extends React.Component{

    render(){
      return(
        <div className="avatar-wrapper">
          <img className="avatar" src={avatim}  alt="My profile picture"/>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Counter />,
    document.getElementById('mylike')
  );

  ReactDOM.render(
    <ImageAvatar/>,
    document.getElementById('for-avatar')
  );