import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
class Landing extends Component
{
  render(){
    return(
      <div width={{width:"100%",margin:"auto"}}>
      <Grid className="landing-grid">
      <Cell col={12}>
      <img src="avatar.png" alt="avatar" className='avatar-img'/>
      <div className="banner-text">
      <h1>Full Stack Web Developer</h1>

      <hr/>
      <p>HTML/CSS | PHP | React Native | C | C++ | Python | Javascript </p>

      <div className="social-links">
      {/* linkedin */}
      <a href="https://www.linkedin.com/in/ajish-v-nair-641403182" rel="noopener noreferrer" target="_blank" >
      <i class="fa fa-linkedin-square" aria-hidden="true"></i>
      </a>

      {/* github */}
      <a href="https://github.com/ajishvnair" rel="noopener noreferrer" target="_blank" >
      <i class="fa fa-github" aria-hidden="true"></i>
      </a>



      {/* gmail */}
      <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" >
      <i class="fa fa-envelope" aria-hidden="true"></i>
      </a>

      </div>
      </div>
      </Cell>
      </Grid>
      </div>
    )
    }
    }


export default Landing;
