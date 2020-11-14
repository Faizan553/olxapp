import React from 'react'
import {connect } from 'react-redux'
import {send} from './store/action'
import firebase from './config/firebase'



 class LastDate extends React.Component{

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
        
    render(){
        console.log("data",this.props)
        return(
<div className="container dark-grey">
<div className="row">
<div className="col-lg-6 ">
    <p className="last-p">Based on your last search</p>
</div>


</div>

<div className="row">
    <div className="col">
    <ul className="fresh-ul">
    {this.state.data.slice(4,8).map((v,i)=>{
        
    return <li key={i} className="fresh-li"  onClick={()=>this.setState({items:v,})}>
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
</div>
        )
    }
}


const mapStateToProps = (state)=>({
    name:state.auth.name,
    email:state.auth.email,
    app:state.app.app
    
 })

// const mapDispatchtoProp = (dispatch)=>({
// // send :(v,h)=> dispatch(send(v,h))
// })

  export default connect(mapStateToProps,null)(LastDate);