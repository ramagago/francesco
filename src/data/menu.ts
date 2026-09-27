export type MenuItem = {
  name: string;
  price?: number;
  note?: string;
  lines?: string[];
};

export type MenuGroup = {
  label?: string;
  note?: string;
  items?: MenuItem[];
  groups?: MenuGroup[];
};

export type MenuSection = {
  id: string;
  title: string;
  kicker?: string;
  /** Dos columnas en pantallas anchas. */
  split?: boolean;
  groups: MenuGroup[];
};

/**
 * Carta de Frances.co, copiada de la carta impresa.
 * Se conservan la redacción y la ortografía originales.
 */
export const menu: MenuSection[] = [
  {
    id: "bebidas",
    title: "bebidas",
    split: true,
    groups: [
      {
        label: "(cafeteria)",
        items: [
          { name: "Espresso", price: 180 },
          { name: "Lungo", price: 190 },
          { name: "Doble ristretto", price: 200 },
          { name: "Cortado", price: 210 },
          { name: "Macchiato", price: 190 },
          { name: "Macchiato doble", price: 210 },
          { name: "Americano", price: 190 },
          { name: "Espresso doble", price: 210 },
          { name: "Latte", price: 240 },
          { name: "Cappuccino", price: 240 },
          { name: "Flat white", price: 260 },
          { name: "Mocaccino", price: 260 },
          { name: "Lagrima", price: 210 },
          { name: "Cappuccino XL", price: 260 },
          { name: "Latte XL", price: 260 },
          { name: "Flat white XL", price: 290 },
          { name: "Mocaccino XL", price: 290 },
        ],
      },
      {
        label: "(Iced)",
        items: [
          { name: "Iced latte", price: 260 },
          { name: "Iced flat white", price: 280 },
          { name: "Iced americano", price: 190 },
          { name: "Iced Matcha latte", price: 260 },
          { name: "Iced Moca", price: 270 },
          { name: "Iced lagrima", price: 210 },
        ],
      },
      {
        label: "(leches vegetales)",
        items: [
          { name: "Leche de avena", price: 40 },
          { name: "Leche de almendras", price: 40 },
        ],
      },
      {
        label: "(otras bebidas)",
        items: [
          { name: "Submarino", price: 240, note: "*de chocolate belga" },
          { name: "Matcha latte", price: 260 },
          { name: "Matcha latte XL", price: 290 },
          { name: "Te Twinings", price: 180 },
          { name: "Te en hebras", price: 210 },
          { name: "Té verde frío con hibiscus", price: 220 },
          { name: "Té negro frío", price: 220 },
          { name: "Té verde frío", price: 220 },
          { name: "Exprimido natural de naranja", price: 260 },
          {
            name: "Jugos en botella",
            price: 350,
            note: "*variedad de jugos envasados",
          },
          {
            name: "Limonada",
            price: 250,
            note: "*con menta y jengibre sin azúcar",
          },
          { name: "Coca cola", price: 190 },
          { name: "Agua", price: 170 },
        ],
      },
    ],
  },
  {
    id: "boulangerie",
    title: "boulangerie",
    split: true,
    groups: [
      {
        items: [
          { name: "Medialuna dulce", price: 150 },
          { name: "Roll de canela", price: 240 },
          { name: "Roll de coco", price: 240 },
          { name: "Roll de coco relleno de dulce de leche", price: 290 },
          { name: "Roll de pistachio y chocolate", price: 260 },
          { name: "Roll de tiramisu", price: 290 },
          { name: "Croissant simple", price: 180 },
          { name: "Pain au chocolat", price: 240 },
          { name: "Croissant de crema de almendras", price: 310 },
          { name: "Croissant crema pastelera y frutos rojos", price: 350 },
        ],
      },
      {
        label: "Girella de crema pastelera opciones:",
        items: [
          { name: "Naranjas confitadas", price: 240 },
          { name: "Frambuesas", price: 240 },
          { name: "Arandanos", price: 240 },
          { name: "Moras", price: 240 },
          { name: "Chocolate blanco y pistachio", price: 290 },
        ],
      },
      {
        items: [
          { name: "Croissant relleno de crema pastelera", price: 290 },
          { name: "Croissant relleno de nutella", price: 350 },
          { name: "Croissant relleno de dulce de leche", price: 290 },
        ],
      },
    ],
  },
  {
    id: "patisserie",
    title: "patisserie",
    split: true,
    groups: [
      {
        items: [
          {
            name: "Mini budin de chocolate relleno de dulce de leche",
            price: 120,
          },
          { name: "Mini budin esponjoso de naranja", price: 120 },
          { name: "Hojaldre manzana/ pera/ durazno", price: 240 },
          { name: "Sfogliatella de crema pastelera", price: 260 },
          { name: "Mini topeziene relleno de crema pastelera", price: 160 },
          { name: "Alfajor de maicena con dulce de leche", price: 130 },
          { name: "Alfajor de maicena y canela con dulce de leche", price: 110 },
          { name: "Trufas bañadas en chocolate blanco o negro", price: 100 },
          { name: "Financier de almendras", price: 100 },
        ],
      },
      {
        items: [
          {
            name: "Porción de pan genoves",
            price: 220,
            note: "Naranja confitada o frutos secos",
          },
          { name: "Tarta citrica", price: 350 },
          { name: "Tarta de chocolate, nutella y dulce de leche", price: 350 },
          {
            name: "Tarta frutal de crema pastelera y arandanos",
            price: 380,
          },
          {
            name: "Tarta frutal de crema pastelera y frambuesas",
            price: 380,
          },
          { name: "Tarta frutal de crema pastelera y frutillas", price: 380 },
        ],
      },
    ],
  },
  {
    id: "salado",
    title: "salado",
    groups: [
      {
        items: [
          { name: "Pan de queso", price: 120 },
          { name: "Focaccia", price: 210 },
          { name: "Tostado clásico de jamon y queso", price: 390 },
        ],
      },
      {
        label: "(rellenos)",
        groups: [
          {
            label: "( ) Pan baguette/ Pan brioche / Focaccia rellena:",
            items: [
              { name: "Jamón y queso", price: 350 },
              {
                name: "Jamón crudo, queso brie, rúcula y tomate",
                price: 460,
              },
              { name: "Caprese", price: 350 },
              { name: "Solo queso", price: 300 },
            ],
          },
          {
            label: "( ) Croissant relleno:",
            items: [
              { name: "Jamón y queso", price: 320 },
              {
                name: "Jamón crudo, queso brie, rúcula y tomate",
                price: 460,
              },
              { name: "Caprese", price: 320 },
              { name: "Solo queso", price: 290 },
            ],
          },
          {
            label: "( ) Medialuna rellena:",
            items: [
              { name: "Jamón y queso", price: 200 },
              { name: "Caprese", price: 180 },
              { name: "Solo queso", price: 160 },
            ],
          },
          {
            label: "( ) Pan de queso relleno:",
            items: [
              { name: "Jamón y queso", price: 210 },
              { name: "Caprese", price: 190 },
              { name: "Solo queso", price: 170 },
            ],
          },
          {
            label: "( ) Pan de queso fit relleno (flat):",
            items: [
              { name: "Jamón y queso", price: 220 },
              { name: "Caprese", price: 200 },
              { name: "Solo queso", price: 180 },
            ],
          },
        ],
      },
      {
        label: "(quiche)",
        groups: [
          {
            label: "Quiche lorraine:",
            items: [
              { name: "Clásica (panceta y queso)", price: 410 },
              { name: "Champiñones y queso", price: 410 },
              { name: "Caprese", price: 410 },
              { name: "Puerro y queso azul", price: 450 },
              { name: "Espinaca y salmón", price: 450 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "brunch",
    title: "brunch",
    split: true,
    groups: [
      {
        label: "(huevos - omelette)",
        groups: [
          {
            items: [
              {
                name: "Europeo salado",
                price: 450,
                lines: [
                  "Incluye:",
                  "Tostada pan de masa madre o integral",
                  "Huevos revueltos",
                  "Jamón crudo",
                  "Dip de palta pisada",
                  "Dip de queso crema",
                ],
              },
            ],
          },
          {
            label: "Omelette con ensalada:",
            note: "*Ensalada: verdes, frutos secos y tomate cherry",
            items: [
              { name: "Relleno de queso + ensalada", price: 460 },
              { name: "Relleno caprese + ensalada", price: 480 },
              { name: "Relleno de jamón y queso + ensalada", price: 490 },
            ],
          },
          {
            items: [{ name: "Huevos revueltos solos", price: 290 }],
          },
        ],
      },
      {
        label: "(tostadas)",
        items: [
          {
            name: "Tostadas",
            price: 290,
            lines: [
              "pan: brioche / baguette / integral",
              "con mermeladas artesanales y queso crema o manteca",
            ],
          },
          {
            name: "Tostadas de pan de queso",
            price: 300,
            lines: [
              "Pan de queso cortado en rodajas",
              "Con mermeladas artesanales y queso crema",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "opciones-fit",
    title: "opciones fit",
    kicker: "SIN AZÚCAR/ SIN LACTOSA/ SIN GLUTEN",
    groups: [
      {
        items: [
          {
            name: "Fit 1",
            price: 550,
            lines: [
              "Yogurt deslactosado sin azúcar",
              "Frutas de estación",
              "Granola casera",
            ],
          },
          {
            name: "Fit 2",
            price: 550,
            lines: [
              "Panqueques de coco sin gluten, sin lactosa, sin azúcar",
              "Acompañados de miel y fruta de estación",
            ],
          },
          {
            name: "Fit 3",
            price: 480,
            lines: [
              "Galletas de maíz salmas",
              "Huevos revueltos",
              "Jamón crudo",
              "Dip de palta pisada",
              "Dip de queso crema",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "almuerzos",
    title: "almuerzos",
    groups: [
      {
        items: [
          {
            name: "Ensalada europea",
            price: 550,
            lines: [
              "Verdes con jamón crudo, tomate, frutos secos y queso brie",
            ],
          },
          {
            name: "Ensalada power bowl",
            price: 530,
            lines: [
              "Quinoa, rúcula, choclo, calabaza al horno, huevo duro, garbanzos y almendras fileteadas",
            ],
          },
        ],
      },
      {
        label: "Tarta quiche lorraine con ensalada:",
        note: "*Ensalada: verdes, frutos secos y tomate cherry",
        items: [
          { name: "Quiche de panceta y queso + ensalda", price: 490 },
          { name: "Quiche capresse + ensalda", price: 490 },
          { name: "Quiche de salmon y espinaca + ensalda", price: 550 },
          { name: "Quiche de queso azul + ensalda", price: 550 },
        ],
      },
    ],
  },
];

export function formatPrice(price: number) {
  return `$${price}`;
}
