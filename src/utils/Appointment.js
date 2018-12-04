const cors = "https://cors-anywhere.herokuapp.com/";
const baseUrl = "http://si-appointment.herokuapp.com/api";

export const Appointment = {
	getAllPasien() {
	return fetch(`${cors}${baseUrl}/1/getAllPasien`,{
		method: 'GET'
	})
	.then(response => {
		console.log(response)
		return response.json()
	})
	.then(jsonResponse => {
		console.log(jsonResponse)
		return jsonResponse
	})
	},
	getDetailPasien(idPasien) {
return fetch(`${cors}${baseUrl}/getPasien/${idPasien}`,{
		method: 'GET'
	})
	.then(response => {
		console.log(response)
		return response.json()
	})
	.then(jsonResponse => {
		console.log(jsonResponse)
		return jsonResponse
	})
	},
	updateStatusPasien(requestBody) {
return fetch(`${cors}${baseUrl}/1/updatePasien`,{
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(requestBody)
	})
	.then(response => {
		console.log(response)
		return response.json()
	})
	.then(jsonResponse => {
		console.log(jsonResponse)
		return jsonResponse
	})
	},
	getAllDokter() {

		return fetch(`${cors}${baseUrl}/1/getAllDokter`, {
			method:'GET',
		})
		.then(response =>{
			return response.json()
		})
		.then(jsonResponse =>{
			return jsonResponse
		})
},
	
}