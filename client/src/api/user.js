import { BASE_PATH } from "./config";
import Request from './request';

export default async function LoginAPI(data) {
  const url = `${BASE_PATH}/api/login`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

   // Instanciamos la request
   const requester = new Request();

   // Respuesta
   return await requester.post( url, data );   

}


