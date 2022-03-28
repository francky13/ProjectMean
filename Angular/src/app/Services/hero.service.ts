import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }
   getinfo(){
    return this.http.get(`${url}api/Utilisateur/getUtilisateur`);
  }
}
