import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
// import { routes } from "./router/routes";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak"
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./helpers/privateRoute";

export default function App() {
  console.log('hufsdvsfv')
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak}>
        <Router>
          <Routes>
            <Route exact path='/' element={<SignIn/>}></Route>
            <Route path='/dashboard' element={
              <PrivateRoute>
                <Dashboard/>
              </PrivateRoute>}
            >
            </Route>
            {/* {routes.map((route,i) => {
              return <Route exact={route.exact} key={i} path={route.link} element={<route.component/>} />
            })} */}
          </Routes>
        </Router>
      </ReactKeycloakProvider>
    </div>
  )
}
