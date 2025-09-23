import { useState, useEffect } from "react";

export default function LivroForm({ onSalvar, livroEditando }) {
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");

    useEffect(() => {
        if (livroEditando) {
            setTitulo(livroEditando.titulo);
            setAutor(livroEditando.autor);
        }
    }, [livroEditando]);

    function handleSubmit(e) {
        e.preventDefault();
        onSalvar({ titulo, autor });
        setTitulo("");
        setAutor("");
    }

    return (
        <form onSubmit={handleSubmit} className="p-3">
            <input
                type="text"
                placeholder="Título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
            />
            <input
                type="text"
                placeholder="Autor"
                value={autor}
                onChange={(e) => setAutor(e.target.value)}
            />
            <button type="submit">{livroEditando ? "Atualizar" : "Adicionar"}</button>
        </form>
    );
}
