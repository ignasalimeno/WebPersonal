import { Component } from "react";
import LoginAPI from "../../api/user";

export default class LoginFn extends Component {
  constructor(props) {
    super(props);

    // Estado inicial
    this.state = {
      // Nombre del usuario
      username: "",

      // Contraseña
      password: "",
    };

    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  changeUsername(event) {
    try {
      const { value } = event.target;
      // Validamos el argumento requerido
      if (typeof value !== "string")
        throw new TypeError("username expected a string, received: " + value);

      // Actualizamos el nombre del campo.
      this.setState({ username: event.target.value });

      return true;
    } catch (error) {
      // console.log( error );

      return false;
    }
  }

  changePassword(event) {
    try {
      const { value } = event.target;
      // Validamos el argumento requerido
      if (typeof value !== "string")
        throw new TypeError("password expected a string, received: " + value);

      // Actualizamos el nombre del campo.
      this.setState({ password: event.target.value });

      return true;
    } catch (error) {
      // console.log( error );

      return false;
    }
  }

  async login() {
    try {
      const { username, password } = this.state;
      // console.log(this.state);
      const params = {
        username: username,
        password: password,
      };

      const response = await LoginAPI(params);
      console.log(response.status);

      if (response.status == 200) {
          alert("Bienvenido");
      } else {
          alert("Error al ingresar. Verifique usuario y contraseña")
      }
    } catch (error) {
      return false;
    }
  }
}
