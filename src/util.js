/** 
 *  生成用户token
 * @param {number} token 长度，默认为12字符
 * @returns token 字符串
 */
const generateUserToken=(leng = 24)=>{
	let char = "ABCDEFGHIJKLMNOPQRSTUVWXWZabcdefjhijklmnopqrstyvwxyz0123456789";
	let token = "";
	
	for(let i=0; i<leng; i++){
		token += char.charAt(parseInt(Math.random() * (char.length)));
	}
	return token;
}

exports.generateUserToken = generateUserToken;