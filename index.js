import auth from './auth/index.js';
import middlewares from './middlewares/index.js';


const grpcAuth = {
  auth,
  middlewares
};

export default grpcAuth;
