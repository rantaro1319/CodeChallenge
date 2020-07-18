import { Injectable } from '@angular/core';
import { Profesor } from './profesor.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  formData = new Profesor();
  readonly rootURL = 'https://localhost:44389/api';
  constructor(private http:HttpClient) { }
  list : Profesor[];
  
  
  postNuevoProfesor(){
   return this.http.post(this.rootURL+'/profesores',this.formData);
  
  }
  
  prefreshList(){
  
    this.http.get(this.rootURL+'/profesores').toPromise().then(res => this.list = res as Profesor[]);
  }

  Updateprofesor()
  {
     return this.http.put(this.rootURL+'/profesores/'+ this.formData.Id,this.formData);
  }
  
  Deleteprofesor(id)
  {
     return this.http.delete(this.rootURL+'/profesores/'+ id);
  } 
  
  }
