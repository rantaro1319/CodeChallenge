import { Component, OnInit } from '@angular/core';
import { ProfesorService } from '../shared/profesor.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'punion',
  templateUrl: './punion.component.html',
  styles: []
})
export class PunionComponent implements OnInit {

  constructor(public pservice: ProfesorService) { }

  ngOnInit() {
    this.resetForm();
    
  }

  resetForm(form?:NgForm){
    if(form = null)
    form.form.reset();

    this.pservice.formData = {

      Id : null,
      nombre : '',
      apellido : '',
      Edad : 0  
    }
  }

  onSubmit(form:NgForm){
    this.InsertarRegistro(form);
  }

  InsertarRegistro(form:NgForm){
    console.log("llegue al metodo")
    this.pservice.postNuevoProfesor().subscribe(
      res => {
        this.resetForm(form);
      },
      err => {
        console.log(err);
      }

    )

  }
}
