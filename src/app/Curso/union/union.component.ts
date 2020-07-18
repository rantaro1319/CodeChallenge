import { Component, OnInit } from '@angular/core';
import { CursoService } from '../shared/curso.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-union',
  templateUrl: './union.component.html',
  styles: []
})
export class CunionComponent implements OnInit {

  constructor(private cservice : CursoService) { }

  ngOnInit() {
     
  }


}