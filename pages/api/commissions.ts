import { NextApiRequest, NextApiResponse } from "next";
import { FormValues } from "app/commissions/(components)/CommissionsForm";
import { SMTPClient, Message } from "emailjs";

/**
 * Sends an email using the emailjs library.
 * @param message The email message to send.
 */
const sendEmail = async (message: Message) => {
    const client = new SMTPClient({
        user: process.env.EMAIL_USER,
        password: process.env.EMAIL_PASSWORD,
        host: process.env.EMAIL_HOST,
        tls: true,
        port: 587,
        timeout: 10000,
        domain: process.env.EMAIL_DOMAIN,
    });

    await new Promise((resolve, reject) =>
        client.send(message, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log(info);
                resolve(info);
            }
        })
    );
};

/**
 * Sends an email confirmation to the user who submitted the form.
 * @param data The data from the form submission.
 */
const sendEmailConfirmation = async (data: FormValues) => {
    const { name, email, size, quality, message } = data;

    const emailMessage = new Message({
        text: `Name: ${name} \nEmail: ${email} \nSize: ${size} \nQuality: ${quality} \nMessage: ${message}`,
        from: process.env.EMAIL_FROM as string,
        to: email,
        subject: "Thank you for your commission submission!",
        attachment: [{ data: createEmailConfirmationBody(data), alternative: true }],
    });

    await sendEmail(emailMessage);
};

/**
 * Sends an email notification to Mollsketches.
 * @param data The data from the form submission.
 */
const sendNotificationEmail = async (data: FormValues) => {
    const { name, email, size, quality, message } = data;

    const emailMessage = new Message({
        text: `Name: ${name} \nEmail: ${email} \nSize: ${size} \nQuality: ${quality} \nMessage: ${message}`,
        from: process.env.EMAIL_FROM as string,
        to: process.env.EMAIL_TO as string,
        subject: "New commissions form submission!",
        attachment: [{ data: createNotificationEmailBody(data), alternative: true }],
    });

    await sendEmail(emailMessage);
};

/**
 * Handles the POST request to the commissions API.
 * @param req NextApiRequest
 * @param res NextApiResponse
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = req.body as FormValues;

    await sendEmailConfirmation(data);
    await sendNotificationEmail(data);

    res.status(200).send({
        message: "Email sent",
    });
};

export default handler;

// Get the date and time of submission
const DATE_SUBMITTED = new Date().toLocaleString();

// Profile picture URL for the email
const PROFILE_PIC = process.env.EMAIL_PROFILE_PIC;

/**
 * Creates the HTML body for the email confirmation.
 * @param data The data from the form submission.
 * @returns The HTML body for the email confirmation.
 */
const createEmailConfirmationBody = ({ name, email, size, quality, message }: FormValues) =>
    `
        <img height="96px" width="96px" src="${PROFILE_PIC}"></img><h1>Mollsketches</h1>
        <p>Hello there!<br><br>Thank you for filling out the commissions form with the details below:</p><ul>
        <li><b>Date submitted:</b> ${DATE_SUBMITTED}</li>
        <li><b>Name and preferred pronouns:</b> ${name}</li>
        <li><b>Contact email:</b> ${email}</li>
        <li><b>Size:</b> ${size}</li>
        <li><b>Quality:</b> ${quality}</li>
        <li><b>Brief description:</b> ${message}</li>
        </ul><p>If something doesn\'t look right, you can contact us here: <a href="mailto:contact@mollsketches.art">contact@mollsketches.art</a><br>Mollsketches will get back to you soon!<br><br>From,<br>The Mollsketches Website</p><br><small>Automatically sent by magic...</small>
    `;

/**
 * Creates the HTML body for the email notification.
 * @param data The data from the form submission.
 * @returns The HTML body for the email notification.
 */
const createNotificationEmailBody = ({ name, email, size, quality, message }: FormValues) => `
        <img height="96px" width="96px" src="${PROFILE_PIC}"></img><h1>Mollsketches</h1>
        <p>Hey, Mollsketches!<br><br>Someone has filled out the commissions form:</p><ul>
        <li><b>Date submitted:</b> ${DATE_SUBMITTED}</li>
        <li><b>Name and preferred pronouns:</b> ${name}</li>
        <li><b>Contact email:</b> ${email}</li>
        <li><b>Size:</b> ${size}</li>
        <li><b>Quality:</b> ${quality}</li>
        <li><b>Brief description:</b> ${message}</li>
        </ul><p>From,<br>The Mollsketches Website</p><br><small>Automatically sent by magic...</small>
    `;
