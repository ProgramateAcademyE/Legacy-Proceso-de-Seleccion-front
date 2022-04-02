import React, { useState, useContext } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Swal from "sweetalert2";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { ContentContext } from "../../Context/status";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./StepForm.css";
import { getData, getProfileFull } from "../../actions/sololearnProfile";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
return ["Información Personal", "Datos sociodemográficos", "Información laboral y académica"];
}

function getStepContent(step) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [data, setData] = useState();

  const setDataToForm = (allValues) => {
    setData({...data, ...allValues})
  }

  const { user } = useSelector((state) => state.auth);
  console.log(user)

  const sendData = async () => {
    console.log(data)
    try {
      axios.post('http://localhost:3001/api/candidate/profile', {...data, user_id : user?._id}).then(res => console.log(res))
    } catch (error) {
      return(error)
    }

    dispatch(getProfileFull(user.user_id))
    dispatch(getData(user.user_id))

    // Swal.fire({
    //   icon: 'success',
    //   title: 'Datos enviados correctamente',
    //   confirmButtonText: 'OK',
    // }).then((result) => {
    //   /* Read more about isConfirmed, isDenied below */
    //   if (result.isConfirmed) {
    //     Swal.fire('Saved!', '', 'success')
    //   } else if (result.isDenied) {
    //     Swal.fire('Changes are not saved', '', 'info')
    //   }
    // })
    Swal.fire({
      position: 'center-center',
      icon: 'success',
      title: 'Datos enviados exitosamente',
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        history.push("/dashboard");
      }
    })
  };

  const props = { data, setDataToForm };


  switch (step) {
    case 0:
      return <Step1 {...props} />;
    case 1:
      return <Step2 {...props} />;
    case 2:
      return (
        <>
          <Step3 {...props} />
          <button
            className="btn btn-primary send-data"
            type="submit"
            onClick={sendData}
          >
            Enviar
          </button>
        </>
      );
    default:
      return "Unknown step";
  }
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper style={{display:"flex", flexDirection:"column"}} activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography component={"div"} className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography component={"div"} className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="contained"
                className={classes.button}
              >
                Back
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? null : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
