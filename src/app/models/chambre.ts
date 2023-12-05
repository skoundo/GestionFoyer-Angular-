import {Bloc} from "./bloc";
import {Reservation} from "./reservation";

export interface Chambre {
    idChambre?: number;
    numeroChambre?: number;
    typeC?: string;
    bloc?: Bloc;
    reservations?: Reservation[]; // You may need to define the Reservation model
    // Add other properties as needed
}
