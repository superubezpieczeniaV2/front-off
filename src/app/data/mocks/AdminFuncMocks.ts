import { AdminFunctionalities } from "../interfaces/AdminFunctionalities";

export const ADMINFUNCTIONALITIES: AdminFunctionalities[] = [
    { 
        name: 'Rodzaje ubezpieczeń',
        description: 'Baza typów ubezpieczeń / OC / AC ...',
        link: 'addtypeinsurance'
    },
    { 
        name: 'Moce silnika',
        description: 'Baza mocy silnika',
        link: '/admin/enginepower'
    },
    { 
        name: 'Przeznaczenie',
        description: 'Baza kategorii wykorzystania auta',
        link: '/admin/methoduse'
    },
    { 
        name: 'Marki samochodów',
        description: 'Baza marek',
        link: '/admin/marks'
    },
    { 
        name: 'Modele samochodów',
        description: 'Baza modeli',
        link: '/admin/models'
    },
    { 
        name: 'Miejsce parkingowe',
        description: 'Baza rodzajów miejsc parkingowych',
        link: '/admin/parkingplace'
    },
    { 
        name: 'Rodzaj właściciela',
        description: 'Baza typów właściciela',
        link: '/admin/typeowner'
    }
]