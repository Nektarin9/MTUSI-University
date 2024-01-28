export function removeNumbers(str) {
	let result = "";
	for (let i = 0; i < str.length; i++) {
		if (isNaN(str[i])) {
			result = result + str[i];
		}
	}
	return result;
}
