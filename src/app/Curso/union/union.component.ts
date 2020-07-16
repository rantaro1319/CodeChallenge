import { Component, OnInit } from '@angular/core';
import { CursoService } from '../shared/curso.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-union',
  templateUrl: './union.component.html',
  styles: []
})
export class CunionComponent implements OnInit {

  constructor(public cservice : CursoService) { }

  ngOnInit() {
    this.resetForm();
    
  }

  resetForm(form?:NgForm){
    if(form = null)
    form.form.reset();

    this.cservice.formData = {

      Id : null,
      nombre : ''
      
    }
  }

  onSubmit(form:NgForm){
    this.InsertarRegistro(form);
  }

  InsertarRegistro(form:NgForm){
    console.log("llegue al metodo")
    this.cservice.postNuevoCurso().subscribe(
      res => {
        this.resetForm(form);
      },
      err => {
        console.log(err);
      }

    )

  }

}