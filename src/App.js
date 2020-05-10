import React from 'react';
import './App.css';
import me from './me.png';
import Intro from './intro';
import About from './about';
import Project from './project';
import Passion from './passion';
import Contact from './contact';
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
    e.target.style.color = 'white';
    if(this.state.value === 0)
      this.refs.home.style.color = '#79B4EB';
    else if(this.state.value === 1)
      this.refs.about.style.color = '#79B4EB';
    else if(this.state.value === 2)
      this.refs.project.style.color = '#79B4EB';
    else if(this.state.value === 3)
      this.refs.passion.style.color = '#79B4EB';
    else if(this.state.value === 4)
      this.refs.contact.style.color = '#79B4EB';
  }

  call0(e)
  {
    e.target.style.color = '#79B4EB';
    this.refs.about.style.color = 'white';
    this.refs.project.style.color = 'white';
    this.refs.passion.style.color = 'white';
    this.refs.contact.style.color = 'white';
    this.setState({value: 0});
  }

  call1(e){
    e.target.style.color = '#79B4EB';
    this.refs.home.style.color = 'white';
    this.refs.project.style.color = 'white';
    this.refs.passion.style.color = 'white';
    this.refs.contact.style.color = 'white';
    this.setState({value: 1});
  }

  call2(e){
    e.target.style.color = '#79B4EB';
    this.refs.home.style.color = 'white';
    this.refs.about.style.color = 'white';
    this.refs.passion.style.color = 'white';
    this.refs.contact.style.color = 'white';
    this.setState({value: 2});
  }

  call3(e){
    e.target.style.color = '#79B4EB';
    this.refs.home.style.color = 'white';
    this.refs.about.style.color = 'white';
    this.refs.project.style.color = 'white';
    this.refs.contact.style.color = 'white';
    this.setState({value: 3});
  }  

  call4(e){
    e.target.style.color = '#79B4EB';
    this.refs.home.style.color = 'white';
    this.refs.about.style.color = 'white';
    this.refs.project.style.color = 'white';
    this.refs.passion.style.color = 'white';
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
    else if(this.state.value === 3)
      a = <Passion />
    else if(this.state.value === 4)
      a = <Contact />
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
                  <h3 onMouseEnter={this.colorchange} onMouseLeave={this.colorchangeback} onClick={this.call0} ref="home">HOME</h3>
                  <h3 onMouseEnter={this.colorchange} onMouseLeave={this.colorchangeback} onClick={this.call1} ref="about">ABOUT</h3>
                  <h3 onMouseEnter={this.colorchange} onMouseLeave={this.colorchangeback} onClick={this.call2} ref="project">PROJECTS</h3>
                  <h3 onMouseEnter={this.colorchange} onMouseLeave={this.colorchangeback} onClick={this.call3} ref="passion">PASSION</h3>
                  <h3 onMouseEnter={this.colorchange} onMouseLeave={this.colorchangeback} onClick={this.call4} ref="contact">CONTACT</h3><br/>
                </div>
            </div>
          </nav>
        </Col>

        <Col>
          <div className="App-header">
            {a}
            <br/><br/>
            <div className="foot">
              <span>
                &copy; 2020{" "}
                <span className="text-primary">
                  <b>Karanraj</b>
                </span>{" "}
                All Rights Reserved
              </span>
            </div>
            <br/>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
}

export default App;
