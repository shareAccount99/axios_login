import axios from "axios";

const BASE_URL = "http://3.39.223.65:8080";


export default {
  name: "apiLogin",
  submitForm: async function(id, pwd) {
    axios.post(BASE_URL+'/user/login',
    	{ "userEmail": id,
        "userPassword": pwd}
    ).then(response => { 
        //session setting
        this.$session.set('authorization', response.headers.authorization)
        console.log(response)
        console.log("success")
       return response
    }).catch((ex) => {
        console.log("error")
    	return ex
    })
},

name: "diary",
selectDiary: async function() {
    const authorization = this.$session.get('authorization')
    const axiosToken = axios.create({
        baseURL: BASE_URL,
        headers: {
          Authorization: authorization, // header의 속성
        },  
      });
    console.log(token)
    axiosToken.get(BASE_URL+'/diary'
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


