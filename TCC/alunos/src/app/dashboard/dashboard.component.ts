import { Component, OnInit } from '@angular/core';
import {CursoService} from '../curso.service';
import {AlunoService} from '../aluno.service';
import {DisciplinaService} from '../disciplina.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  listaCurso:any[];
  listaAluno:any[];
  listaDisciplina:any[];

  constructor(
    private cursoService:CursoService,
    private alunoService:AlunoService,
    private disciplinaService:DisciplinaService
    ) { }

  ngOnInit() {
    this.atualiza();
  }

  atualiza(){
    this.cursoService.getAll().then(response=>{
      this.listaCurso=response.values;
    });
    this.alunoService.getAll().then(response=>{
      this.listaAluno=response.values;
    });
    this.disciplinaService.getAll().then(response=>{
      this.listaDisciplina=response.values;
    });


  }

}
