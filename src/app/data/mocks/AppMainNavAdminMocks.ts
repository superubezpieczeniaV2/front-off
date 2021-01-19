import { AppMainNavbarAdmin } from "../interfaces/AppMainNavbarAdmin";

export const APPMAINNAVADMINMOCKS: AppMainNavbarAdmin[] = [
    {
        name: 'Panel',
        linkTo: '/admin'
    },
    {
        name: 'Logowanie akcji',
        linkTo: '/admin/logs'
    },
    {
        name: 'Wyloguj się',
        linkTo: '/logout'
    }
]