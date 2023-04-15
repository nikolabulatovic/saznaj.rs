export const socialMedia = ['Instagram', 'Youtube', 'Facebook'] as const;
export type SocialMediaType = typeof socialMedia[number];

export interface SocialMediaCardInfo {
  name: string;
  description: string;
  type: SocialMediaType;
  link: string;
  image: string;
  isDiagonal?: boolean;
}

export const socialMediaCards: Array<SocialMediaCardInfo> = [
  {
    name: 'Vegan Izazov 22',
    description: '',
    type: 'Instagram',
    link: 'https://www.instagram.com/veganizazov22/',
    image: 'veganizazov22.jpg',
  },
  {
    name: 'Misli svojom glavom',
    description: '',
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
    description: '',
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
    isDiagonal: true,
  },
  {
    name: 'Fitness bliznakinje',
    description: '',
    type: 'Instagram',
    link: 'https://www.instagram.com/fitness.bliznakinje/',
    image: 'fitnessbliznakinje.png',
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
    description: 'Udruženje',
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
    link: 'https://www.youtube.com/@nadrndanitravojed4579',
    image: 'nadrndanitravojed.jpg',
  },
  {
    name: 'Mama veganka',
    description: 'Recepti',
    type: 'Youtube',
    link: 'https://www.youtube.com/@MamaVeganka',
    image: 'mamaveganka.jpg',
  },
  {
    name: 'Earthling Ed',
    description: 'Aktivizam',
    type: 'Youtube',
    link: 'https://www.youtube.com/@ed.winters',
    image: 'earthlinged.jpg',
  },
  {
    name: 'Joey Carbstrong',
    description: 'Aktivizam',
    type: 'Youtube',
    link: 'https://www.youtube.com/@JoeyCarbstrong',
    image: 'joey.jpg',
  },
  {
    name: 'Mic the Vegan',
    description: 'Zdravlje',
    type: 'Youtube',
    link: 'https://www.youtube.com/@MictheVegan',
    image: 'micthevegan.jpg',
  },
  {
    name: 'Simnett Nutrition',
    description: 'Fitness',
    type: 'Youtube',
    link: 'https://www.youtube.com/@Simnettnutrition',
    image: 'simnettnutrition.jpg',
  },
  {
    name: 'Vegan Gains',
    description: 'Lični blog',
    type: 'Youtube',
    link: 'https://www.youtube.com/@VeganGains',
    image: 'vegangains.jpg',
  },
  {
    name: 'Beyond Carnism',
    description: 'Psihologija',
    type: 'Youtube',
    link: 'https://www.youtube.com/@BeyondCarnism',
    image: 'beyondcarnism.jpg',
  },
  {
    name: 'Nutrition Facts',
    description: 'Zdravlje',
    type: 'Youtube',
    link: 'https://www.youtube.com/@NutritionFactsOrg',
    image: 'nutritionfacts.jpg',
  },
  {
    name: 'Direct Action Everywhere',
    description: 'Aktivizam',
    type: 'Youtube',
    link: 'https://www.youtube.com/@DirectActionEverywhere',
    image: 'dxe.png',
  },
];

export interface TakeActionInfo {
  image: string;
  link: string;
  name: string;
}

export const takeActionBanners = [
  {
    image: 'veganizazov.jpg',
    link: 'https://vegan-izazov22.com/',
    name: 'Vegan Izazov 22',
  },
  {
    image: 'govegan.jpg',
    link: 'https://govegan.rs/',
    name: 'Go Vegan',
  },
]