import React from 'react';
import Desk from '../images/Desk.JPG'
import IMG_6662 from '../images/IMG_6662.JPG'
import IMG_6663_1 from '../images/IMG_6663_1.jpg'
import IMG_6660 from '../images/IMG_6660.JPG'



export default function Home () {
  return (
    <div>
      {/* <div classNameName='row'>
        <div className='col-12 text-center'>
          <h2>TUCQUAN STUDIOS</h2>
        </div>
      </div> */}
      {/* <div className="jumbotron jumbotron-fluid bg-white">
        <div className="container">
          <h1 className="display-4 text-center">Tucquan Studios</h1>
        </div>
      </div> */}

      <div className='container-fluid' style={{paddingBottom: '5px'}}>
        <div className='row'>
          <div class="col-12">
            <img className='img-fluid' src={IMG_6662}/>
          </div>
          {/* <div class="col-4 d-flex">
            <img className='img-fluid' src={IMG_6663_1}/>
          </div> */}
        </div>

      </div>
</div>


  )
}
