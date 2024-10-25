import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Load environment variables from the .env file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') }); // Specific path sa .env ambot ngano dmo gana og wala nga root file namn


export const mailtrapClient = new MailtrapClient({ 
    endpoint: process.env.MAILTRAP_ENDPOINT, 
    token: process.env.MAILTRAP_TOKEN
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "STUDYHUB",
};


