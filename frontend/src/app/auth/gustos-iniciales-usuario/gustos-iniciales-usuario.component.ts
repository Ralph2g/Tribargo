import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gustos-iniciales-usuario',
  templateUrl: './gustos-iniciales-usuario.component.html',
  styleUrls: ['./gustos-iniciales-usuario.component.css']
})
export class GustosInicialesUsuarioComponent implements OnInit {  
  
  marks: string [] = ['Cerveza','Whiskey','Ron','Vodka','Cognac','Vino','Brandy','Tequila'];
  genres: string [] = ['Reggaeton','Salsa','Banda', 'Rock', 'Cumbia','Nortenha','Trap','Electronica','House','Hip hop','Rap','Merengue','Ranchera','Disco','Bachata','Corrido'];
  selection1: string [] = [];
  selection2: string [] = [];
  salida1: string [] = [];
  salida2: string [] = [];
  constructor(){

  }
  
  public insertMark(mark){
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

  public insertGenre(genre){
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

  public generaSal1(){
    for(let k=0; k < this.marks.length;k++)  
    {
      this.salida1[k] = '0';
    }
    for(let j=0; j<this.selection1.length;j++)
    {
      for(let i=0; i< this.marks.length; i++)
      {
        if(this.selection1[j] == this.marks[i])
        {
          this.salida1[i] = '1';
        }
      }
    }
  }

   public generaSal2(){
    for(let k=0; k < this.genres.length;k++)  
    {
      this.salida2[k] = '0';
    }
    for(let j=0; j<this.selection2.length;j++)
    {
      for(let i=0; i< this.genres.length; i++)
      {
        if(this.selection2[j] == this.genres[i])
        {
          this.salida2[i] = '1';
        }
      }
    }
  }
  
  public deleteMark(select1){
    for(let i=0; i< this.selection1.length; i++)
    {
      if(select1 == this.selection1[i])
      {
        this.selection1.splice(i,1);      
      }
    }
  }
  public deleteGenre(select2){
    for(let i=0; i< this.selection2.length; i++)
    {
      if(select2 == this.selection2[i])
      {
        this.selection2.splice(i,1);      
      }
    }
  }

  ngOnInit() {
  }

  enviarDatos(){
    
  }

}
