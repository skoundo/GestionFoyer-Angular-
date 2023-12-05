import { Component, OnInit } from '@angular/core';
import { ChambreService } from '../../../../services/chambre-service.service';
import { Chambre } from '../../../../models/chambre';
import { Bloc } from '../../../../models/bloc';
import { Router } from '@angular/router';

@Component({
    selector: 'app-chambre-details',
    templateUrl: './chambre-details.component.html',
    styleUrls: ['./chambre-details.component.scss'],
})
export class ChambreDetailsComponent implements OnInit {
    chambres: Chambre[] = [];
    blocs: Bloc[];

    constructor(private chambreService: ChambreService, private router: Router) {}

    ngOnInit(): void {
        this.loadChambres();
    }

    loadChambres(): void {
        this.chambreService.getAllChambres().subscribe(
            (chambres) => {
                this.chambres = chambres;
            },
            (error) => {
                console.error('Erreur lors de la récupération des chambres:', error);
            }
        );
    }

    deleteChambre(id: any) {
        this.chambreService.deleteChambre(id).subscribe(
            (result) => {
                console.log('Chambre supprimée avec succès:', result);
                // Ajoutez toute logique supplémentaire après la suppression réussie
                // Mise à jour de la liste des chambres après la suppression
                this.loadChambres();
                // Redirection vers /admin/chambredetails après la suppression
                this.router.navigate(['/admin/chambredetails']);
            },
            (error) => {
                console.error('Erreur lors de la suppression de la chambre:', error);
                // Gérez les erreurs ici
            }
        );
    }
}
