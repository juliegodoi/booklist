const API_URL = "http://localhost:4000/api/livros";

export async function getLivros() {
    const res = await fetch(API_URL);
    return res.json();
}

export async function criarLivro(livro) {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(livro),
    });
    return res.json();
}

export async function atualizarLivro(id, livro) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(livro),
    });
    return res.json();
}

export async function removerLivro(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
