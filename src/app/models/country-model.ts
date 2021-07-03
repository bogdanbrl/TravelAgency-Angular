import {ContinentModel} from "./continent-model";

export interface CountryModel {
  id: number;
  name: string;
  continent: ContinentModel;
}
