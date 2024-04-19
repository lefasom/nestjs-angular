import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./features/list/list.routes').then(m => m.LIST_ROUTES),
        pathMatch: 'full'

    },
    {
        path: 'form',
        loadChildren: () => import('./features/form/form.routes').then(m => m.FORM_ROUTES),
    },
    {
        path: 'detail',
        loadChildren: () => import('./features/detail/detail.routes').then(m => m.DETAIL_ROUTES),
    },
    {
        path: 'login',
        loadChildren: () => import('./features/login/login.routes').then(m => m.LOGIN_ROUTES),
    },
    {
        path: 'signal',
        loadChildren: () => import('./features/signal/signal.routes').then(m => m.SIGNAL_ROUTES),
    },
    {
        path: 'cart',
        loadChildren: () => import('./features/cartProduct/cart.routes').then(m => m.CART_ROUTES),
    },   {
        path: 'cart2',
        loadChildren: () => import('./features/cartProduct2/cart2.routes').then(m => m.CART2_ROUTES),
    },
];