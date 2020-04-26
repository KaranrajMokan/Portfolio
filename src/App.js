import React from 'react';
import './App.css';
import me from './me.png';
import About from './about';

class App extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = { value: 0};
    this.colorchange = this.colorchange.bind(this);
    this.colorchangeback = this.colorchangeback.bind(this);

  }

  colorchange(e){
    e.target.style.color = '#79B4EB';
  }

  colorchangeback(e){
    e.target.style.color = 'black';
  }


  render(){

  return(
    <div>
      <div className="left">
        <div className="banner banner-left">
          <img src={me} className="App-logo" alt="me" />
        </div>
        
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="fonting">
            <br/>
            <h3 onMouseEnter={this.colorchange} onMouseLeave={this.colorchangeback} onClick={this.props.call1}>ABOUT</h3>
            <h3 onMouseEnter={this.colorchange} onMouseLeave={this.colorchangeback} onClick={this.callB}>PROJECTS</h3>
            <h3 onMouseEnter={this.colorchange} onMouseLeave={this.colorchangeback} onClick={this.callC}>PASSION</h3>
            <h3 onMouseEnter={this.colorchange} onMouseLeave={this.colorchangeback} onClick={this.callD}>CONTACT</h3><br/>  
        </div>
      </div>

      
      <div className="App-header">
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <h1 className="gap">
          Hello there! <br />
          Welcome
        </h1>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/>
        <h1><About /></h1>
      </div>

    </div>
  );
}
}

export default App;
