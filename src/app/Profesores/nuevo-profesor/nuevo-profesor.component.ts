import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfesorService } from '../shared/profesor.service';

@Component({
  selector: 'nuevo-profesor',
  templateUrl: './nuevo-profesor.component.html',
  styles: []
})
export class NuevoProfesorComponent implements OnInit {

  constructor(private pservice : ProfesorService) { }

  ngOnInit() {
    this.resetForm();
    
  }

  resetForm(form?:NgForm){
    if(form != null)
    form.form.reset();

    this.pservice.formData = {

      Id : 0,
      nombre : '',
      apellido : '',
      Edad : 0,
    }
  }

  onSubmit(form: NgForm){
    if(this.pservice.formData.Id == 0)
    this.InsertarRegistro(form);
    else
   this.UpdateRegistro(form);
  }

  InsertarRegistro(form: NgForm){
    this.pservice.postNuevoProfesor().subscribe(
      res => {
        this.resetForm(form);
        this.pservice.prefreshList();
      },
      err => {
        console.log(err);
      }

    )

  }

  UpdateRegistro(form: NgForm){
    this.pservice.Updateprofesor().subscribe(
      res => {
        this.resetForm(form);
        this.pservice.prefreshList();
      },
      err => {
        console.log(err);
      }

    )

  }

}
