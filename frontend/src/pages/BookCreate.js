import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { criarLivro } from '../services/api';

export default function BookCreate() {
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [anoPublicacao, setAnoPublicacao] = useState(new Date().getFullYear());
    const [descricao, setDescricao] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        if (!titulo || !autor || !anoPublicacao) {
            alert('Preencha título, autor e ano de publicação.');
            return;
        }
        await criarLivro({ titulo, autor, descricao, anoPublicacao });
        navigate('/');
    }

    return (
        <div className="form-container">
            <h2>Cadastrar Novo Livro</h2>
            <form onSubmit={handleSubmit} className="form-card">
                <label>Título *</label>
                <input value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Digite o título do livro" required />

                <label>Autor *</label>
                <input value={autor} onChange={(e) => setAutor(e.target.value)} placeholder="Digite o nome do autor" required />

                <label>Ano de Publicação *</label>
                <input type="number" value={anoPublicacao} onChange={(e) => setAnoPublicacao(e.target.value)} required />

                <label>Descrição</label>
                <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Digite uma breve descrição do livro (opcional)"></textarea>

                <div className="form-actions">
                    <button type="button" className="btn-secondary" onClick={() => navigate('/')}>Cancelar</button>
                    <button type="submit" className="btn-primary">Cadastrar</button>
                </div>
            </form>
        </div>
    );
}
