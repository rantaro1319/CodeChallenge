import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from './curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  formData = new Curso();
readonly rootURL = 'https://localhost:44389/api';
constructor(private http:HttpClient) { }
list : Curso[];


postNuevoCurso(){
 return this.http.post(this.rootURL+'/curso',this.formData);

}

crefreshList(){

  this.http.get(this.rootURL+'/curso').toPromise().then(res => this.list = res as Curso[]);
}

}