import { useEffect, useState } from "react";
import {
    getLivros,
    criarLivro,
    atualizarLivro,
    removerLivro,
} from "./services/api";
import LivroForm from "./components/LivroForm";
import LivroList from "./components/LivroList";

export default function App() {
    const [livros, setLivros] = useState([]);
    const [livroEditando, setLivroEditando] = useState(null);

    useEffect(() => {
        carregarLivros();
    }, []);

    async function carregarLivros() {
        const data = await getLivros();
        setLivros(data);
    }

    async function salvarLivro(livro) {
        if (livroEditando) {
            const atualizado = await atualizarLivro(livroEditando.id, livro);
            setLivros(livros.map((l) => (l.id === atualizado.id ? atualizado : l)));
            setLivroEditando(null);
        } else {
            const novo = await criarLivro(livro);
            setLivros([...livros, novo]);
        }
    }

    async function deletarLivro(id) {
        await removerLivro(id);
        setLivros(livros.filter((l) => l.id !== id));
    }

    return (
        <div>
            <h1>CRUD de Livros</h1>
            <LivroForm onSalvar={salvarLivro} livroEditando={livroEditando} />
            <LivroList
                livros={livros}
                onEditar={setLivroEditando}
                onRemover={deletarLivro}
            />
        </div>
    );
}
