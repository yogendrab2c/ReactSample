

   const mathinitialetate={
    result:1,
    lastValues:[]
};
        
  
        const productsReducer = (state = mathinitialetate ,action) => { 
            switch(action.type){
                case "ADD":
                   state= {
                    ...state,
                   result : state.result + action.payload,
                   lastValues : [ ...state.lastValues,action.payload]
                  }
                break;
             
                case "SUB":
                   state={
                     ...state,
                    result : state.result - action.payload,
                    lastValues : [ ...state.lastValues,action.payload]
                   }
                break;
                case "MUL":
                   state={
                     ...state,
                    result : state.result * action.payload,
                    lastValues : [ ...state.lastValues,action.payload]
                   }
                break;
             
             }
           return state;
        }
  
    export default productsReducer;  