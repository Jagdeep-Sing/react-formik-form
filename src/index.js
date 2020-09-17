import React from 'react';
import ReactDOM from "react-dom";
import "./styles.css";
import InputField from './Components/InputField';
import SelectBox from './Components/SelectBox';
import RadioButtons from './Components/RadioButtons';
import Calender from './Components/Calender';
import TextArea from './Components/TextArea';
import Checkbox from './Components/checkbox'
import { useFormik } from "formik";
import * as Yup from 'yup';


const SignupForm = () => {

    const inputRefs = React.useRef(
        [
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef()
        ]
    );

    const formik = useFormik({

        initialValues: {

            username: '',
            email: '',
            luckyNumber: '',
            password: '',
            age: '',
            gender: '',
            dob: '',
            about: '',
            agreed: ''

        },

        validationSchema: Yup.object({

            username: Yup.string()

                .max(12, 'Must be 15 characters or less')

                .required('Required'),

            luckyNumber: Yup.string()

                .max(20, 'Must be 20 characters or less')

                .required('Required'),

            email: Yup.string()

                .email('Invalid email address')

                .required('Required'),

            password: Yup.string()
                .required('Please Enter your password')
                .matches(
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                ),
            age: Yup.string().required('Please select the age'),
            gender: Yup.string().required('Please select the gender'),
            dob: Yup.string().required('Please select the dob'),
            about: Yup.string().required('Please enter something'),
            agreed: Yup.string().required('Please select this')


        }),

        onSubmit: values => {

            alert(JSON.stringify(values, null, 2));

        },

    });

    return (
        <div className="App">
            <form onSubmit={formik.handleSubmit} className="form">
                <h1>SIGN UP</h1>
                <InputField
                    ref={inputRefs.current[0]}
                    name="username"
                    label="Username:"
                    type="text"
                    {...formik.getFieldProps('username')}
                />
                {formik.touched.username && formik.errors.username ? (

                    <div>{formik.errors.username}</div>

                ) : null}

                <InputField
                    ref={inputRefs.current[1]}
                    name="email"
                    label="Email:"
                    type="text"
                    {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (

                    <div>{formik.errors.email}</div>

                ) : null}


                <InputField
                    ref={inputRefs.current[2]}
                    name="luckyNumber"
                    label="Your lucky number:"
                    type="number"
                    {...formik.getFieldProps('luckyNumber')}
                />
                {formik.touched.luckyNumber && formik.errors.luckyNumber ? (

                    <div>{formik.errors.luckyNumber}</div>

                ) : null}

                <InputField
                    ref={inputRefs.current[3]}
                    name="password"
                    label="Password:"
                    type="password"
                    {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (

                    <div>{formik.errors.password}</div>

                ) : null}

                <SelectBox
                    ref={inputRefs.current[4]}
                    name="age"
                    label="Age"
                    {...formik.getFieldProps('age')}
                />
                {formik.touched.age && formik.errors.age ? (

                    <div>{formik.errors.age}</div>

                ) : null}

                <RadioButtons
                    ref={inputRefs.current[5]}
                    name="gender"
                    label="Gender"
                    {...formik.getFieldProps('gender')}
                />
                {formik.touched.gender && formik.errors.gender ? (

                    <div>{formik.errors.gender}</div>

                ) : null}

                <Calender
                    ref={inputRefs.current[6]}
                    name="dob"
                    {...formik.getFieldProps('dob')}
                />
                {formik.touched.dob && formik.errors.dob ? (

                    <div>{formik.errors.dob}</div>

                ) : null}

                <TextArea
                    ref={inputRefs.current[7]}
                    name="about"
                    label="Something about you"
                    multiline="true"
                    variant="outlined"
                    rows="3"
                    {...formik.getFieldProps('about')}
                />
                {formik.touched.about && formik.errors.about ? (

                    <div>{formik.errors.about}</div>

                ) : null}

                <Checkbox
                    ref={inputRefs.current[8]}
                    name="agreed"
                    label="Agree"
                    {...formik.getFieldProps('agreed')}
                />
                {formik.touched.agreed && formik.errors.agreed ? (

                    <div>{formik.errors.agreed}</div>

                ) : null}
                <button type="submit">SignUp</button>
            </form>
            <div className="form">
                {/* <ReactJson src={data} /> */}
                {/* <button onClick={resetForm}>RESET</button> */}
            </div>
        </div>
    );
}



function App() {
    return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);