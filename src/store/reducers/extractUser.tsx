import { IuserExtractProps } from '../actions/extractUser';

const initialState = {
    id: null,
    date: null,
    type_transaction: null,
    status: null,
    value: null,
};

const extractUser = (
    state = initialState,
    action:{
        type:string;
        payload:IuserExtractProps;

    },
) => {
    switch(action.type){
        case 'SET_EXTRACT_MODAL':
            return{
                ...state,
                id:action.payload.id,
                date:action.payload.date,
                type_transaction: action.payload.type_transaction,
                status: action.payload.status,
                value: action.payload.value
          } 
            default:
                return state;
    }
}




export default extractUser;