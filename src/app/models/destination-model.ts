import {CountryModel} from "./country-model";

export interface DestinationModel {
  id: number;
  name: string;
  description: string;
  country?: CountryModel;
}
