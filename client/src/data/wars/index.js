// src/data/wars/index.js

// 1) Register each war file here:
export const warList = [
  { id: 'war_1947_firstIndoPakWar',  name: 'First Indo-Pak War',             year: 1947 },
  { id: 'war_1948_operationPolo',    name: 'Operation Polo',                 year: 1948 },
  { id: 'war_1961_liberationGoa',    name: 'Liberation of Goa',              year: 1961 },
  { id: 'war_1962_sinoIndianWar',    name: 'Sino-Indian War',                year: 1962 },
  { id: 'war_1965_secondIndoPakWar', name: 'Second Indo-Pak War',            year: 1965 },
  { id: 'war_1967_nathuLaChoLa',     name: 'Nathu La & Cho La Skirmishes',  year: 1967 },
  { id: 'war_1971_bangladeshLiberation', name: 'Bangladesh Liberation War', year: 1971 },
  { id: 'war_1984_meghdoot',         name: 'Operation Meghdoot (Siachen)',   year: 1984 },
  { id: 'war_1984_blueStar',         name: 'Operation Blue Star',            year: 1984 },
  { id: 'war_1987_operationPawan',   name: 'Operation Pawan (Sri Lanka)',    year: 1987 },
  { id: 'war_1988_operationCactus',  name: 'Operation Cactus (Maldives)',    year: 1988 },
  { id: 'war_1999_kargil',           name: 'Kargil War',                     year: 1999 },
  { id: 'war_2001_parakram',         name: 'Operation Parakram',             year: 2001 },
  { id: 'war_2016_surgicalStrikes',  name: 'Surgical Strikes (LoC)',         year: 2016 },
  { id: 'war_2017_doklam',           name: 'Doklam Standoff',                year: 2017 },
  { id: 'war_2019_balakot',          name: 'Balakot Airstrike & Engagement', year: 2019 },
  { id: 'war_2020_galwan',           name: 'Eastern Ladakh & Galwan Clash',  year: 2020 },
  { id: 'war_2025_IndiaPak',         name: 'Indo-Pak War',                   year: 2025 }
];

// 2) Lazy-load function
export function loadWarData(id) {
  switch (id) {
    case 'war_1947_firstIndoPakWar':
      return import('./war_1947_firstIndoPakWar');
    case 'war_1948_operationPolo':
      return import('./war_1948_operationPolo');
    case 'war_1961_liberationGoa':
      return import('./war_1961_liberationGoa');
    case 'war_1962_sinoIndianWar':
      return import('./war_1962_sinoIndianWar');
    case 'war_1965_secondIndoPakWar':
      return import('./war_1965_indoPak');
    case 'war_1967_nathuLaChoLa':
      return import('./war_1967_nathuChoLa');
    case 'war_1971_bangladeshLiberation':
      return import('./war_1971_bangladeshLiberation');
    case 'war_1984_meghdoot':
      return import('./war_1984_meghdoot');
    case 'war_1984_blueStar':
      return import('./war_1984_bluestar');
    case 'war_1987_operationPawan':
      return import('./war_1987_operationPawan');
    case 'war_1988_operationCactus':
      return import('./war_1988_operationCactus');
    case 'war_1999_kargil':
      return import('./war_1999_kargil');
    case 'war_2001_parakram':
      return import('./war_2001_parakram');
    case 'war_2016_surgicalStrikes':
      return import('./war_2016_surgicalStrikes');
    case 'war_2017_doklam':
      return import('./war_2017_doklam');
    case 'war_2019_balakot':
      return import('./war_2019_balakot');
    case 'war_2020_galwan':
      return import('./war_2020_galwan');
    case 'war_2025_IndiaPak':
      return import('./war_2025_IndiaPak');
    default:
      return Promise.reject(new Error(`Unknown war ID: ${id}`));
  }
}
