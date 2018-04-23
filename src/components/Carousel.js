import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Desk from '../images/Desk.JPG';
import IMG_6665 from '../images/IMG_6665.JPG';
import IMG_6666 from '../images/IMG_6666.JPG';
import IMG_6662 from '../images/IMG_6662.JPG';
import IMG_6660 from '../images/IMG_6660.JPG';
import IMG_6667 from '../images/IMG_6667.JPG';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';


import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
          <div className='container-fluid'>
            <Carousel autoPlay={true} infiniteLoop showStatus={false} interval={3500} transitionTime={800} stopOnHover={false}>
                <div>
                    <img className='img-fluid' src={IMG_6665} />
                </div>
                <div>
                    <img className='img-fluid' src={IMG_6662} />
                </div>
                <div>
                    <img className='img-fluid' src={IMG_6660} />
                </div>
                <div>
                    <img className='img-fluid' src={IMG_6667} />
                </div>
            </Carousel>
            </div>
        );
    }
};

export default DemoCarousel
