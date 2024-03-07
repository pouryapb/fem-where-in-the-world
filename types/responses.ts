export interface CountryPreviewResponse {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        common: string;
        official: string;
      };
    };
  };
  capital: string[];
  region: string;
  flags: {
    alt: string;
    png: string;
    svg: string;
  };
  population: number;
}

export interface BorderName {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        common: string;
        official: string;
      };
    };
  };
}

export interface CountryDetailResponse {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  borders: string[];
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  capital: string[];
  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  population: number;
  flags: {
    alt: string;
    png: string;
    svg: string;
  };
}
