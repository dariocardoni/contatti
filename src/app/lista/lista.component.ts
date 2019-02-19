import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent  {
 contatti=[

{nome:'Mario',cognome:'Rossi',citta:'Roma'},
{nome:"Ludovico",cognome:"Carosi", citta:"Roma"},
{nome:"Riccardo",cognome:"Baffioni", citta:"Firenze"}


 ]

  constructor() { }

  ngOnInit() {
  }

}
