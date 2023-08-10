import { ErrorMessage, Field, Form, Formik } from "formik";
import { stepperValidation } from "./validations/stepper-validation";

function App() {
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
        {({ values, setFieldValue, isValid, dirty ,errors}) => {
          const prevHandle = (e) => {
            setFieldValue("step", values.step - 1);
          };
          const nextHandle = (e) => {
            setFieldValue("step", values.step + 1);
          };
          return (
            <Form className="w-[500px] mx-auto">
              <pre>{JSON.stringify(isValid)} </pre>
              <pre>{JSON.stringify(dirty)} </pre>
              <pre>{JSON.stringify(errors)} </pre>
              <header className="mb-4 ">
                <h3 className="text-lg font-medium text-zinc-700">
                  Adim {values.step}
                </h3>
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
                  <button className="button" type="submit">
                    Submit
                  </button>
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
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default App;
