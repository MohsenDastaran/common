export const generateUUID = (length: number = 16): string => {
	const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const firstChar = letters[Math.floor(Math.random() * letters.length)];
	const randomPart = Array.from(
		{ length: length - 1 },
		() => Math.random().toString(36)[2] || "0"
	).join("");
	return firstChar + randomPart;
};
