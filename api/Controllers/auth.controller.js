import User from "../Models/user.model.js";
import {generateTokenAndSetCookie} from "../Utilities/generateTokenAndSetCookie.js"
import bcryptjs from 'bcryptjs';
import { sendVerficationEmail } from "../Mailtrap/emails.js";


// Signup function
export const signup = async (req, res) => {
    const { email, password, Fname, Lname, phone, birthDate, gender } = req.body; // Extracting all fields
    try {
        // dapat tnan fields naa input
        if ( !email || !password || !Fname || !Lname || !birthDate || !gender) {
            throw new Error("All fields are required");
        }

        // Check if ga exist na ang user
        const userAlreadyExists = await User.findOne({ email });
        if (userAlreadyExists) {
            return res.status(409).json({ success: false, message: "Balik2 og email, lahi nasad" });
        }

        // Hash password
        const hashedPassword = await bcryptjs.hash(password, 10);
        
        // Generate OTP verification token (1-6 rne sha)
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();
        
        // Create new user instance gikan dadto sa schema
        const user = new User({
            email,
            phone,
            password: hashedPassword,
            Fname,
            Lname,
            birthDate,
            gender,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
        });

        // Save the user sa database
        await user.save();

        // Generate JWT and set cookie
        generateTokenAndSetCookie(res, user._id);

        //function para send og otp sa email
        await sendVerficationEmail(user.email,verificationToken);

        // Return success response
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user: {
                ...user._doc,
                password: undefined // butang og undefined kung d nahan ma output ang result (sa postman rne kai)
            }
        });
        
    } catch (error) {
        res.status(400).json({ success: false, message: error.message }); 
    }
};

// Login and logout functions
export const login = async (req, res) => {
    res.send("login route");
};

export const logout = async (req, res) => {
    res.send("logout route");
};
