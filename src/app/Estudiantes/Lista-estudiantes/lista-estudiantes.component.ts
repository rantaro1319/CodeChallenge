import { Component, OnInit} from '@angular/core' 
import { Estudents } from '../shared/estudents.model';
import { StudentsService } from '../shared/students.service';

@Component({
  selector: 'lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html'

})
export class ListaEstudianteComponent implements OnInit {
  
  constructor(public service : StudentsService){}
  
  ngOnInit(){

    this.service.refreshList();
  }

  SeleccionaRegistro(pd:Estudents){

    this.service.formData = Object.assign({},pd);
  }
    
 onDelete(Id){
  if (confirm('Estas seguro que quieres borrar este registro?')) {
    this.service.Deletestudiante(Id)
      .subscribe(res => {
        this.service.refreshList();
      },
      err => { console.log(err); })
 }

}

}
 