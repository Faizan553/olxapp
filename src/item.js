import React from 'react'
import {connect} from 'react-redux'
import Image1 from './image/download.png'
import Image2 from './image/download (1).png'
import Image from './image/Capture.PNG'
import { app } from 'firebase'
import Image3 from './image/avatar_4.png'
import Image4 from './image/phone.png'
import MenuBar from './menu'
import Footer from './footer'
import {send1} from './store/action'
import firebase from './config/firebase'



class Item extends React.Component{




  google=()=>{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      
      var user = result.user;
      
    }).catch(function(error) {
     
      console.log(error.message)
    });
  }
  
  facebook=()=>{
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
     
      var user= result.user
      var obj ={
        user:user.displayName
      }
     firebase.database().ref('/').child('user').push(obj)
      
    })
    .catch(function(error) {
      console.log(error.message)
  
  
    });
  }

    render(){
        
        let data=this.props.app
        console.log(data)
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
                  <option>Punjab</option>
                  <option>Islamabad Capital Territory</option>
                  <option>Sindh</option>
                  <option>Khyber Pakhtunkhwa</option>
                  <option>Azad Kashmir</option>
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
        <button class="modal-btn" onClick={this.change}>Continue with Phone</button>
<button class="modal-btn" onClick={this.facebook} >Continue with facebook</button>
  <button class="modal-btn" onClick={this.google}>Continue with google</button>
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
       <div>
     </div>
     </div>
         


      <div className="col-lg-1  app-pad1">
       
  
  <img src={Image} onClick={()=>this.props.history.push('/sell')}></img>
 
      </div>
    </div>
  </div>
  

</div>
<MenuBar />
<br /><br /><br /><br /><br />
<div className="container">
    <div className="row ">
        <div className="col-lg-8 border black center">
            <img src={data.picture} width="350px" height="400px"/>
            
        </div>
        <div className="col-lg-4 ">
            <div className="border radius">
            <h2 className="item-price">Rs {data.price}</h2>
            <h5>{data.title}</h5>
            <br />
            <p className="item-city">{data.city}</p>
            </div>
            <br />

            <div className="border radius">
            <h5>Seller description</h5>
            <div className="row">
                <div className="col-lg-3">
            <img src={Image3} width="70px"/>
            </div>
            <div className="col-lg-9 ">
        <b>{data.name}</b>
            <p className="item-city">Member Since Nov 2020</p>
            

            </div>
            </div>
            <div className="center">
            <button type="button" className="chat-btn" onClick={()=>this.props.send1(data.name,data.picture,this.props.history)}>Chat with seller</button>
            </div>
            <br />
            <div className="center">
                <img src={Image4} width="20px"/>
            <span className="item-phone">{data.phone}</span>
            </div>
            <br />
            </div>
            

            </div>
       

    </div>
    <div className="row">
        <div className="col-lg-8 border radius">
            <h5>Details</h5>
            <div className="row">
<div className="col-lg-3">
<p className="item-city light-grey">Make</p>

</div>
<div className="col-lg-3">
        <p className="item-city">{data.type}</p>

</div>
<div className="col-lg-3 light-grey">
<p className="item-city">Condition</p>

</div>
<div className="col-lg-3">
        <p className="item-city">{data.condition}</p>

</div>
            </div>
            <hr />
            <h5>Description</h5>
            <p>{data.description}</p>
            
        </div>
    </div>
</div>
<br />
<br />
<br />
<Footer />

            </div>
        )
    }
}


const mapStateToProps = (state)=>({
    
    app:state.app.items
 })

const mapDispatchtoProp = (dispatch)=>({
send1: (name,pic,h) => dispatch(send1(name,pic,h))
})

  export default connect(mapStateToProps,mapDispatchtoProp)(Item);