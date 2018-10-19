import React, {Component} from 'react'
import BackgroundImage from 'react-background-image-loader'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './Splash.css'



class Splash extends Component {
  render() {
    return (
      <Grid fluid>
      <div className="splash">
        <div className='container'>
          <Row lg={1}>
            <h1 className='title'>Customized Nutrition Plan</h1>
          </Row>
          <Row >
            <Col xs={3} md={6}>
              more stuff
              and more stuff
            </Col>
          </Row>
        </div>

      </div>
      </Grid>
      );
  }
}

export default Splash;
