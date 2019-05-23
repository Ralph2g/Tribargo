import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gustos-usuario',
  templateUrl: './gustos-usuario.component.html',
  styleUrls: ['./gustos-usuario.component.css']
})
export class GustosUsuarioComponent implements OnInit {
 
  marks: string [] = ['XX','Carta Blanca','Indio', 'Corona', 'Heineken'];
  genres: string [] = ['Rock','Reggaeton','Pop', 'Banda', 'Bachata','Ranchera'];
  selection1: string [] = [];
  selection2: string [] = [];
  
  insertMark(mark){
    let repetir = 0;
    for(let i=0; i< this.selection1.length; i++)
    {
      if(mark == this.selection1[i])
      {
        repetir = 1;
      }     
    }
    if(repetir == 0 )
    {
      this.selection1.push(mark);
    }
  }

  insertGenre(genre){
    let repetir = 0;
    for(let i=0; i< this.selection2.length; i++)
    {
      if(genre == this.selection2[i])
      {
        repetir = 1;
      }     
    }
    if(repetir == 0 )
    {
      this.selection2.push(genre);
    }
  }

  deleteMark(select1){
    for(let i=0; i< this.selection1.length; i++)
    {
      if(select1 == this.selection1[i])
      {
        this.selection1.splice(i,1);      
      }
    }
  }
  deleteGenre(select2){
    for(let i=0; i< this.selection2.length; i++)
    {
      if(select2 == this.selection2[i])
      {
        this.selection2.splice(i,1);      
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
