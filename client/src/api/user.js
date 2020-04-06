import {BASE_PATH} from "./config";


export default function signUpAPI(data) {
    const url = `${BASE_PATH}/api/sign-up`;
    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    };

    console.log(data);
    
    // fetch(url, params)
    //     .then(response => {

    //     });

}