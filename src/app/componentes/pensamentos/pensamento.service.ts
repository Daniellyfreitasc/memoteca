import { Injectable } from '@angular/core'; //Decorator - Injectable - classe injetável
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'  
})
export class PensamentoService {

  constructor(private http: HttpClient) { }
}
