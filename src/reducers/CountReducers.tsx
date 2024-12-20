export const initialState = 0;
export const initialState2 ={
    firstname : "",
    lastname: "",
}
export function countReducer2(state = initialState2, action:{type:string,payload:{firstname:string,lastname:string}}) {
    switch (action.type) {
       case "print":
           return state = action.payload;
           default:
               return state;

    }
}

export function countReducer(state = initialState, action:{type:string,payload:number}) {
    switch (action.type){
        case "ADD_Counter":
            return state += action.payload;
        case "REMOVE_Counter":
            return state -= action.payload;
        default:
            return state
    }
}