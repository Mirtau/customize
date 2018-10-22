import React, {Component} from 'react'
import BackgroundImage from 'react-background-image-loader'
import {Grid, Row, Col} from 'react-flexbox-grid'
import './Splash.css'

class Splash extends Component {
  render() {
    return (<Grid fluid="fluid">
      <div className="splash">
        <div className='container1'>
          <Row lg={1}>
            <h1 className='title'>Customized Nutrition Plan</h1>
          </Row>

        </div>
        <Row >
          <Col className='col' xs={3} md={6}>
            <h3 className='col-words'>How does working with a dietitian benefit you ?</h3>
            <img className='photosp' src={require('./images/steak copy.jpg')}/>
            <p>Even with a balanced diet you can have nutritional deficiencies. Your body may not properly absorb essential nutrients such as; vitamins, minerals and antioxidants necessary for a healthy body. Every person is unique, both biochemically and metabolically. Your body’s requirements are significantly different from everyone else’s. Dietitians are uniquely trained and qualified to help you navigate the enormous amount of nutritional information that surrounds you every day. We can order medical tests to pinpoint biochemical imbalances and get to the root cause of your health concerns; saving you time and frustration of trying to resolve it yourself. I can stop the confusion that comes with the one-size-fits-all diet, nutrition and supplement programs flooding today’s market. The advanced technology I use allows me to see your body’s unique needs. With that information I work with you to create your Customized Nutrition Plan that will support your body’s biochemical needs; bringing you balanced health and peace of mind.
            </p>
          </Col>
          <Col className='col' xs={3} md={6}>
            <h3 className='col-words'>Why Customized Nutrition ?</h3>
            <img className='photosp' src={require('./images/masonjar2.jpg')}/>
            <p>Cursus metus vulputate duis ipsum massa congue quam brunch quisque sapien nibh tempus duis sapien. Eget lectus commodo mustache duis eu congue orci magna orci enim nec curabitur artisan eget leo duis. Eros metus nec integer lorem sapien keytar undefined sit ut pharetra nulla commodo justo commodo urna. Wire-rimmed glasses sem arcu in ultricies porta auctor orci rutrum ut organic ligula rutrum auctor eu adipiscing. Morbi fusce eu vulputate bahn mi sagittis molestie eu nulla sodales mattis lectus a quisque Portland integer cursus bibendum sapien odio. Integer amet pellentesque malesuada artisan sem eros cursus fusce mauris morbi sit morbi mattis bahn mi mattis justo fusce donec sit.</p>
          </Col>
        </Row>
        <hr />
        <h3 className='bot-words'>Let Us Help You Make The Best Choices For You !</h3>
      </div>
      <img src={require('./images/apple2.png')}/>
    </Grid>);
  }
}

export default Splash;
