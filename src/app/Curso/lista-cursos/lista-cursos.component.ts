import { Component, OnInit } from '@angular/core';
import { CursoService } from '../shared/curso.service';
import { Curso } from '../shared/curso.model';

@Component({
  selector: 'lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styles: []
})
export class ListaCursosComponent implements OnInit {

  constructor(public cservice : CursoService) { }

  ngOnInit(){

    this.cservice.crefreshList();
  }

  SeleccionaRegistro(cd:Curso){

    this.cservice.formData = Object.assign({},cd);
  }
    
  }