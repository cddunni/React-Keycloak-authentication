import { useKeycloak } from "@react-keycloak/web";

const PrivateRoute = ({ children }) => {
   const { keycloak } = useKeycloak();
  
   const isLoggedIn = keycloak.authenticated;
  
   return isLoggedIn ? children : 'You need to be signed in to access this page';
  };
  
  export default PrivateRoute;