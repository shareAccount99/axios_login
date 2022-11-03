import axios from "axios";

const BASE_URL = "http://3.39.223.65:8080";

export default {
  name: "apiLogin",
  submitForm: async function(id, pwd) {
    axios.post(BASE_URL+'/api/user/login',
    	{ "userEmail": id,
        "userPassword": pwd}
    ).then(response => { 
        console.log(response)
        console.log("success")
       return response
    }).catch((ex) => {
        console.log("error")
    	return ex
    })
}
};
