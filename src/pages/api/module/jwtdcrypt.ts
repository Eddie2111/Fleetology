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
        const decoded = jwt.verify(token, secret);
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
