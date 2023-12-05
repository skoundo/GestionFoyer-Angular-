import { Component, OnInit } from '@angular/core';
import {Bloc} from "../../../../models/bloc";
import {Chambre} from "../../../../models/chambre";
import {ChambreService} from "../../../../services/chambre-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-chambre-add',
  templateUrl: './chambre-add.component.html',
  styleUrls: ['./chambre-add.component.scss']
})
export class ChambreAddComponent implements OnInit {
  chambre: Chambre = {}; // Initialize the chambre object
  selectedBloc: number | null = null; // Initialize selectedBloc
  blocs: Bloc[] = []; // Initialize blocs
  idBloc: number;
  constructor(private chambreService: ChambreService ,private router: Router) {
    this.chambreService.getAllBlocs().subscribe(
        (blocs) => {
          this.blocs = blocs;
        },
        (error) => {
          console.error('Erreur lors de la récupération des blocs:', error);
        }
    );
  }
  onSubmit() {
    if (this.selectedBloc === null) {
      console.error('Erreur: selectedBloc non défini.');
      return;
    }
    this.idBloc = this.selectedBloc;
    this.chambreService.addChambreEtAffecterBloc(this.chambre, this.idBloc).subscribe(
        (result) => {
          console.log('Chambre ajoutée avec succès:', result);
          // Ajoutez toute logique supplémentaire après une soumission réussie
            this.router.navigate(['/admin/chambredetails']);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la chambre:', error);
          // Gérez les erreurs ici
        }
    );
  }

  ngOnInit(): void {
  }

}
