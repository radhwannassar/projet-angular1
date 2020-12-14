import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../shared/animal.service';


@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
  alert:boolean=false;
  modifyform=new FormGroup({

    race:new FormControl(''),
    espece:new FormControl(''),
    age:new FormControl(''),
    poids:new FormControl('')
  })
  constructor(private v:AnimalService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.v.getCurrentData(this.router.snapshot.params.id).subscribe((r)=>{
      console.log(r)
      this.modifyform=new FormGroup({

        race:new FormControl(r['race']),
        espece:new FormControl(r['espece']),
        age:new FormControl(r['age']),
        poids:new FormControl(r['poids'])
    })
  })

}
updatevol(){
  this.v.updatevol(this.router.snapshot.params.id,this.modifyform.value).subscribe((r)=>{
    console.log(r,"data updated")
    this.alert=true;
  })
}
closeAlert(){
  this.alert=false;
}
}