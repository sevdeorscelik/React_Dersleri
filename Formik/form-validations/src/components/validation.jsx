import * as yup from 'yup'


//githubdan kopyaliyoruz. Asagidaki linkten
// https://github.com/jquense/yup

const validations = yup.object.shape({
    
    email: yup.string().email(),
    
  });

 
export default validations;