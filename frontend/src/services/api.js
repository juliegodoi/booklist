const API_BASE = 'http://localhost:4000/api/livros';

export async function getLivros() {
    const res = await fetch(API_BASE);
    return res.json();
}

export async function getLivro(id) {
    const res = await fetch(`${API_BASE}/${id}`);
    if (!res.ok) throw new Error('Livro não encontrado');
    return res.json();
}

export async function criarLivro(payload) {
    const res = await fetch(API_BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    return res.json();
}

export async function atualizarLivro(id, payload) {
    const res = await fetch(`${API_BASE}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    return res.json();
}

export async function removerLivro(id) {
    await fetch(`${API_BASE}/${id}`, { method: 'DELETE' });
}
