import axios from 'axios';
import {Platform} from 'react-native';

const api = axios.create({
  baseURL:
    Platform.OS === 'ios' ? 'http://127.0.0.1:8001' : 'http://10.0.2.2:8001',
    // baseURL:'http://167.99.113.186'
   
    
});

export default api;
