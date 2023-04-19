export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    stock: number;
    images:string [];
    quantity: number;

  }
  
  export const products = [
    {
      id: 1,
      name: 'Marcadores Pelikan',
      price: 250,
      description: 'Marcadores con brillo de punta redonda.',
      stock: 23,
      images: ['pelikan.jpg'],
      quantity: 0

    },
    {
      id: 2,
      name: 'Postit de corazón',
      price: 50,
      description: 'Hermosos postit de forma corazon de color rojo y rosa.',
      stock: 34,
      images: ['corazon.jpg'],
      quantity: 0
    },
    {
      id: 3,
      name: 'Boligrafo de gel',
      price: 30,
      description: 'Boligrafo de gel color negro con llavero de corazón.',
      stock: 25,
      images: ['boligrafoMari.jpg'],
      quantity: 0
    },
    {
      id: 5,
      name: 'Postit de caricaturas',
      price: 3,
      description: 'Diferentes tipos de postit de colores y formas',
      stock: 76,
      images: ['figuras.jpg'],
      quantity: 0
    },
    {
      id: 7,
      name: 'Estuchera',
      price: 2,
      description: 'Estuchera color rosa con figuras',
      stock: 5,
      images: ['estuchera.jpg'],
      quantity: 0
    },
  ];
  