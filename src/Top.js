import { Divider } from '@material-ui/core'
import React from 'react'
import './App.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import {Link} from "react-router-dom";
import Sell from './attributes'
import MenuBar from './menu'
import Banner from './banner'
import LastDate from './last'
import OlxApp from './olxapp'
import Footer from './footer'
import Image from './image/Capture.PNG'
import Image1 from './image/download.png'
import Image2 from './image/download (1).png'
import firebase from './config/firebase'
import {connect} from 'react-redux'
import {send} from './store/action'







 class TopBar extends React.Component{
constructor(){
  super()
  this.state={
    name:'',
    data:[],
            image:[],
            items:''

  }
}

componentDidMount(){


  firebase.database().ref('/').child('data').on('child_added',(data)=>{
      this.state.data.push(data.val())
    this.setState({
      data:this.state.data
      
    })
     })}
  

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
    
        return(


<div >
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
              {/* <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div> */}
              <div className="modal-body">
                <br/><br/><br/>
              <button class="modal-btn" onClick={this.change}>Continue with Phone</button>
     <button class="modal-btn" onClick={this.facebook} >Continue with facebook</button>
        <button class="modal-btn" onClick={this.google}>Continue with google</button>
       <button class="modal-btn">Continue with email</button><br></br>
       <br/><br/><br/>
              </div>
              {/* <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div> */}
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
      <Banner />
     
      <br></br>
      <br></br>
      <br></br>
    <LastDate />
    <br></br>
    {/* <Fresh /> */}
    <div className="container">
<div className="row">
<div className="col-lg-12 ">
    <p className="last-p">Fresh recommendations</p>
</div>

</div>



<div className="row">
    <div className="col">
    <ul className="fresh-ul">
    {this.state.data.map((v,i)=>{
        
    return <li key={i} className="fresh-li"  onClick={()=>this.setState({items:v,send:this.props.send(v,this.props.history),})}>
        <div className="center">
         
<img  src={v.picture} width="150px" height="140px" style={{marginBottom:"10px"}} />
</div>


      <h5> Rs {v.price}</h5>
    
    <span className="fresh-title">{v.title}</span>
    <br />
    <br />
    <span className="fresh-title">{v.city}</span>
    </li>
    })}
</ul>


    </div>

</div>
<br />
</div>
   
    <OlxApp />
    <Footer />
      </div>
    );
  }

    }


   const mapStateToProps = (state)=>({
      name:state.auth.name,
      email:state.auth.email,
      app:state.app.app
      
   })

const mapDispatchtoProp = (dispatch)=>({
send :(v,h)=> dispatch(send(v,h))
})

    export default connect(mapStateToProps,mapDispatchtoProp)(TopBar);