export const initialState = 0;
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