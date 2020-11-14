

const send = (v,h)=>{
    return(dispatch)=>{
        dispatch({type:'Setdata',data:v})
        h.push('/item')
    }
    
}
const send1 = (name,pic,h)=>{
    return(dispatch)=>{
        dispatch({type:'SetChat',name:name,picture:pic})
       h.push('/chating')

         

        
    }
    
}


export {
    send,
    send1
}