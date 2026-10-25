import { useState } from "react";


export async function login(email, senha) {

    const response = await fetch(
        "http://localhost:8000/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                senha
            })
        }
    );

    if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("usuario_id", data.usuario.id);
        return data;
    } else {
        const erro = await response.json();
        throw new Error(erro.detail);
    }

}

export async function cadastrarUsuario(nome, telefone, IdadeGestacional, email, senha) {

    const response = await fetch(
        "http://localhost:8000/cadastro",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome,
                telefone,
                IdadeGestacional,
                email,
                senha
            })
        }
    );

    if (!response.ok) {
        const erro = await response.json();
        throw new Error(erro.detail);
    }

    return response.json();
}

export async function buscarPerfilUsuario() {
    const token = localStorage.getItem("token");
    const usuarioId = localStorage.getItem("usuario_id");

    if (!token || !usuarioId) {
        throw new Error("Usuário não autenticado");
    }

    const response = await fetch(`http://localhost:8000/usuarios/${usuarioId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` 
        }
    });

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error("Erro ao buscar dados do usuário");
    }
}
