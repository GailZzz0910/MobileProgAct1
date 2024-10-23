import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn: "3d",
    });

res.cookie("token", token, {
    httpOnly: true, // cookie cannot be access by client side js also prevents attack called XSS
    secure: process.env.NODE_ENV === "production", // only accessible in production (https)
    sameSite: "strict", //prevents an attack called csrf
    maxAge: 3 * 24 * 60 * 60 * 1000,
});

return token

}
