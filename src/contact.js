import React from 'react'
import {connect} from 'react-redux'
import Image1 from './image/download.png'
import Image2 from './image/download (1).png'
import Image from './image/Capture.PNG'
import firebase from './config/firebase'
import MenuBar from './menu'


class Chating extends React.Component{


constructor(){
    super()
    this.state={
        msg:"",
        chat:[]
    }
}

    
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
    
set = () =>{
    this.state.chat.push(this.state.msg)
    this.setState({
        chat:this.state.chat,
        msg:''
    })
    
}


    
    render(){
        
        let name = this.props.name
        let pic = this.props.pic
        console.log(name)
        console.log(pic)
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





                <br /><br /><br /><br />
                <div className="container">
<div className="row row-hei">
<div className="col-lg-5 border inbox">
    
        <h5><b>INBOX</b></h5>
    
</div>
<div className="col-lg-7 border">
    <img src={pic} width="40px" className="chat-pic"/>
        <span>{name}</span>
</div>
</div>
<div className="row row-hei1 ">
<div className="col-lg-5 border center">
    <div className="chat-p">
    <p >
        <br />
        All your chats will show up here
        <br />
        </p>
    </div>
    
        
    
</div>
<div className="col-lg-7 border inbox1">
    <div style={{textAlign:'right'}}>
  <ul>
      {this.state.chat.map((v,i)=>{
          return <li key={i} style={{listStyle:'none'}}>
              <span style={{backgroundColor:'#CEDDFF',paddingLeft:"10px",paddingRight:"10px"}}>{v}</span>
              </li>
      })}
  </ul>
  </div>
</div>
</div>



<div className="row row-hei">
<div className="col-lg-5 border">
    
    
        
    
</div>
<div className="col-lg-7 border">
  <input type="text" value={this.state.msg} onChange={(e)=>this.setState({msg:e.target.value})} placeholder="Type a message" className="chatmsg"/>
  <button type="button" onClick={()=>this.set()} class="btn btn-outline-info">send</button>
</div>
</div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state)=>({
    name:state.app.chatName,
    pic:state.app.chatPic
    
 })

const mapDispatchtoProp = (dispatch)=>({

})

  export default connect(mapStateToProps,mapDispatchtoProp)(Chating);