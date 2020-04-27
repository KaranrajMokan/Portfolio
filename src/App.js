import React from 'react';
import './App.css';
import me from './me.png';
import Intro from './intro';
import About from './about';
import Project from './project';
import { Container, Row, Col } from 'reactstrap';



class App extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = { value: 0};
    this.colorchange = this.colorchange.bind(this);
    this.colorchangeback = this.colorchangeback.bind(this);
    this.call0 = this.call0.bind(this);
    this.call1 = this.call1.bind(this);
    this.call2 = this.call2.bind(this);
    this.call3 = this.call3.bind(this);
    this.call4 = this.call4.bind(this);
  }

  colorchange(e){
    e.target.style.color = '#79B4EB';
  }

  colorchangeback(e){
    e.target.style.color = 'black';
  }

  call0(e)
  {
    e.target.size = '100px';
    this.setState({value: 0});
  }

  call1(){
    this.setState({value: 1});
  }

  call2(){
    this.setState({value: 2});
  }

  call3(){
    this.setState({value: 3});
  }  

  call4(){
    this.setState({value: 4});
  }

  render(){

    let a;
    if(this.state.value === 0)
      a = <Intro />
    else if(this.state.value === 1)
      a = <About />
    else if(this.state.value === 2)
      a = <Project />
  return(
    <Container>
      <Row>
        <Col>
          <nav>
            <div className="left">
                <img src={me} className="App-logo" alt="me" />
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <div className="fonting">
                  <br/>
                  <h3 onMouseEnter={this.colorchange} onMouseLeave={this.colorchangeback} onClick={this.call0}>Home</h3>
                  <h3 onMouseEnter={this.colorchange} onMouseLeave={this.colorchangeback} onClick={this.call1}>ABOUT</h3>
                  <h3 onMouseEnter={this.colorchange} onMouseLeave={this.colorchangeback} onClick={this.call2}>PROJECTS</h3>
                  <h3 onMouseEnter={this.colorchange} onMouseLeave={this.colorchangeback} onClick={this.call3}>PASSION</h3>
                  <h3 onMouseEnter={this.colorchange} onMouseLeave={this.colorchangeback} onClick={this.call4}>CONTACT</h3><br/>
                </div>
            </div>
          </nav>
        </Col>

        <Col>
          <div className="App-header">
            {a}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
}

export default App;
