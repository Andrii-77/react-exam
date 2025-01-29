export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: IUserHair;
  ip: string;
  address: IUserAddress;
  macAddress: string;
  university: string;
  bank: IUserBank;
  company: IUserCompany;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
  role: string;
}

export interface IUserHair {
  color: string;
  type: string;
}

export interface IUserCoordinates {
  lat: number;
  lng: number;
}

export interface IUserAddress {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: IUserCoordinates;
  country: string;
}

export interface IUserBank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

export interface IUserAddress {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: IUserCoordinates;
  country: string;
}

export interface IUserCompany {
  department: string;
  name: string;
  title: string;
  address: IUserAddress;
}

export interface IUserCrypto {
  coin: string;
  wallet: string;
  network: string;
}

