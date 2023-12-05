
export interface Reservation {
    idReservation?: number;
    numReservation?: string;
    debutAnneeUniv?: Date; // ou utiliser le type correct en fonction de vos besoins
    finAnneeUniv?: Date; // ou utiliser le type correct en fonction de vos besoins
    estValide?: boolean;
    // Ajoutez d'autres propriétés au besoin
}
