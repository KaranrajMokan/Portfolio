import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import About from './about';

class Index extends React.Component{

  constructor(props){
    super(props);
    this.state = {value: 0};
    this.call1 = this.call1.bind(this);
  }

  call1()
  {
    this.setState({value:1});
  }
  
  render(){
    let a = this.state.value;
    if(a == 1)
    {
      return (<div><About /></div>)
    }
    return (<div><App call1={this.call1}/></div>);
  }
}

ReactDOM.render(
  <React.StrictMode>
      <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default Index;