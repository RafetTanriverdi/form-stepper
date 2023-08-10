import { ErrorMessage, Field, Form, Formik } from "formik";
import { stepperValidation } from "./validations/stepper-validation";
import classNames from "classnames";
import { AiOutlineCheck } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const steps = [
    {
      step: 1,
      title: "Personal Info",
    },
    {
      step: 2,
      title: "age and proffesion",
    },
    {
      step: 3,
      title: "About",
    },
    {
      step: 4,
      title: "Blog",
    },
  ];
  return (
    <div>
      <Formik
        validationSchema={stepperValidation}
        initialValues={{
          step: 1,
          laststep: 4,
          //step 1
          name: "",
          surname: "",
          //step 2
          age: "",
          job: "",

          //step3
          about: "",
        }}
        onSubmit={(values, actions) => {
          console.log("values", values);
        }}
      >
        {({
          values,
          setFieldValue,
          isValid,
          dirty,
          errors,
        }) => {
          const prevHandle = (e) => {
            setFieldValue("step", values.step - 1);
          };
          const nextHandle = (e) => {
            setFieldValue("step", values.step + 1);
          };
          const stepHandle = (e) => {
            setFieldValue("step", e);
          };
          return (
            <Form className="w-[500px] mx-auto">
              <header className="mb-4 grid grid-cols-4 gap-x-2.5 border  border-zinc-400 ">
                {/* <pre>{JSON.stringify(isValid)} </pre>
                <pre>{JSON.stringify(dirty)} </pre>
                <pre>{JSON.stringify(errors)} </pre>
                  <h3 className="text-lg font-medium text-zinc-700">
                    Adim {values.step}
                  </h3> */}
                {steps.map((step) => (
                  <button
                    type="button"
                    onClick={() => stepHandle(step.step)}
                    className="flex flex-col items-center justify-center py-2.5"
                    disabled={values.step < step.step}
                  >
                    <div
                      className={classNames(
                        "w-10 h-10 mb-2.5 rounded-full flex items-center justify-center bg-zinc-100",
                        {
                          "bg-blue-100 text-blue-600":
                            values.step === step.step,
                          "bg-green-100 text-green-600":
                            values.step > step.step,
                          "bg-zinc-100 text-zinc-700":
                            values.step !== step.step,
                        }
                      )}
                    >
                      {values.step > step.step ? (
                        <AiOutlineCheck />
                      ) : (
                        step.step
                      )}
                    </div>{" "}
                    <div
                      className={classNames("text-sm", {
                        "text-blue-600":
                          values.step === step.step,
                        "text-green-600":
                          values.step > step.step,
                        "text-zinc-500":
                          values.step !== step.step,
                      })}
                    >
                      {step.title}
                    </div>
                  </button>
                ))}
              </header>
              {values.step === 1 && (
                <div className="grid gap-2.5">
                  <Field
                    name="name"
                    className="input"
                    placeholder="Name"
                  />
                  <ErrorMessage
                    name="name"
                    component="small"
                    className="block text-xs text-ted-600 mt-1"
                  />

                  <Field
                    name="surname"
                    className="input"
                    placeholder="Surname"
                  />
                  <ErrorMessage
                    name="surname"
                    component="small"
                    className="block text-xs text-ted-600 mt-1"
                  />
                </div>
              )}
              {values.step === 2 && (
                <div className="grid gap-2.5">
                  <Field
                    name="age"
                    className="input"
                    placeholder="Age"
                  />
                  <ErrorMessage
                    name="age"
                    component="small"
                    className="block text-xs text-ted-600 mt-1"
                  />
                  <Field
                    name="job"
                    className="input"
                    placeholder="Job"
                  />
                  <ErrorMessage
                    name="job"
                    component="small"
                    className="block text-xs text-ted-600 mt-1"
                  />
                </div>
              )}
              {values.step === 3 && (
                <div className="grid gap-2.5">
                  <Field
                    name="about"
                    component="textarea"
                    className="textarea"
                    placeholder="About"
                  />
                  <ErrorMessage
                    name="about"
                    component="small"
                    className="block text-xs text-ted-600 mt-1"
                  />
                </div>
              )}
              {values.step === 4 && (
                <div className="grid gap-2.5">
                  <Field
                    name="blog"
                    component="textarea"
                    className="textarea"
                    placeholder="Blog"
                  />
                  <ErrorMessage
                    name="Blog"
                    component="small"
                    className="block text-xs text-ted-600 mt-1"
                  />
                </div>
              )}
              <div className="grid grid-cols-2 gap-x-4 mt-4">
                {(values.step > 1 && (
                  <button
                    className="button"
                    onClick={prevHandle}
                    type="button"
                  >
                    Prev
                  </button>
                )) || <div />}
                {values.step === values.laststep ? (
                  <>
                    <button
                      className="button"
                      type="submit"
                    >
                      Submit
                    </button>
                    <ToastContainer
                      position="bottom-right"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="light"
                    />
                  </>
                ) : (
                  <button
                    className="button"
                    onClick={nextHandle}
                    type="button"
                    disabled={!isValid || !dirty}
                  >
                    Next
                  </button>
                )}
              </div>
              <ToastContainer position="bottom-right" />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default App;
