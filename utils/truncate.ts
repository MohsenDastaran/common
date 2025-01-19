export const truncate = (str: string, max: number): string =>
	str.length > max ? str.substring(0, max - 1) + "…" : str;
