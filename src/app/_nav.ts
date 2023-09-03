export let spinner = false
export const navItems = [
  {
    name: 'Home',
    icon: 'fa-solid fa-house-chimney',    
    url: '/home',
    pageKey: 'PKAdmin.PazarlamaPages',
    isActive: false,
    hasChild: false,
    children: []
  },
  {
    name: 'Derrew Gelsin',
    icon: 'fa-solid fa-basket-shopping',
    pageKey: 'PKAdmin.PazarlamaPages',
    isActive: false,
    hasChild: true,
    children: [
      {
        name: 'Ana Sayfa',
        url: '/home',
        pageKey: 'PKAdmin.PazarlamaPages',
        icon: 'fa-solid fa-house-chimney',
      },
      {
        name: 'Kategoriler',
        url: '/categories',
        pageKey: 'PKAdmin.PazarlamaPages',
        icon: 'fa-solid fa-cubes',
      },
      {
        name: 'Ürünler',
        url: '/products',
        pageKey: 'PKAdmin.PazarlamaPages',
        icon: 'fa-solid fa-bread-slice',
      },
    ],
  },
  {
    name: 'Derrew Taxi',
    icon: 'fa-solid fa-taxi',
    pageKey: 'PKAdmin.PazarlamaPages',
    isActive: false,
    hasChild: true,
    children: [
      {
        name: 'Taksi Sürücüleri',
        url: '/categories',
        pageKey: 'PKAdmin.PazarlamaPages',
        icon: 'fa-solid fa-user-nurse',
      },
      {
        name: 'Yolculuklar',
        url: '/products',
        pageKey: 'PKAdmin.PazarlamaPages',
        icon: 'fa-solid fa-route',
      },
    ],
  }
]

