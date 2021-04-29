export interface City {
  id: string;
  name: string;
  country: string;
  flag: string;
}

export interface Continent {
  id: string;
  name: string;
  description: string;
  bannerImage: string;
  numberOfCountries: number;
  numberOfLanguages: number;
  numberOfCities: number;
  cities: City[];
}

export const continents: Continent[] = [
  {
    id: '1',
    name: 'Europa',
    description:
      'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
    bannerImage: '/images/banners/europeBanner.jpg',
    numberOfCountries: 50,
    numberOfLanguages: 60,
    numberOfCities: 27,
    cities: [
      {
        id: '1',
        name: 'Londres',
        country: 'Reino Unido',
        flag: '/images/flags/reinoUnido.svg',
      },
      {
        id: '2',
        name: 'Paris',
        country: 'França',
        flag: '/images/flags/franca',
      },
      {
        id: '3',
        name: 'Roma',
        country: 'Itália',
        flag: '/images/flags/italia',
      },
      {
        id: '4',
        name: 'Praga',
        country: 'República Tcheca',
        flag: '/images/flags/republicaTcheca',
      },
      {
        id: '5',
        name: 'Amsterdã',
        country: 'Holanda',
        flag: '/images/flags/holanda',
      },
    ],
  },
];
