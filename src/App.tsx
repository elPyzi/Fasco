import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import routes from './routs';

const router = createBrowserRouter(routes);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
