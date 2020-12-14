import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from '../model/Animal';
@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  url = "http://localhost:3000/animals"
  constructor(private http:HttpClient) { }
  getCurrentData(id){
    return this.http.get(`${this.url}/${id}`);
   
   }

  getAnimals():Observable<Animal[]>{
    return this.http.get<Animal[]>(this.url);
  }

  addAnimals(a:Animal):Observable<Animal>{
    return this.http.post<Animal>(this.url,a);

  }
  supprimerAnimals(id):Observable<Animal>{
    return this.http.delete<Animal>(`${this.url}/${id}`);
  }
  
   
   updatevol(id,info){
    return this.http.put(`${this.url}/${id}`,info);
  }
}
