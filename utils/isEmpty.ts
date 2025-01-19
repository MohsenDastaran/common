export const isEmpty = (value: any): boolean => {
	if (value == null || value == undefined) return true; // Handles null and undefined
	if (typeof value === "string" || Array.isArray(value)) return value.length === 0;
	if (typeof value === "object") {
		if (value instanceof Map || value instanceof Set) return value.size === 0;
		return Object.keys(value).length === 0;
	}

	return false; // Default case for other types (e.g., functions)
};
