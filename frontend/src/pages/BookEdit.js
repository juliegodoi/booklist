import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getLivro, atualizarLivro } from '../services/api';

export default function BookEdit() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function load() {
            try {
                const data = await getLivro(id);
                setBook(data);
            } catch (err) {
                alert('Erro ao carregar livro.');
                navigate('/');
            }
        }
        load();
    }, [id, navigate]);

    if (!book) return <p>Carregando...</p>;

    async function handleSubmit(e) {
        e.preventDefault();
        if (!book.titulo || !book.autor || !book.anoPublicacao) {
            alert('Preencha título, autor e ano de publicação.');
            return;
        }
        await atualizarLivro(id, book);
        navigate('/');
    }

    return (
        <div className="form-container">
            <h2>Editar Livro</h2>
            <form onSubmit={handleSubmit} className="form-card">
                <label>Título *</label>
                <input value={book.titulo} onChange={(e) => setBook({ ...book, titulo: e.target.value })} required />

                <label>Autor *</label>
                <input value={book.autor} onChange={(e) => setBook({ ...book, autor: e.target.value })} required />

                <label>Ano de Publicação *</label>
                <input type="number" value={book.anoPublicacao} onChange={(e) => setBook({ ...book, anoPublicacao: e.target.value })} required />

                <label>Descrição</label>
                <textarea value={book.descricao} onChange={(e) => setBook({ ...book, descricao: e.target.value })} />

                <div className="form-actions">
                    <button type="button" className="btn-secondary" onClick={() => navigate('/')}>Cancelar</button>
                    <button type="submit" className="btn-primary">Atualizar</button>
                </div>
            </form>
        </div>
    );
}
