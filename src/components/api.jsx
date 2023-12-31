class ServerRequest {
  async register(nombre, correo, contraseña) {
    try {
      const response = await fetch("https://www.arri.online/api/arri/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, correo, contraseña }),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error en la solicitud de registro:", error);
      throw error;
    }
  }

  async login(correo, contraseña) {
    try {
      const response = await fetch("https://www.arri.online/api/arri/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ correo, contraseña }),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error en la solicitud de inicio de sesión:", error);
      throw error;
    }
  }

  async getInstituciones() {
    try {
      const response = await fetch(
        "https://www.arri.online/api/arri/instituciones",
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error en la solicitud de obtener instituciones:", error);
      throw error;
    }
  }

  async load(institucion) {
    try {
      const response = await fetch("https://www.arri.online/api/arri/load", {
        method: "POST",
        headers: {
          "x-access-token": localStorage.getItem("token"),
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ institucion: institucion.label }),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error en la solicitud de carga:", error);
      throw error;
    }
  }

  async instiUser() {
    try {
      const response = await fetch("https://www.arri.online/api/arri/instiUser", {
        method: "POST",
        headers: {
          "x-access-token": localStorage.getItem("token"),
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error en la solicitud de carga:", error);
      throw error;
    }
  }

  async estadisticas(institucion) {
    try {
      const response = await fetch("https://www.arri.online/api/arri/estadisticas", {
        method: "POST",
        headers: {
          "x-access-token": localStorage.getItem("token"),
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ institucion: institucion.selectedItemData.label }),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error en la solicitud de carga:", error);
      throw error;
    }
  }
}

export default ServerRequest;
