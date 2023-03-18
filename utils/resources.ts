export const socialMedia = ['Instagram', 'Facebook', 'Youtube'] as const;
export type SocialMediaType = typeof socialMedia[number];

export interface SocialMediaCardInfo {
  name: string;
  description: string;
  type: SocialMediaType;
  link: string;
}

export const socialMediaCards: Array<SocialMediaCardInfo> = [
  {
    name: 'Moja Vegan Kuhinja',
    description: 'Razmena recepata',
    type: 'Instagram',
    link: 'https://www.facebook.com/groups/124940954856880',
  },
  {
    name: 'Moja Vegan Kuhinja',
    description: 'Razmena recepata',
    type: 'Instagram',
    link: 'https://www.facebook.com/groups/124940954856880',
  },
  {
    name: 'Moja Vegan Kuhinja',
    description: 'Razmena recepata',
    type: 'Instagram',
    link: 'https://www.facebook.com/groups/124940954856880',
  },
  {
    name: 'Moja Vegan Kuhinja',
    description: 'Razmena recepata',
    type: 'Facebook',
    link: 'https://www.facebook.com/groups/124940954856880',
  },
  {
    name: 'Moja Vegan Kuhinja',
    description: 'Razmena recepata',
    type: 'Facebook',
    link: 'https://www.facebook.com/groups/124940954856880',
  },
  {
    name: 'Moja Vegan Kuhinja',
    description: 'Razmena recepata',
    type: 'Facebook',
    link: 'https://www.facebook.com/groups/124940954856880',
  },
  {
    name: 'Moja Vegan Kuhinja',
    description: 'Razmena recepata',
    type: 'Youtube',
    link: 'https://www.facebook.com/groups/124940954856880',
  },
  {
    name: 'Moja Vegan Kuhinja',
    description: 'Razmena recepata',
    type: 'Youtube',
    link: 'https://www.facebook.com/groups/124940954856880',
  },
  {
    name: 'Moja Vegan Kuhinja',
    description: 'Razmena recepata',
    type: 'Youtube',
    link: 'https://www.facebook.com/groups/124940954856880',
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