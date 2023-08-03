const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

interface decoded{
    serial: string
    email: string
    user_type: string
}
type Itoken = string

// decrypt the token and return the data
export const decrypt = (token: Itoken): decoded => {
    try{
        const decoded = jwt.verify(token, "t4!3tu@08$9guj90df.bikf0d-kl|940werjf983*2h0^f0732h`nnn8b3f-80uewjn89j.0t23*89gr7geo327%8y74");
        return decoded;
    }
    catch(err){
        console.log(err);
        return {
            serial: ' ',
            email: ' ',
            user_type: ' '
        };
    }
}
