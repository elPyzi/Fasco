import { RouteObject } from 'react-router-dom';

import Homepage from './pages/HomePage';
import Signin from './pages/Authentication/Signin';
import NotFoundPage from './pages/NotFoundPage';
import Signup from './pages/Authentication/Signup';
import ShopPage from './pages/shop/ShopPage';
import ProductPage from './pages/shop/ProductPage';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Homepage />,
    },
    {
        path: 'signin',
        element: <Signin />,
    },
    {
        path: 'signup',
        element: <Signup />,
    },
    {
        path: 'shop-page',
        element: <ShopPage />,
        children: [
            {
                path: 'product-page',
                element: <ProductPage />,
            },
        ],
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
];

export default routes;
