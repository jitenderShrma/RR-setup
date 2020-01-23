const validator = require('validator');
const isEmpty = require('./isEmpty');
export default function validateRegisterInput(input){
  let errors={};
  input.firstName =!isEmpty(input.firstName)?input.firstName:'';
  input.lastName =!isEmpty(input.lastName)?input.lastName:'';
  input.email =!isEmpty(input.email)?input.email:'';
  input.password =!isEmpty(input.password)?input.password:'';
  input.conformPassword =!isEmpty(input.conformPassword)?input.conformPassword:'';
  if(!validator.isLength(input.firstName,{ min:2, max: 10 })){
    errors.firstName = 'First name must be between 2 to 10 charactor';
  }
  if(validator.isEmpty(input.firstName)){
    errors.firstName = 'First name required';
  }
  if(!validator.isLength(input.lastName,{ min:2, max: 10 })){
    errors.lastName = 'Lastt name must be between 2 to 10 charactor';
  }
  if(validator.isEmpty(input.lastName)){
    errors.lastName = 'Last name required';
  }
  
  if(!validator.isEmail(input.email)){
    errors.email = 'invalid email';
  }
  if(validator.isEmpty(input.email)){
    errors.email = 'email required';
  }
  if(!validator.isLength(input.password, {min:4, max:30})){
    errors.password = 'password must be b/w 4 to 30 charactors';
  }
  if(validator.isEmpty(input.password)){
    errors.password = 'password required';
  }
  
  if(validator.isEmpty(input.conformPassword)){
    errors.conformPassword = 'conform password required';
  }
 if(!validator.equals(input.password,input.conformPassword)){
  errors.conformPassword = 'password not match';
  }
  return {
    errors,
    isValid:isEmpty(errors)
  };
}