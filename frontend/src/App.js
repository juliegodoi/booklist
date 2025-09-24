import { Routes, Route, Link } from 'react-router-dom';
import BookList from './pages/BookList';
import BookCreate from './pages/BookCreate';
import BookEdit from './pages/BookEdit';

function App() {
    return (
        <div className="app-root">
            <header className="app-header">
                <div className="container">
                    <h1>Booklist</h1>
                    <p>Gerencie sua biblioteca pessoal</p>
                </div>
            </header>

            <main className="container">
                <Routes>
                    <Route path="/" element={<BookList />} />
                    <Route path="/novo" element={<BookCreate />} />
                    <Route path="/editar/:id" element={<BookEdit />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
