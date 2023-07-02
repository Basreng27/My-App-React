import React from "react";

// Dashboard
const Dashboard = React.lazy(() => import("../views/dashboard/Index"));

// Theme
const Colors = React.lazy(() => import("../views/theme/colors/Colors"));
const Typography = React.lazy(() => import("../views/theme/typography/Typography"));

// Base
const Cards = React.lazy(() => import('../views/base/cards/Cards'))
const Accordion = React.lazy(() => import('../views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('../views/base/breadcrumbs/Breadcrumbs'))
const Carousels = React.lazy(() => import('../views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('../views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('../views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('../views/base/navs/Navs'))
const Paginations = React.lazy(() => import('../views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('../views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('../views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('../views/base/progress/Progress'))
const Spinners = React.lazy(() => import('../views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('../views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('../views/base/tooltips/Tooltips'))

const routes = [
  // Dashboard
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  
  // Theme
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  
  // Base
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
];

export default routes;
