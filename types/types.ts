export type NavLink = {
  id: string;
  title: string;
};

export type Cocktail = {
  name: string;
  country: string;
  detail: string;
  price: string;
};

export type Profile = {
  imgPath: string;
};

export type Contact = {
  phone: string;
  email: string;
};

export type StoreInfo = {
  heading: string;
  address: string;
  contact: Contact;
};

export type OpeningHour = {
  day: string;
  time: string;
};

export type SocialLink = {
  name: string;
  icon: string;
  url: string;
};

export type SliderList = {
  id: number;
  name: string;
  image: string;
  title: string;
  description: string;
};
