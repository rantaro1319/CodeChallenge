import { Component, OnInit } from '@angular/core';
import { CursoService } from '../shared/curso.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'nuevo-curso',
  templateUrl: './nuevo-curso.component.html',
  styles: []
})
export class NuevoCursoComponent implements OnInit {

  constructor(private cservice : CursoService) { }

  ngOnInit() {
    this.resetForm();
    
  }

  resetForm(form?:NgForm){
    if(form != null)
    form.form.reset();

    this.cservice.formData = {

      Id : 0,
      nombre : '',
    }
  }

  onSubmit(form: NgForm){
    if(this.cservice.formData.Id == 0)
    this.InsertarRegistro(form);
    else
   this.UpdateRegistro(form);
  }

  InsertarRegistro(form: NgForm){
    this.cservice.postNuevoCurso().subscribe(
      res => {
        this.resetForm(form);
        this.cservice.crefreshList();
      },
      err => {
        console.log(err);
      }

    )

  }

  UpdateRegistro(form: NgForm){
    this.cservice.UpdateCurso().subscribe(
      res => {
        this.resetForm(form);
        this.cservice.crefreshList();
      },
      err => {
        console.log(err);
      }

    )

  }

}
