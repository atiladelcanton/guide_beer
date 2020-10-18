import axios from 'axios';

const standard = axios.create({
	baseURL: 'https://api.punkapi.com/',
	timeout:    100000,
	transformResponse:[
		function (data){
			return data;
		}
	]
});

export default	standard;