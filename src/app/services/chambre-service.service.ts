import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Chambre} from "../models/chambre";
import {environment} from "../../environments/environment.prod";
import {Observable} from "rxjs";
import {Bloc} from "../models/bloc";

@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {
  }
  getAllBlocs(): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(`${environment.baseURL}${environment.ChambreBackendAPIS}/bloc/allbloc`, this.httpOptions);
  }
  addChambreEtAffecterBloc(chambre: Chambre, idBloc: number): Observable<Chambre> {
    const url = `${environment.baseURL}${environment.ChambreBackendAPIS}/chambre/ajouterChambreEtAffecterBloc/${idBloc}`;
    return this.http.post<Chambre>(url, chambre);
  }
  getAllChambres(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${environment.baseURL}${environment.ChambreBackendAPIS}/chambre/allchambre`);
  }
  deleteChambre(id:any):Observable<Chambre>{
    return this.http.delete<Chambre>(environment.baseURL+environment.ChambreBackendAPIS+"/chambre/delete/"+id,this.httpOptions);
  }

}