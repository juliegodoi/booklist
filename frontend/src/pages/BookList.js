import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLivros, removerLivro } from '../services/api';
import BookCard from '../components/BookCard';

export default function BookList() {
    const [books, setBooks] = useState([]);
    const [q, setQ] = useState('');
    const navigate = useNavigate();

    useEffect(() => { carregar(); }, []);

    async function carregar() {
        const data = await getLivros();
        setBooks(data);
    }

    async function handleDelete(book) {
        if (!window.confirm(`Tem certeza que deseja excluir o livro "${book.titulo}"?`)) return;
        await removerLivro(book.id);
        await carregar();
    }

    const filtered = books.filter(b =>
        b.titulo.toLowerCase().includes(q.toLowerCase()) ||
        b.autor.toLowerCase().includes(q.toLowerCase())
    );

    return (
        <>
            <div className="list-actions">
                <input className="search" placeholder="Buscar por título ou autor..." value={q} onChange={(e) => setQ(e.target.value)} />
                <button className="btn-primary" onClick={() => navigate('/novo')}>+ Novo Livro</button>
            </div>

            <div className="book-grid">
                {filtered.length === 0 && <p>Nenhum livro encontrado.</p>}
                {filtered.map(book => (
                    <BookCard key={book.id} book={book} onEdit={() => navigate(`/editar/${book.id}`)} onDelete={() => handleDelete(book)} />
                ))}
            </div>
        </>
    );
}
