interface NavItem {
  title: string;
  href: string;
  badge?: string;
  badgeVariant?: "primary" | "secondary";
}

interface NavSection {
  title: string;
  defaultOpen: boolean;
  items: NavItem[];
}

const navigationData: NavSection[] = [
  {
    title: "Primeros Pasos",
    defaultOpen: true,
    items: [
      { title: "Quienes somos", href: "/about", badge: "Hola!", badgeVariant: "primary" },
      { title: "Instalación", href: "/install" },
      { title: "Feedback", href: "/feedback" },
      { title: "Comunidad", href: "/comunidad", badge: "Nuevo", badgeVariant: "secondary" },
    ],
  },
  {
    title: "Catalogo 2025",
    defaultOpen: true,
    items: [
      { title: "Productos ADM", href: "/catalogo" },
      { title: "Mis Favoritos", href: "/" },
      { title: "Compara Productos", href: "/" },
    ],
  },
  {
    title: "Bienestar",
    defaultOpen: true,
    items: [
      { title: "Nutricion", href: "/nutricion" },
      { title: "Entrenamiento", href: "/entrenamiento" },
    ],
  },
  {
    title: "Variantes Acrobaticas",
    defaultOpen: true,
    items: [
      { title: "Olimpico", href: "/#" },
      { title: "Urbano", href: "/#" },
      { title: "Danza", href: "/#" },
      { title: "Recreativo", href: "/#" },
    ],
  },
];

export default navigationData; 