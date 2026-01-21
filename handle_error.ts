

import { format } from 'date-fns'
import nodemailer from 'nodemailer'
import { EMAIL_SMTP_HOST, EMAIL_SMTP_PORT, EMAIL_SMTP_SSL, EMAIL_SMTP_USERNAME, EMAIL_SMTP_PASSWORD, EMAIL_OF_ADMIN, EMAIL_SMTP_REPLYTOEMAIL } from './utils.js'





const email_client = (
	!EMAIL_SMTP_HOST || !EMAIL_SMTP_PORT || !EMAIL_SMTP_SSL || !EMAIL_SMTP_USERNAME || !EMAIL_SMTP_PASSWORD || !EMAIL_SMTP_REPLYTOEMAIL || !EMAIL_OF_ADMIN
	? 
		null
	: 
		nodemailer.createTransport({
			host: EMAIL_SMTP_HOST, 
			port: EMAIL_SMTP_PORT, 
			secure: EMAIL_SMTP_SSL, 
			auth: {
				user: EMAIL_SMTP_USERNAME, 
				pass: EMAIL_SMTP_PASSWORD, 
			}
		})

)

export async function send_email(subject, text, error) {

	// Dont send email in development mode
	if(process.env.NODE_ENV === 'dev') return

	if(!email_client) {
		log__error('Some email credential(s) is/are missing, therefore no email is send.\n', error)
		return 
	}

	try {

		log__error('Sending email.')

		await email_client.sendMail({
			from: `"Wuerflii Server" <${EMAIL_SMTP_REPLYTOEMAIL}>`, 
			to: EMAIL_OF_ADMIN, 
			subject: `Wuerflii - ${subject}`, 
			text: `${text}\n${error}\n\n\nTimestamp: ${get_current_timestamp()}`, 
		})

		log__error('Done')

	} catch(err) {
		log__error('Some error occured during sending email:\n', err)
	}

}

function get_current_timestamp() { return format(new Date(), 'HH:mm.ss dd.MM.yyyy') }
function get_current_timestamp_format() { return `[ ${get_current_timestamp()} ]\t` }

export function log__error(text) { console.error(get_current_timestamp_format(), text) }
export function log__info(text) { console.log(get_current_timestamp_format(), text) }





export async function handle_error(res, error, api_url) {

	res.sendStatus(500)

	log__error(`Server encountered an unhandled error. ${error}`)

	await send_email(
		'Unhandled server error', 
		`Server encountered an unhandled error.\nAPI URL: ${api_url}`, 
		error, 
	)

}
