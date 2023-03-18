export const socialMedia = ['Instagram', 'Facebook', 'Youtube'] as const;
export type SocialMediaType = typeof socialMedia[number];

export interface SocialMediaCardInfo {
  name: string;
  description: string;
  type: SocialMediaType;
}

export const socialMediaCards: Array<SocialMediaCardInfo> = [
  {
    name: 'Moja Vegan Kuhinja',
    description: 'Razmena recepata',
    type: 'Instagram',
  },
  {
    name: 'Moja Vegan Kuhinja',
    description: 'Razmena recepata',
    type: 'Instagram',
  },
  {
    name: 'Moja Vegan Kuhinja',
    description: 'Razmena recepata',
    type: 'Instagram',
  },
  {
    name: 'Moja Vegan Kuhinja',
    description: 'Razmena recepata',
    type: 'Facebook',
  },
  {
    name: 'Moja Vegan Kuhinja',
    description: 'Razmena recepata',
    type: 'Facebook',
  },
  {
    name: 'Moja Vegan Kuhinja',
    description: 'Razmena recepata',
    type: 'Facebook',
  },
  {
    name: 'Moja Vegan Kuhinja',
    description: 'Razmena recepata',
    type: 'Youtube',
  },
  {
    name: 'Moja Vegan Kuhinja',
    description: 'Razmena recepata',
    type: 'Youtube',
  },
  {
    name: 'Moja Vegan Kuhinja',
    description: 'Razmena recepata',
    type: 'Youtube',
  }
];