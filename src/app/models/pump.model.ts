import { Engine } from "./engine.model";
import { Material } from "./material.model";


export interface Pump {
    id: string;
    name: string;
    maxPressure: number;
    liquidTemperature: string;
    weight: number;
    engine: Engine;
    housingMaterial: Material;
    lmpellerMaterial: Material;
    description: string;
    image: string;
    price: number;
}