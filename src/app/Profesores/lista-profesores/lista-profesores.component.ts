import { Component, OnInit } from '@angular/core';
import { Profesor } from '../shared/profesor.model';
import { ProfesorService } from '../shared/profesor.service';

@Component({
  selector: 'lista-profesores',
  templateUrl: './lista-profesores.component.html',
  styles: []
})
export class ListaProfesoresComponent implements OnInit {

  constructor(public pservice : ProfesorService) { }

  ngOnInit() {
    this.pservice.prefreshList();

  }

  SeleccionaRegistro(pd:Profesor){

    this.pservice.formData = Object.assign({},pd);
  }

  onDelete(Id){
    if (confirm('Estas seguro que quieres borrar este registro?')) {
      this.pservice.Deleteprofesor(Id)
        .subscribe(res => {
          this.pservice.prefreshList();
        },
        err => { console.log(err); })
  
   }
  
  }

}
