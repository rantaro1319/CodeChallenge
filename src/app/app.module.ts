import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { NuevoEstudianteComponent } from './Estudiantes/nuevo-estudiante.component';
import { ListaEstudianteComponent } from './Estudiantes/Lista-estudiantes/lista-estudiantes.component';
import { UnionComponent } from './Estudiantes/Union/Union.component';
import { StudentsService } from './Estudiantes/shared/students.service';
import { NuevoProfesorComponent } from './Profesores/nuevo-profesor/nuevo-profesor.component';
import { ListaProfesoresComponent } from './Profesores/lista-profesores/lista-profesores.component';
import { PunionComponent } from './Profesores/union/punion.component';
import { NuevoCursoComponent } from './Curso/nuevo-curso/nuevo-curso.component';
import { RouterModule, Routes } from '@angular/router';
import { ListaCursosComponent } from './Curso/lista-cursos/lista-cursos.component';
import { CunionComponent } from './Curso/union/union.component';


const rutas: Routes = [

{

  path: '',
  pathMatch: 'full',
  redirectTo: 'estudiantes'

},

{
  
  path: 'estudiantes',
 component: UnionComponent

},
{
  
  path: 'profesores',
 component: PunionComponent

},

{
  
  path: 'cursos',
 component: CunionComponent

}

]

@NgModule({
  declarations: [
    AppComponent,
    NuevoEstudianteComponent,
    ListaEstudianteComponent,
    UnionComponent,
    NuevoProfesorComponent,
    ListaProfesoresComponent,
    PunionComponent,
    CunionComponent,
    NuevoCursoComponent,
    ListaCursosComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
      
    RouterModule.forRoot(rutas)
    
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
