import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/Animal';
import { AnimalService } from '../shared/animal.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
animals:Animal[];
  constructor(private as:AnimalService) 
  {

   }

  ngOnInit(): void {
    this.as.getAnimals().subscribe(resultat=>this.animals=resultat);
  }
  delete(id){
    
    this.as.supprimerAnimals(id).subscribe(res=>console.log(res));
    this.as.getAnimals().subscribe(resultat=>this.animals=resultat);
  }
  
}
