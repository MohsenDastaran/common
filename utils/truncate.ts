export const truncate = (str: string, max: number): string => {
	if (str) {
		return str.length > max ? str.substring(0, max - 1) + "…" : str;
	} else return str;
};
