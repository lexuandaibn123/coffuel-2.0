import { useState } from "react";
const useContactForm = (): any => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const resetValues = (): void => {
    setValues({ firstName: "", lastName: "", email: "", message: "" });
  };
  const handleChange = (e: any): void => {
    setValues((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  return [values, handleChange, resetValues];
};

export default useContactForm;
