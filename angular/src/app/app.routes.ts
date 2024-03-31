import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/list/list.routes').then(m => m.LIST_ROUTES),
    },
    {
        path: 'form',
        loadChildren: () => import('./pages/form/form.routes').then(m => m.FORM_ROUTES),
    }
];