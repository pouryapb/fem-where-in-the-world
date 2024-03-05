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
}
