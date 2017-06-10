import { Injectable } from '@angular/core';
import { SuperService} from './comum/superservice.service';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class DisciplinaService extends SuperService{

  constructor( http: Http) {
    super('pedido',http);
   }

  
}
