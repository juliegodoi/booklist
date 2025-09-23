export default function LivroList({ livros, onEditar, onRemover }) {
    return (
        <ul>
            {livros.map((livro) => (
                <li key={livro.id}>
                    {livro.titulo} - {livro.autor}
                    <button onClick={() => onEditar(livro)}>Editar</button>
                    <button onClick={() => onRemover(livro.id)}>Remover</button>
                </li>
            ))}
        </ul>
    );
}
