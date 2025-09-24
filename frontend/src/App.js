import { Routes, Route, Link } from 'react-router-dom';
import BookList from './pages/BookList';
import BookCreate from './pages/BookCreate';
import BookEdit from './pages/BookEdit';

function App() {
    return (
        <div className="app-root">
            <header className="app-header">
                <div className="container">
                    <h1>Gerenciamento de Livros</h1>
                    <p>Cadastre, edite e gerencie sua biblioteca pessoal</p>
                </div>
            </header>

            <main className="container">
                <Routes>
                    <Route path="/" element={<BookList />} />
                    <Route path="/novo" element={<BookCreate />} />
                    <Route path="/editar/:id" element={<BookEdit />} />
                </Routes>
            </main>

            <footer className="footer">
                <div className="container">
                    <Link to="/">Home</Link>
                </div>
            </footer>
        </div>
    );
}

export default App;
