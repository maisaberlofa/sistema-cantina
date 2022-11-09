import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor() { }

  clientes =
    [{
      id: 1,
      name: 'Teste1',
      user: 'usuarioteste',
      date: '15/10/2022'
    },
    {
      id: 2,
      name: 'Teste2',
      user: 'usuarioteste',
      date: '15/10/2022'
    },
    {
      id: 3,
      name: 'Teste3',
      user: 'usuarioteste',
      date: '15/10/2022'
    },
    {
      id: 4,
      name: 'Teste4',
      user: 'usuarioteste',
      date: '15/10/2022'
    }];

  ngOnInit(): void {
  }

}
