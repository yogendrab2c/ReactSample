const userinitialetate={
      name:"",
      email:""
      };
      

      const userReducer = (state = userinitialetate ,action) => { 
        switch(action.type){
          case "LOGIN":
             state= {
              ...state,
               name : action.payload.name,
               email : action.payload.email,
            }
          break;
         
          case "LOGOUT":
             state={
               ...state,
               name : "NAN",
               email : "NAN"
             }
          break;
         
         }
         return state;
      }

  export default userReducer;  