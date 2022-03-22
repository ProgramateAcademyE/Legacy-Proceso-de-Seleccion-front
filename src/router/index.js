import React, { useEffect, useState } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Parameterization from "../components/inscription/Parameterization";
import MotivationLetter from "../components/inscription/MotivationLetterTable";
import Aspirants from "../page/aspirants/Aspirants";
import Convocatory from "../page/convocatory/Convocatory";
import DashboardAspirant from "../page/dasborardAspirant/DashboardAspirant";
import DashboardAdmin from "../page/dashboardAdmin/DashboardAdmin";
import AdministerTechnicalTest from "../page/technicalTest/AdministerTechnicalTest";
import AddTechTest from "../page/technicalTest/AddTechTest";
import QualifyTechnicalTest from "../page/technicalTest/QualifyTechnicalTest";
import Results from "../page/Results/Results";
import FormInscription from "../page/formAspirant/FormInscription";
import InterviewAspirant from "../page/interviewAspirant/InterviewAspirant";
import ProofAspirant from "../page/proofAspirant/ProofAspirant";
import InterviewDay from "../page/citation/InterviewDay";
import NewCohort from "../components/newConvocatory/NewCohort ";
import LoginFull from "../components/auth/LoginFull";
import WaitingList from "../page/waitingList/WaitingList";
import { useDispatch, useSelector } from "react-redux";
import Citations from "../page/citations/Citations";
import InterviewDays from "../page/interviewDays/InterviewDays";
import Footer from "../components/footer/Footer";
import { getData } from "../actions/sololearnProfile";
import SelectionResults from "../page/selection/SelectionResults";
import Verify from "../components/verify/Verify";
import RegisterAdmin from "../components/register/RegisterAdmin";

import Register from "../components/register/Register";
import ListOfUsers from "../components/allUsers/ListOfUsers";
import AspirantConvocatorys from "../page/Aspirant Convocatory/AspirantConvocatory";

import './style.css'

const App = () => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(auth.user.id));
  }, [dispatch, auth]);

  const { isLogged, isAdmin } = auth;
  const { pathname } = useLocation();

  return (
    <>
      {/* {pathname !== "/login" && <Header user={user} adminstate={adminstate} />} */}
      {pathname !== "/" && pathname !== "/register" && pathname !== '/verify' && <Header />}

      <div className="login">
        {/* {pathname !== "/login" && <Nav user={user} adminstate={adminstate} />} */}
        {pathname !== "/" && pathname !== "/register" && pathname !== '/verify' && <Nav />}

        <Switch>
          <Route exact path="/verify" component={Verify} />
          
          <Route exact path="/" component={LoginFull} />
       
          <Route exact path="/register" component={Register} /> 
          

          {/* <Redirect to="/login" /> */}
          {isLogged && isAdmin && (
            <>
              <Route path="/dashboard" component={DashboardAdmin} />
              <Route path="/users" component={ListOfUsers}/>

              <Route path="/dia-de-entrevista" component={InterviewDays} />
              <Route path="/calendario"><InterviewDay /></Route>
              <Route path="/convocatoria" component={Convocatory} />

              <Route path="/nuevacohorte" component={NewCohort} />
              <Route path="/editarcohorte" component={NewCohort} />
              <Route path="/aspirantes" component={Aspirants} />
              
              <Route path="/prueba" component={AdministerTechnicalTest} />
              <Route path="/agregar" component={AddTechTest}/>
              <Route path="/editarprueba" component={AddTechTest}/>
              <Route path="/calificar" component={QualifyTechnicalTest} />
              <Route path="/citation" component={Citations} />
              <Route path="/register-admin" component={RegisterAdmin} />
              {/* <Route path="/inscripcion" component={Inscription} /> */}
              {/* <Route
                  path="/resultsInscription"
                  component={ResultsInscription}
                /> */}
              <Route path="/InfoAspirants" component={Results} />
              <Route path="/waiting-list" component={WaitingList} />
              <Route path="/motivationLetter" component={MotivationLetter} />
              <Route path="/parameterization" component={Parameterization} />
              <Route path="/selection-results" component={SelectionResults} />
            </>
          )}
          {!isAdmin && isLogged && (
            <>
              <Route exact path="/inscripcion" component={FormInscription} />
              <Route exact path="/entrevista">
                <InterviewAspirant />
              </Route>
              <Route exact path="/Convocatoriasaspirante" component={AspirantConvocatorys}/>
              <Route exact path="/aspirante" component={ProofAspirant} />
              <Route exact path="/dashboard" component={DashboardAspirant} />
            </>
          )}
        </Switch>
      </div>
      {pathname !== '/verify' && <Footer />}
    </>
  );
};
export default App;
