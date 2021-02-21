
const initState = {
    count : 10
}

const UserReducer = (state = initState,action) => {

     switch (action.type) {
         case "INCREASE":
            
            return {
                count : state.count + parseInt(action.payload)
            }
            
             
    
         default:
                    return initState
                    
            
     }
    

}



export default UserReducer