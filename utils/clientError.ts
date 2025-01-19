class CustomError extends Error {
	statusCode: number;

	constructor(statusCode: number, message: string) {
		super(message);

		this.statusCode = statusCode;
		// Ensure the correct prototype chain
		Object.setPrototypeOf(this, CustomError.prototype);
	}
}

export const clientError = {
	badRequest: (message: string) => {
		throw new CustomError(400, `Bad Request:  ${message}`);
	},
	accessDenied: (message: string) => {
		throw new CustomError(403, `Access Denied:  ${message}`);
	},
	notFound: (message: string) => {
		throw new CustomError(404, `Not Found:  ${message}`);
	},
};
