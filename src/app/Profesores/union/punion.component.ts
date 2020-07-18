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
   
  }

  
}
