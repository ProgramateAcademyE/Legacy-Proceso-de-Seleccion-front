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
import AdministerTechnicalTestAdd from "../page/technicalTest/AdministerTechnicalTestAdd";
import QualifyTechnicalTest from "../page/technicalTest/QualifyTechnicalTest";
import AdministerTechnicalTestEdit from "../page/technicalTest/AdministerTechnicalTestEdit";
import Results from "../page/Results/Results";
import FormInscription from "../page/formAspirant/FormInscription";
import InterviewAspirant from "../page/interviewAspirant/InterviewAspirant";
import ProofAspirant from "../page/proofAspirant/ProofAspirant";
import InterviewDay from "../page/citation/InterviewDay";
import NewCohort from "../components/newConvocatory/NewCohort ";
import EditCohort from "../components/newConvocatory/EditCohort";
import LoginFull from "../components/auth/LoginFull";
import WaitingList from "../page/waitingList/WaitingList";
import { useDispatch, useSelector } from "react-redux";
import Citations from "../page/citations/Citations";
import InterviewDays from "../page/interviewDays/InterviewDays";
import Footer from "../components/footer/Footer";
import { getData } from "../actions/sololearnProfile";
import SelectionResults from "../page/selection/SelectionResults";

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
            {pathname !== "/" && <Header />}

            <div className="d-flex top">
                {/* {pathname !== "/login" && <Nav user={user} adminstate={adminstate} />} */}
                {pathname !== "/" && <Nav />}

                <Switch>
                    <Route exact path="/" component={LoginFull} />
                    {/* <Redirect to="/login" /> */}
                    {isLogged && isAdmin && (
                        <>
                            <Route
                                path="/dashboard"
                                component={DashboardAdmin}
                            />
                            <Route
                                path="/dia-de-entrevista"
                                component={InterviewDays}
                            />
                            <Route path="/calendario">
                                <InterviewDay />
                            </Route>
                            <Route
                                path="/convocatoria"
                                component={Convocatory}
                            />
                            <Route path="/nuevacohorte" component={NewCohort} />
                            <Route
                                path="/editarcohorte"
                                component={EditCohort}
                            />
                            <Route path="/aspirantes" component={Aspirants} />
                            <Route
                                path="/prueba"
                                component={AdministerTechnicalTest}
                            />
                            <Route
                                path="/agregar"
                                component={AdministerTechnicalTestAdd}
                            />
                            <Route
                                path="/editar"
                                component={AdministerTechnicalTestEdit}
                            />
                            <Route
                                path="/calificar"
                                component={QualifyTechnicalTest}
                            />
                            <Route path="/citation" component={Citations} />

                            {/* <Route path="/inscripcion" component={Inscription} /> */}
                            {/* <Route
                  path="/resultsInscription"
                  component={ResultsInscription}
                /> */}
                            <Route
                                path="/resultsInscription"
                                component={Results}
                            />
                            <Route
                                path="/waiting-list"
                                component={WaitingList}
                            />
                            <Route
                                path="/motivationLetter"
                                component={MotivationLetter}
                            />
                            <Route
                                path="/parameterization"
                                component={Parameterization}
                            />
                            <Route
                                path="/selection-results"
                                component={SelectionResults}
                            />
                        </>
                    )}
                    {!isAdmin && isLogged && (
                        <>
                            <Route
                                exact
                                path="/inscripcion"
                                component={FormInscription}
                            />
                            <Route exact path="/entrevista">
                                <InterviewAspirant />
                            </Route>
                            <Route
                                exact
                                path="/aspirante"
                                component={ProofAspirant}
                            />
                            <Route
                                exact
                                path="/dashboard"
                                component={DashboardAspirant}
                            />
                        </>
                    )}
                </Switch>
            </div>
            {pathname !== "/" && <Footer />}
        </>
    );
};
export default App;
