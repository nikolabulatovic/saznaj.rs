export const socialMedia = ['Instagram', 'Youtube', 'Facebook'] as const;
export type SocialMediaType = typeof socialMedia[number];

export interface SocialMediaCardInfo {
  name: string;
  description: string;
  type: SocialMediaType;
  link: string;
  image: string;
}

export const socialMediaCards: Array<SocialMediaCardInfo> = [
  {
    name: 'Vegan Izazov 22',
    description: 'Probaj',
    type: 'Instagram',
    link: 'https://www.instagram.com/veganizazov22/',
    image: 'veganizazov22.jpg',
  },
  {
    name: 'Misli svojom glavom',
    description: 'Lični blog',
    type: 'Instagram',
    link: 'https://www.instagram.com/misli_svojom_glavom_/',
    image: 'mislisvojomglavom.jpg',
  },
  {
    name: 'Noćni leptir',
    description: '',
    type: 'Instagram',
    link: 'https://www.instagram.com/nocni.leptir/',
    image: 'nocnileptir.jpg',
  },
  {
    name: 'Vege zajednica',
    description: 'Udruženje',
    type: 'Instagram',
    link: 'https://www.instagram.com/vegezajednica_/',
    image: 'vegezajednica.jpg',
  },
  {
    name: 'Veganjamcije',
    description: '',
    type: 'Instagram',
    link: 'https://www.instagram.com/veganjamcije/',
    image: 'veganjamcije.jpg',
  },
  {
    name: 'Moja Vegan Kuhinja',
    description: 'Razmena recepata',
    type: 'Facebook',
    link: 'https://www.facebook.com/groups/124940954856880',
    image: 'mojavegankuhinja.jpg',
  },
  {
    name: 'Vegan proizvodi u Srbiji',
    description: 'Veganski proizvodi',
    type: 'Facebook',
    link: 'https://www.facebook.com/groups/1602738376654738',
    image: 'veganproizvodi.jpg',
  },
  {
    name: 'Sloboda za životinje',
    description: 'Razmena recepata',
    type: 'Facebook',
    link: 'https://www.facebook.com/SlobodaZaZivotinje',
    image: 'slobodazazivotinje.png',
  },
  {
    name: 'Liberate or die',
    description: 'Direktna akcija',
    type: 'Facebook',
    link: 'https://www.facebook.com/liberateordie',
    image: 'liberateordie.jpg',
  },
  {
    name: 'Vegan sidekick',
    description: 'Strip',
    type: 'Facebook',
    link: 'https://www.facebook.com/vegansidekick',
    image: 'vegansidekick.jpg',
  },
  {
    name: 'Elwood’s Organic Dog Meat',
    description: 'Pseće meso',
    type: 'Facebook',
    link: 'https://www.facebook.com/ElwoodDogMeat',
    image: 'elwood.jpg',
  },
  {
    name: 'Nadrnadani travojed',
    description: 'Lični blog',
    type: 'Youtube',
    link: '',
    image: 'nadrndanitravojed.jpg',
  },
  {
    name: 'Mama veganka',
    description: 'Recepti',
    type: 'Youtube',
    link: '',
    image: 'mamaveganka.jpg',
  },
  {
    name: 'Earthling Ed',
    description: 'Aktivizam',
    type: 'Youtube',
    link: '',
    image: 'earthlinged.jpg',
  },
  {
    name: 'Joey Carbstrong',
    description: 'Aktivizam',
    type: 'Youtube',
    link: '',
    image: 'joey.jpg',
  },
  {
    name: 'Mic the Vegan',
    description: 'Zdravlje',
    type: 'Youtube',
    link: '',
    image: 'micthevegan.jpg',
  },
  {
    name: 'Simnett Nutrition',
    description: 'Fitness',
    type: 'Youtube',
    link: '',
    image: 'simnettnutrition.jpg',
  },
  {
    name: 'Vegan Gains',
    description: 'Lični blog',
    type: 'Youtube',
    link: '',
    image: 'vegangains.webp',
  },
  {
    name: 'Animal Rebellion',
    description: 'Aktivizam',
    type: 'Youtube',
    link: '',
    image: 'animalrebelion.jpg',
  },
  {
    name: 'Beyond Carnism',
    description: 'Psihologija',
    type: 'Youtube',
    link: '',
    image: 'beyondcarnism.jpg',
  }
];

export interface TakeActionInfo {
  image: string;
  link: string;
  name: string;
}

export const takeActionBanners = [
  {
    image: 'govegan.jpg',
    link: 'https://govegan.rs/',
    name: 'Go Vegan',
  },
  {
    image: 'veganizazov.jpg',
    link: 'https://vegan-izazov22.com/',
    name: 'Vegan Izazov 22',
  }
]