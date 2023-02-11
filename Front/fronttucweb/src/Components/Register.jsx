import React, { useState } from "react";
import { register } from "../service/apiCall";
import "../Css/Registro.css"


const Register = () => {
    const [formValues, setFormValues] = useState({
        empresa: "",
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const saveUser = () => {
            register(formValues).then(() => {
                console.log("¡Registrado!");
            }).catch((error) => alert("Error al registrar"));
        }
        saveUser();
    }

    return (
        <div className="reglog">
            <div className="contenedorr">
                <div className="cardd">
                    <div >
                        <h4> REGISTRARSE </h4>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>
                                    <b> Empresa </b>
                                </label>
                                <input
                                    className="form-control"
                                    placeholder="Alma dulce"
                                    type="text"
                                    name="empresa"
                                    value={formValues.empresa}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label>
                                    <b> Email </b>
                                </label>
                                <input
                                    className="form-control"
                                    type="email"
                                    placeholder="almad@example.com"
                                    name="email"
                                    value={formValues.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label>
                                    <b> Contraseña </b>
                                </label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    placeholder="1234"
                                    valuer={formValues.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <button className="btnr"> Registrarse </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register; 