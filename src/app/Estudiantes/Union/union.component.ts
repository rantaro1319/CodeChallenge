import { Component, OnInit} from '@angular/core' 
import { StudentsService } from '../shared/students.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'union-todo',
  templateUrl: './union.component.html'

})
export class UnionComponent implements OnInit {

  constructor(public service : StudentsService) { }

  ngOnInit() {
    this.resetForm();
    
  }

  resetForm(form?:NgForm){
    if(form = null)
    form.form.reset();

    this.service.formData = {

      Id : null,
      nombre : '',
      apellido : '',
      edad : 0,
      correo : '',
      telefono : '',
      idsecciones: 0
    }
  }

  onSubmit(form:NgForm){
    this.InsertarRegistro(form);
  }

  InsertarRegistro(form:NgForm){
    this.service.postNuevoEstudiante().subscribe(
      res => {
        this.resetForm(form);
      },
      err => {
        console.log(err);
      }

    )

  }

}
