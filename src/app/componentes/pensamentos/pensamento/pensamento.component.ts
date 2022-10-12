import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  
  //Este comando (@Input) informa para o componente "filho" que passará a receber informações do componente "pai".
  @Input ()  pensamento = {
    conteudo: 'I love Angular',
    autoria: 'Danielly',
    modelo: 'modelo1'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
