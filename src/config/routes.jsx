import React from "react";

// Dashboard
const Dashboard = React.lazy(() => import("../views/dashboard/Index"));

// Theme
const Colors = React.lazy(() => import("../views/theme/colors/Colors"));
const Typography = React.lazy(() =>
  import("../views/theme/typography/Typography")
);

// Base
const Cards = React.lazy(() => import("../views/base/cards/Cards"));
const Accordion = React.lazy(() => import("../views/base/accordion/Accordion"));
const Breadcrumbs = React.lazy(() =>
  import("../views/base/breadcrumbs/Breadcrumbs")
);
const Carousels = React.lazy(() => import("../views/base/carousels/Carousels"));
const Collapses = React.lazy(() => import("../views/base/collapses/Collapses"));
const ListGroups = React.lazy(() =>
  import("../views/base/list-groups/ListGroups")
);
const Navs = React.lazy(() => import("../views/base/navs/Navs"));
const Paginations = React.lazy(() =>
  import("../views/base/paginations/Paginations")
);
const Placeholders = React.lazy(() =>
  import("../views/base/placeholders/Placeholders")
);
const Popovers = React.lazy(() => import("../views/base/popovers/Popovers"));
const Progress = React.lazy(() => import("../views/base/progress/Progress"));
const Spinners = React.lazy(() => import("../views/base/spinners/Spinners"));
const Tables = React.lazy(() => import("../views/base/tables/Tables"));
const Tooltips = React.lazy(() => import("../views/base/tooltips/Tooltips"));

// Buttons
const Buttons = React.lazy(() => import("../views/buttons/buttons/Buttons"));
const ButtonGroups = React.lazy(() =>
  import("../views/buttons/button-groups/ButtonGroups")
);
const Dropdowns = React.lazy(() =>
  import("../views/buttons/dropdowns/Dropdowns")
);

//Forms
const FormControl = React.lazy(() =>
  import("../views/forms/form-control/FormControl")
);
const Select = React.lazy(() => import("../views/forms/select/Select"));
const ChecksRadios = React.lazy(() =>
  import("../views/forms/checks-radios/ChecksRadios")
);
const Range = React.lazy(() => import("../views/forms/range/Range"));
const InputGroup = React.lazy(() =>
  import("../views/forms/input-group/InputGroup")
);
const FloatingLabels = React.lazy(() =>
  import("../views/forms/floating-labels/FloatingLabels")
);
const Layout = React.lazy(() => import("../views/forms/layout/Layout"));
const Validation = React.lazy(() =>
  import("../views/forms/validation/Validation")
);

// Charts
const Charts = React.lazy(() => import("../views/charts/Charts"));

// Icons
const CoreUIIcons = React.lazy(() =>
  import("../views/icons/coreui-icons/CoreUIIcons")
);
const Flags = React.lazy(() => import("../views/icons/flags/Flags"));
const Brands = React.lazy(() => import("../views/icons/brands/Brands"));

// Notifications
const Alerts = React.lazy(() => import("../views/notifications/alerts/Alerts"));
const Badges = React.lazy(() => import("../views/notifications/badges/Badges"));
const Modals = React.lazy(() => import("../views/notifications/modals/Modals"));
const Toasts = React.lazy(() => import("../views/notifications/toasts/Toasts"));

// Widget
const Widgets = React.lazy(() => import("../views/widgets/Widgets"));

const routes = [
  // Dashboard
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },

  // Theme
  { path: "/theme", name: "Theme", element: Colors, exact: true },
  { path: "/theme/colors", name: "Colors", element: Colors },
  { path: "/theme/typography", name: "Typography", element: Typography },

  // Base
  { path: "/base", name: "Base", element: Cards, exact: true },
  { path: "/base/cards", name: "Cards", element: Cards },
  { path: "/base/accordion", name: "Accordion", element: Accordion },
  { path: "/base/breadcrumbs", name: "Breadcrumbs", element: Breadcrumbs },
  { path: "/base/carousels", name: "Carousel", element: Carousels },
  { path: "/base/collapses", name: "Collapse", element: Collapses },
  { path: "/base/list-groups", name: "List Groups", element: ListGroups },
  { path: "/base/navs", name: "Navs", element: Navs },
  { path: "/base/paginations", name: "Paginations", element: Paginations },
  { path: "/base/placeholders", name: "Placeholders", element: Placeholders },
  { path: "/base/popovers", name: "Popovers", element: Popovers },
  { path: "/base/progress", name: "Progress", element: Progress },
  { path: "/base/spinners", name: "Spinners", element: Spinners },
  { path: "/base/tables", name: "Tables", element: Tables },
  { path: "/base/tooltips", name: "Tooltips", element: Tooltips },

  // Buttons
  { path: "/buttons", name: "Buttons", element: Buttons, exact: true },
  { path: "/buttons/buttons", name: "Buttons", element: Buttons },
  {
    path: "/buttons/button-groups",
    name: "Button Groups",
    element: ButtonGroups,
  },
  { path: "/buttons/dropdowns", name: "Dropdowns", element: Dropdowns },

  // Forms
  { path: "/forms", name: "Forms", element: FormControl, exact: true },
  { path: "/forms/form-control", name: "Form Control", element: FormControl },
  { path: "/forms/select", name: "Select", element: Select },
  {
    path: "/forms/checks-radios",
    name: "Checks & Radios",
    element: ChecksRadios,
  },
  { path: "/forms/range", name: "Range", element: Range },
  { path: "/forms/input-group", name: "Input Group", element: InputGroup },
  {
    path: "/forms/floating-labels",
    name: "Floating Labels",
    element: FloatingLabels,
  },
  { path: "/forms/layout", name: "Layout", element: Layout },
  { path: "/forms/validation", name: "Validation", element: Validation },

  // Chart
  { path: "/charts", name: "Charts", element: Charts },

  // Icons
  { path: "/icons", exact: true, name: "Icons", element: CoreUIIcons },
  { path: "/icons/coreui-icons", name: "CoreUI Icons", element: CoreUIIcons },
  { path: "/icons/flags", name: "Flags", element: Flags },
  { path: "/icons/brands", name: "Brands", element: Brands },

  // Notification
  {
    path: "/notifications",
    name: "Notifications",
    element: Alerts,
    exact: true,
  },
  { path: "/notifications/alerts", name: "Alerts", element: Alerts },
  { path: "/notifications/badges", name: "Badges", element: Badges },
  { path: "/notifications/modals", name: "Modals", element: Modals },
  { path: "/notifications/toasts", name: "Toasts", element: Toasts },

  // Widgets
  { path: "/widgets", name: "Widgets", element: Widgets },
];

export default routes;
