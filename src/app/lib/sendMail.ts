import axios from "axios";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

class CustomError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

const sendEmail = async (values: Values): Promise<any> => {
  if (
    values.firstName.length === 0 ||
    values.lastName.length === 0 ||
    values.email.length === 0 ||
    values.message.length === 0
  ) {
    // Throw a CustomError instance if required information is missing
    throw new CustomError(400, "Thiếu thông tin yêu cầu");
  }

  try {
    // Make the HTTP request using Axios
    const response = await axios({
      method: "post",
      url: "/api/send-mail",
      data: values,
    });

    // Return the response data
    return response.data;
  } catch (error: any) {
    // Handle errors from Axios request
    if (error.response !== null) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error);
      throw new CustomError(
        error.response.status as number,
        error.response.statusText as string
      );
    } else if (error.request !== null) {
      // The request was made but no response was received
      throw new CustomError(500, "No response received from server");
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new CustomError(500, "Error setting up request");
    }
  }
};

export default sendEmail;
