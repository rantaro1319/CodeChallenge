import { Component, OnInit } from '@angular/core';
import { StudentsService } from './shared/students.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'nuevo-estudiante',
  templateUrl: './nuevo-estudiante.component.html',
  styles: []
})
export class NuevoEstudianteComponent implements OnInit {

  constructor(private service : StudentsService) { }

  ngOnInit() {
    this.resetForm();
    
  }

  resetForm(form?:NgForm){
    if(form != null)
    form.form.reset();

    this.service.formData = {

      Id : 0,
      nombre : '',
      apellido : '',
      edad : 0,
      correo : '',
      telefono : '',
      idsecciones: 0
    }
  }

  onSubmit(form: NgForm){
    if(this.service.formData.Id == 0)
    this.InsertarRegistro(form);
    else
   this.UpdateRegistro(form);
  }

  InsertarRegistro(form: NgForm){
    this.service.postNuevoEstudiante().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }

    )

  }
  
  UpdateRegistro(form: NgForm){
    this.service.updateestudiante().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }

    )

  }

}
