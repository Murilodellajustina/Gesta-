import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function telaInicial() {
    const [nome, setNome] = useState("");
    const [erro, setErro] = useState("");
    const navigate = useNavigate();

    const animacaoTitulo = `
            @keyframes correrGradiente {
            0% { background-position: 0% 50%;}
            50% { background-position: 100% 50%;}
            100% { background-position: 0% 50%; }} 
        `;

    return (
        <>
            <style>{animacaoTitulo}</style>
            <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light"

                style={{
                    backgroundColor: '#11998e',
                    overflowX: 'hidden'
                }}

            >
                <div className="text-center">
                    <h1 className="mb-4" style={{
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: '700',
                        backgroundImage: 'linear-gradient(to right, #f703ff, #f189ff, #fca9dc, #ff009d)',
                        backgroundSize: '250% auto',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        color: 'transparent',
                        animation: 'correrGradiente 6s linear infinite'
                    }}>
                        Bem-vindo ao GESTA+
                    </h1>
                </div>
            </div>
        </>

    );
}