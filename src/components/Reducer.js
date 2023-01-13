







function increment(){
    return{
        count:0,
    }
}

const Reducer=(state=increment(),action)=>{
    switch(action.type){
        case 'increment':
        return {
            count:state.count+1,
        }

        case 'decrement':
            return{
                count:state.count-1,
            }
        
        default:
            return state;    
    }
}

export default Reducer;