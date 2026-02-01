

export class Custom__Handled_Error extends Error {
	public readonly status_code: 	number
	public readonly is_operational:	boolean

	constructor(
		message:		string, 
		status_code:	number,
	) {
		super(message)
		this.status_code = status_code
		this.is_operational = true

		Object.setPrototypeOf(this, Custom__Handled_Error.prototype)
		Error.captureStackTrace(this, this.constructor)
	}
}
