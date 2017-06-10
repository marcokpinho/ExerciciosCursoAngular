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
    private categoriaService:CursoService,
    private produtoService:AlunoService,
    private pedidoService:DisciplinaService
    ) { }

  ngOnInit() {
    this.atualiza();
  }

  atualiza(){
    this.categoriaService.getAll().then(response=>{
      this.listaCurso=response.values;
    });
    this.produtoService.getAll().then(response=>{
      this.listaAluno=response.values;
    });
    this.pedidoService.getAll().then(response=>{
      this.listaDisciplina=response.values;
    });


  }

}
