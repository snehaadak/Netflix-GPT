
export const checkValidData = (email,password,name) => {

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isName = /^[a-zA-Z]+(?:[\s'-][a-zA-Z]+)*$/.test(name);

    if(!isEmailValid) return "Email ID is not valid!";
    if(!isPasswordValid) return "Password is not valid!";
    if(!isName) return "Please provide a valid name!"


    return null;
    
}