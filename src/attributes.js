import React from 'react'
import firebase from './config/firebase'
import {Link} from "react-router-dom";
import Camera from './image/Camera-Icon-PNG.png'





export default  class Sell extends React.Component{
constructor(){
    super()
    this.state={
      condition:'',
      type:'',
        title:'',
        description:'',
        price:'',
        state:'',
        city:'',
        name:'',
        phone:'',
        image:'',
        picture:''
    }
}





active = (v)=>{
  
  this.setState({
    condition:v
  })
  
var name =document.getElementsByClassName('condition')
if (v=='New'){
    name[1].classList.remove('active')
    name[0].classList.add('active')
    
    
}
else{
    if (v=="Used"){
        name[0].classList.remove('active')
        name[1].classList.add('active')
        
        }
}
}








active1 = (e,v)=>{
//   this.setState({
//     type:v
//   })
    
//     var name =document.getElementsByClassName('type')
//     for (var i=0;i<name.length;i++){
// name[i].classList.remove('active')
//     }

// e.target.classList.add('active')

    

}



go = () =>{
  
  firebase.database().ref('/').child('data').push(this.state)
  console.log('send')
  alert("data saved")
  this.props.history.push('/')
  

}





photo =(e)=>{
  alert("please wait for 5 second picture is loaded")
  var image = e.target.files[0]
  this.setState({
    image:e.target.files[0]
  })
  
  var imageName=image.name
  firebase.storage().ref('image/'+imageName).put(image).then((result)=>{
    console.log('done')
    
  }).then((error)=>{
    console.log(error)
    
  })

  firebase.storage().ref('image/'+imageName).put(image).on('state_changed',(snapshot)=>{
    var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100
    
    console.log('upload is ' + progress + ' done')
},(error)=>{
    console.log(error.message)
},()=>{
    firebase.storage().ref('image/'+imageName).put(image).snapshot.ref.getDownloadURL().then((downloadURL)=>{
        console.log("yahi he",downloadURL)
this.setState({
  picture:downloadURL,
})
        var hide=document.getElementById('hide')
        var hide1=document.getElementById('hide1')
        hide.classList.add('test')
        hide1.classList.add('test')
      var photo=document.getElementById('photo')
      photo.style.backgroundImage='url('+downloadURL+')'
        photo.style.backgroundSize="cover"

    })
})
}




    render(){
      
     
        return(
            <div>
                <div>
  
  
  <div className="fluid-container">
    <div className="row grey">

    
    <div className="col-lg-3">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link to="/">  <img src="https://image.flaticon.com/icons/png/512/271/271218.png" width="25px" alt="" /></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src="data:image/png;base64,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" width="70px" alt="" />
      </div>
    
        
      

</div>
<div className="row justify-content-center">
<div className="col-lg-3 center ">
<h3>POST YOUR AD</h3>
</div>
</div>





<div className="row justify-content-center">
<div className="col-lg-6 border">
   
    <h5 className="category">SELECTED CATEGORY</h5>
</div>
</div>


<div className="row justify-content-center ">
<div className="col-lg-6 border ">
   
    <h5>INCLUDE SOME DETAILS</h5>
    <p>Conditions *</p>

    <div className="row">
    <div className="col-lg-1  ">
    <div  className="new condition" onClick={()=>this.active('New')} >New</div>
    </div>
    <div className="col-lg-1 ">
    <div className="new condition" onClick={()=>this.active('Used')} >Used</div>
    </div>
    </div>
    <br />
    <br />



<p>Company *</p>

<div className="row">
<div className="col-lg-1  ">
<input  onChange={(e)=>this.setState({type:e.target.value})} type="text" className="form-control title" required/>

</div>
</div>


<br />
<br />
<p>Ad title *</p>
<form>
        <div className="row">
          <div className="col">
            <input  onChange={(e)=>this.setState({title:e.target.value})} type="text" className="form-control title" required/>
          <p className="title-txt">
Mention the key features of your item (e.g. brand, model, age, type) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0/70
</p>
          </div>
         
        </div>
      </form>




      <br />
<br />
<p>Description *</p>
<form>
        <div className="row">
          <div className="col">
          
   
    <textarea class="form-control title1" onChange={(e)=>this.setState({description:e.target.value})} ></textarea>
  
           
          <p className="title-txt">
          Include condition, features and reason for selling &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0/4096
</p>
          </div>
         
        </div>
      </form>





      <br />
<br />
<h5>SET A PRICE</h5>
<form>
        <div className="row">
          <div className="col">
          <input  onChange={(e)=>this.setState({price:e.target.value})} type="text" className="form-control title" required/>
          
        
      </div>
    </div>
         
        
      </form>



            <br />
<br />
<h5>UPLOAD PHOTO</h5>

        <div className="row">
          <div className="col" >
          <div className="photo center" id="photo">
            <br />
            
            <img src={Camera} id="hide" width="35px"/>
<p className="photo-p " id="hide1">Add Photo</p>
<input type="file" id="files" class="hidden" onChange={(e)=>this.photo(e)}/>
<label for="files" className="select"></label>





          </div>
          </div>
    </div>
         
        
      

<br />
<br />

      <h5>CONFIRM YOUR LOCATION</h5>
      <br />
      <div className="row">
          <div className="col">
          <label for="validationServer04">State *</label><br />
      <select onChange={(e)=>this.setState({state:e.target.value})} class="custom-select is-invalid title" id="validationServer04" aria-describedby="validationServer04Feedback" required>
        <option selected disabled value=""></option>
        <option>Azad Kashmir</option>
        <option>Balochistan</option>
        <option>Islamabad Capital Territory</option>
        <option>Khybar Pakhtunkhwa</option>
        <option>Northern Areas</option>
        <option>Punjab</option>
        <option>Sindh</option>
      </select>
      <br />
      <br />
 
          <p>City*</p>
      <input  onChange={(e)=>this.setState({city:e.target.value})} type="text" className="form-control title" required/>
      </div>


      

    </div>


    <br />
<br />

      <h5>REVIEW YOUR DETAILS</h5>
      <div className="row">
          <div className="col-lg-2 ">
              <img src="https://statics.olx.com.pk/external/base/img/avatar_4.png" width="100px"></img>
          </div>
          <div className="col ">
              <p>Name</p>
            <input  onChange={(e)=>this.setState({name:e.target.value})} type="text" className="form-control title" required/>

          </div></div>

<br />

<div className="row">
  <div className="col-lg-3 ">
  Your phone number
  </div>
  <div className="col ">
  <input  onChange={(e)=>this.setState({phone:e.target.value})} type="number" className="form-control title" required/>

  </div>
          </div>


          <br />
          
          <div className="row border">
           <div className="col">
             <br />
           <button className="post" onClick={this.go}>Post now</button>
        
           <br />

           </div>
  
  
          </div>
      
    
</div>
</div>



            </div>
            </div>
            </div>
        )
    }
}


