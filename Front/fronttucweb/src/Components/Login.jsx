
import React, { useState } from "react";
import { login } from "../service/apiCall";
import "../Css/Registro.css"


const Login = () => {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const getUser = () => {
            login(formValues).then(() => {
                console.log("Logueado existosamente");
            }).catch((error) => alert("Error al loguearse"));
        }
        getUser();
    }

    return (
        <div className="reglog">
            <div className="contenedorr">
                <div className="cardd">
                    <div>
                        <h4> INICIAR SESIÓN</h4>
                        <form onSubmit={handleSubmit}>
                            <div >
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
                            <div >
                                <label>
                                    <b> Contraseña </b>
                                </label>
                                <input
                                    className="form-control"
                                    type="password"
                                    placeholder="1234"
                                    name="password"
                                    value={formValues.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div >
                                <button className="btn"> Iniciar Sesión </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;