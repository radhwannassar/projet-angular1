import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/Animal';
import { AnimalService } from '../shared/animal.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
show:boolean = false;
animal= new Animal
add(){
  this.as.addAnimals(this.animal).subscribe(res=>console.log(res))
  this.show = true;
  setTimeout(()=>{this.show = false} ,2000);
}

  constructor(private as:AnimalService) { }

  ngOnInit(): void {
  }

}
