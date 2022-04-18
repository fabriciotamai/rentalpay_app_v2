export interface IuserExtractProps {
    id:string,
    date:string,
    type_transaction:string,
    status:string,
    value:string,


}

export const onLoadExtractModal = ( extractUser : IuserExtractProps ) =>  {
    return{
        type:'SET_EXTRACT_MODAL',
        payload:extractUser

    }

}












