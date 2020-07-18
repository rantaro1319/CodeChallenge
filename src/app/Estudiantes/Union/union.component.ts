import { Component, OnInit} from '@angular/core' 
import { StudentsService } from '../shared/students.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'union-todo',
  templateUrl: './union.component.html'

})
export class UnionComponent implements OnInit {

  constructor(private service : StudentsService) { }

  ngOnInit() {
     
  }

}