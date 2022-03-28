export const navbarData = [
    {
        routeLink: 'Inicio',
        icon: 'fal fa-home',
        label: 'Dashboard',
    },
    {
        routeLink: '',
        icon: 'fal fa-eye',
        label: 'Views',
        icons:'fal fa-caret-down',
        submenuLevel1: [
            {
                routeLink: 'Categorias',
                icon: 'fal fa-tags', // icon if needed
                label: 'Categories',
            }
        ]
    },
    {
        routeLink: '',
        icon: 'fal fa-user',
        label: 'Users',
        icons:'fal fa-caret-down',
        submenuLevel1: [
            {
                routeLink: 'Roles',
                icon: 'fal fa-user-circle', // icon if needed
                label: 'Rols',
            },
            {
                routeLink: 'Users',
                icon: 'fal fa-user', // icon if needed
                label: 'Users',
            }
        ]
    },
    {
        routeLink: '',
        icon: 'fal fa-user-circle',
        label: 'Accounts',
        icons:'fal fa-caret-down',
        submenuLevel1: [
            {
                routeLink: 'Registro',
                icon: 'fal fa-user', // icon if needed
                label: 'Register',
            },
            {
                routeLink: '',
                icon: 'fal fa-door-open', // icon if needed
                label: 'Log Out',
            }
        ]
    }
]