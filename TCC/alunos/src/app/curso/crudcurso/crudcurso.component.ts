import { Component, OnInit } from '@angular/core';
import { CursoService} from '../../curso.service';
import { SuperCrud} from '../../comum/supercrud.component';

@Component({
  selector: 'crudcurso',
  templateUrl: './crudcurso.component.html',
  styleUrls: ['./crudcurso.component.css']
})
export class CrudcursoComponent extends SuperCrud implements OnInit {
  constructor(service: CursoService) {
    super(service);
  }
}
