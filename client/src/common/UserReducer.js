
const initState = {
    id : "601182823e4486202fe5772a",
    email : "vatsalprajapati27@gmail.com"
}

const UserReducer = (state = initState,action) => {

     switch (action.type) {
         case "INCREASE":
            
            return {
                id : parseInt(action.payload)
            }
            
             
    
         default:
                    return initState
                    
            
     }
    

}



export default UserReducer