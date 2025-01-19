export const objectMap = (obj: any, callback: any) => {
	let result: any = [];
	Object.keys(obj).forEach(async function (key, index) {
		result[index] = await callback.call(obj, obj[key], key, obj);
	});
	return result;
};
