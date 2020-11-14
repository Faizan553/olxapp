
const initial = {
    items:'',
    chatName:'',
    chatPic:''

}


export default (state = initial,action)=>{
    
    switch (action.type){
        case 'Setdata':
            return({
                ...state,
                items:action.data
            })
            case 'SetChat':
                return({
                    ...state,
                    chatName:action.name,
                    chatPic:action.picture,
                })
        
    }
return state;
}

