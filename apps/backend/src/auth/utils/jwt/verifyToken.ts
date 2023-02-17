const jwt = require('jsonwebtoken');

export const verifyToken = (token: string) => {
    return jwt.verify(token, process.env['SECRET_KEY'], (error, decoded) => {
        if (error?.message) {
            throw new Error(error.message);
        }
        return decoded;
    });
}