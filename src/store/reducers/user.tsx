import {UserProps} from '../actions/user';

const initialState = {
  id: null,
  name: null,
  username: null,
  profile:[],
  role_id: null,
  email: null,
  email_verified_at: null,
  pin: null,
  phone: null,
  document_number: null,
  phone_validated: null,
  blocked: null,
  blocked_pin: null,
  google2fa_secret: null,
  created_at: null,
  updated_at: null,
  deleted_at: null,
  device_token: null,
  device_token_status: null,
  access_token: null,
  wallets: null,
  wallet_selected: null,
  totalBalance: null,
  coin: null,
  address_wallet_receive: null,
  device_name: null,
  currencys: null,
  extract: null,
  creditExtract:null
};

const user = (
  state = initialState,
  action: {
    type: string;
    payload: UserProps;
  },
) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        name: action.payload.name
          ?.toLowerCase()
          .replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase()),
        email: action.payload.email,
        email_verified_at: action.payload.email_verified_at,
        pin: action.payload.pin,
        document_number: action.payload.document_number,
        phone_validated: action.payload.phone_validated,
        google2fa_secret: action.payload.google2fa_secret,
        created_at: action.payload.created_at,
        device_token_status: action.payload.device_token_status,
        profile:action.payload.profile,

        access_token: action.payload.access_token,
      };
    case 'SET_TOKEN_PUSH':
      return {
        ...state,
        device_token: action.payload.device_token,
      };
      case 'SET_CREDIT_EXTRACT':
      return {
        ...state,
        creditExtract: action.payload.creditExtract,
      };
    case 'SET_DEVICE_NAME':
      return {
        ...state,
        device_name: action.payload.device_name,
      };
    case 'SET_GOOGLE_SECRET':
      return {
        ...state,
        google2fa_secret: action.payload.google2fa_secret,
      };
    case 'GET_BALANCE':
      return {
        ...state,
        totalBalance: action.payload.totalBalance,
        currencys: action.payload.currencys,
      };
    case 'GET_EXTRACT':
      return {
        ...state,
        extract: action.payload.extract,
      };

    case 'CLEAR_STATE':
      return initialState;
    default:
      return state;
  }
};

export default user;
