import { mailtrapClient, sender } from "./mailtrap.config.js"; 

export const sendVerficationEmail = async (email, verificationToken) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender, 
            to: recipient,
            subject: "User Verification",
            text: `Your verification code is: ${verificationToken}`, 
            category: "OTP"
        });

        console.log("na send na ang email boss", response);
    } catch (error) {
        console.error(`Error: wa sha na send`, error);
        throw new Error(`Error: wa sha na send: ${error}`);
    }
};
