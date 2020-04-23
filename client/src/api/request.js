class Request {
  async post(endpoint, data, responseType = "json") {
    try {
      // Si la petición es de un formdata, elimino las cabeceras
      if (data instanceof FormData) {
        this.headersArray.delete("Accept");
        this.headersArray.delete("Content-Type");
      }

      const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Realizamos la solicitud
      // let response = await fetch(endpoint, params);

      await fetch(endpoint, params).then((response) => {return response});
      
    //   fecth('http://miservidor.com/recurso')
    // .then((response) => {
    //     return response.json()
    // })
    //   return response;

    } catch (error) {
      // Rechazamos la solicitud.
      return error;
    }
  }
}

export default Request;
