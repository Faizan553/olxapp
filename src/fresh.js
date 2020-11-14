import React from 'react'
import firebase from './config/firebase'
import {connect} from 'react-redux'
import {send} from './store/action'
import {BrowserRouter as Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
 class Fresh extends React.Component{
    constructor(){
        super()
        this.state={
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
           })



        // get all images

    //        var storageRef = firebase.storage().ref("image");


    //        // Now we get the references of these images
    //        storageRef.listAll().then((result)=> {
    //          result.items.forEach((imageRef)=> {
    //            // And finally display them
    //            displayImage(imageRef);
    //          });
    //        }).catch(function(error) {
    //          // Handle any errors
    //        });
       
    //         const displayImage=(imageRef)=> {
    //          imageRef.getDownloadURL().then((url)=> {
               
    //           this.state.image.push(url)
    //           this.setState({
    //               image:this.state.image
    //           })
               
    //          }).catch(function(error) {
    //            // Handle any errors
    //          });
    //        }



           
      }



    render(){
        
       console.log(this.props)
        return(
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
        
    return<li key={i} className="fresh-li"  onClick={()=>this.setState({items:v,send:this.props.send(v)})}>
        <div className="center">
<img  src={v.picture} width="120px" height="140px" style={{marginBottom:"10px"}} />
</div>


      <h5> Rs {v.price}</h5>
    
    <span className="fresh-title " >{v.title}</span>
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
        )
    }
}

const mapStateToProps = (state)=>({
    items:state.app.items
    
 })

const mapDispatchtoProp = (dispatch)=>({
send :(v,h)=> dispatch(send(v,h))
})

  export default connect(mapStateToProps,mapDispatchtoProp)(Fresh);