import { useContext, useState } from 'react';
import commonContext from '../contexts/common/commonContext';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../services/firebase';
const auth = getAuth(app);

const registerUser =  async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
}


const useForm = () => {
    const { toggleForm, setFormUserInfo } = useContext(commonContext);
    const [inputValues, setInputValues] = useState({});

    // handling input-values
    const handleInputValues = (e) => {
        const { name, value } = e.target;

        setInputValues((prevValues) => {
            return {
                ...prevValues,
                [name]: value
            };
        });
    };

    // handling form-submission
    const handleFormSubmit = (e) => {
        const loggedUserInfo = inputValues.mail.split('@')[0].toUpperCase();

        e.preventDefault();
        setInputValues({});
        setFormUserInfo(loggedUserInfo);
        toggleForm(false);
        alert(`Hello ${loggedUserInfo}, you're successfully logged-in.`);
        registerUser(inputValues.mail, inputValues.password)
    };

    return { inputValues, handleInputValues, handleFormSubmit };
};

export default useForm;