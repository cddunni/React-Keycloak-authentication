import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8080/auth",
 realm: "dufuna-keycloak-react-auth",
 clientId: "react-auth",
});

export default keycloak;