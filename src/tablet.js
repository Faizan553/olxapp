import React from 'react'
import Image from './image/Capture.PNG'
import Image1 from './image/download.png'
import Image2 from './image/download (1).png'

import {Link} from "react-router-dom";
import MenuBar from './menu'
import Item from './item'




export default class Detail extends React.Component{
render(){
    return(
        <div>
            <div className="grey">
  
  
  <div className="container">
    <div className="row">


      <div className="col-lg-1">
        <img src={Image1} width="70px" alt="" />
      </div>



      <div className="col-lg-3 app-pad1">
        <div className="form-group">
          <select className="form-control search1" id="exampleFormControlSelect1">
            <option>Pakistan</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>


      <div className="col-lg-6 ">
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control search " type="search" placeholder="Search" aria-label="Search" />
          <button type="button" className="btn btn-dark"><img src={Image2} width="20px"></img></button>
        </form>
      </div>



      <div className="col-lg-1  right ">
        <div >
        <div >
                 {/* Button trigger modal */}
        <p className=" login" data-toggle="modal" data-target="#exampleModal">
          Login
        </p>
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
              <button class="modal-btn">Continue with Phone</button>
     <button class="modal-btn" onClick={this.facebook}>Continue with facebook</button>
        <button class="modal-btn">Continue with google</button>
       <button class="modal-btn">Continue with email</button><br></br>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
             
             </div>
       </div>
       <div>
     </div>
     </div>
         


      <div className="col-lg-1  app-pad1">
      <Link to="sell">  <img src={Image}></img></Link>
      </div>
    </div>
  </div>
  

</div>
<MenuBar />
<br />
<br />
<Item />

        </div>
    )
}

}