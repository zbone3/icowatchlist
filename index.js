const axios = require ('axios');

let baseUrl = 'https://api.icowatchlist.com/public/v1/'

let ICOWatchlist = {
	getAll: async function() {
		let response, path;
		return await createRequest('');
	},
	getLive: async function() {
		let response, path;
		return await createRequest('live');
	},
	getUpcoming: async function() {
		let response, path;
		return await createRequest('upcoming');
	},
	getFinished: async function() {
		let response, path;
		return await createRequest('finished');
	}
}

let createRequest = async function(methodName) {
	try {
		let url = baseUrl + methodName;
		let response = await sendRequest(url);
		let path = 'ico.' + methodName;
		return await handleResponse(response, path);
	} catch(e) {
		throw('Error on ' + arguments.callee.name + ':' + e);
	}
}

let handleResponse = async function(data, path){
	try {
		let response = data;
		path.split('.').forEach(function(item){
			if (item){
				response = response[item];
			}
		})
		return response;
	} catch(e) {
		throw('Error on ' + arguments.callee.name + ':' + e);
	}
}


let sendRequest = async function(url){
	try {
		let config = {
			timeout: 5000
		};

		let response = await axios.get(url, config);
		if (response.status == 200) {
			return response.data;
		} else {
			throw('Error on API request: ' + response);
		}
	} catch (e) {
		throw('Error on ' + arguments.callee.name + ':' + e);
	}
}


module.exports = ICOWatchlist;