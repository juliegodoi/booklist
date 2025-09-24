import React from 'react';

export default function BookCard({ book, onEdit, onDelete }) {
    return (
        <div className="book-card">
            <div className="card-header">
                <h3 className="card-title">{book.titulo}</h3>
                <span className="badge">{book.anoPublicacao}</span>
            </div>

            <p className="card-author">{book.autor}</p>

            <p className="card-desc">{book.descricao}</p>

            <div className="card-bottom">
                <small className="cadastro">Cadastrado em {new Date(book.dataCadastro).toLocaleDateString()}</small>

                <div className="card-actions">
                    <button className="btn-icon" onClick={onEdit} title="Editar">✎</button>
                    <button className="btn-icon btn-danger" onClick={onDelete} title="Excluir">🗑</button>
                </div>
            </div>
        </div>
    );
}
