import React from 'react';
import '../App.css';
import { Link} from 'react-router-dom'

import landingpage_text from '../asset/img/home_landingpagetext.png'
import landingpage_circle from '../asset/img/landingpage_circle.png'
import landingpage_shapes1 from '../asset/img/homeshape1.png'
import landingpage_shapes2 from '../asset/img/homeshape2.png'
import landingpage_cake from '../asset/img/violetwhitchococake.png'
import landingpage2_cake from '../asset/img/mocacococake.png'
import landingpage3_cake from '../asset/img/landingpage3_cake.png'
import landingpage3_cirecle from '../asset/img/landingpage3_circle.png'
import landingpage3_shapes1 from '../asset/img/landingpage3_shape1.png'
import landingpage3_shapes2 from '../asset/img/landingpage3_shape2.png'

function Home(){
    return(
        <div className="App-body">
        <div className="landingpage">
          <div className="landingpage_bg">
            <div className="landingpage_bg_l"></div>
            <div className="landingpage_bg_r"></div>
          </div>
          <div className="landingpage_layer1">
            <img className="shape1" src={landingpage_shapes1} />
          </div>
          <div className="landingpage_layer2">
            <img className="circle" src={landingpage_circle} />
          </div>
          <div className="landingpage_layer3">
            <img className="text" src={landingpage_text}/>
            <img className="cake" src={landingpage_cake}/>
            <img className="shape2" src={landingpage_shapes2} />
          </div>
          <div>

          </div>
        </div>
        
        <div className="landingpage2">
          <div className="landingpage2_layer1">
            <p className="left">Freshly</p>
            <p className="right">Baked</p>
          </div>
          <div className="landingpage2_layer2">
          <img className="cake" src={landingpage2_cake}/>
          <Link style={{textDecoration:'none'}} to="/shop">
            <p>shop more</p>
          </Link>
          
          </div>
        </div>

        <div className="landingpage3">
          <div className="landingpage3_layer1">
            <img className="cake" src={landingpage3_cake} />
            <div className="landingpage3_finddiv">
              <p className="text">尋找 Chill Cup</p>
              <p className="btn">find shop</p>
            </div>
          </div>
          <div className="landingpage3_layer2">
            <img className="circle3" src={landingpage3_cirecle}/>
            <img className="shape1" src={landingpage3_shapes1}/>
            <img className="shape2" src={landingpage3_shapes2}/>
          </div>
        </div>

      </div>
    )
} 

export default Home;