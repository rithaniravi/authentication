
function validation(values){
    let errors={};
    const email_pattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/
   
    if(!values.email === ""){
        errors.email="email is required"
    }
    else if(!email_pattern.test(values.email)){
        errors.email = "Invalid email"
    }
    if(values.confirmpassword !== values.password){
        errors.confirmpassword="password is not match"
    }

    return errors;


  
}

export default validation;