import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gustos-usuario',
  templateUrl: './gustos-usuario.component.html',
  styleUrls: ['./gustos-usuario.component.css']
})
export class GustosUsuarioComponent implements OnInit {
 
  marks: string [] = ['Cerveza','Cognac','Tequila', 'Whiskey', 'Ron', 'Brandy', 'Vodka'];
  genres: string [] = ['Rock','Reggaeton','Pop', 'Banda', 'Bachata','Ranchera'];
  offers: string [] = ['2x1','Barra libre','Mujeres no pagan'];
  snacks: string [] = ['Totopos','Nachos','Papas','Pizza','Chicharrones'];
  selection1: string [] = [];
  selection2: string [] = [];
  selection3: string [] = [];
  selection4: string [] = [];
  
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

  insertOffers(offer){
    let repetir = 0;
    for(let i=0; i< this.selection3.length; i++)
    {
      if(offer == this.selection3[i])
      {
        repetir = 1;
      }     
    }
    if(repetir == 0 )
    {
      this.selection3.push(offer);
    }
  }

  insertSnacks(snack){
    let repetir = 0;
    for(let i=0; i< this.selection4.length; i++)
    {
      if(snack == this.selection4[i])
      {
        repetir = 1;
      }     
    }
    if(repetir == 0 )
    {
      this.selection4.push(snack);
    }
  }

  /*anMark(mark){
    let repetir = 0;
    for(let i=0; i< this.selection1.length; i++)
    {
      if(mark.value == this.selection1[i])
      {
        repetir = 1;
      }     
    }
    if(repetir == 0 )
    {
      this.selection1.push(mark.value);
    }
  }  */
  
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

  deleteOffers(select3){
    for(let i=0; i< this.selection3.length; i++)
    {
      if(select3 == this.selection3[i])
      {
        this.selection3.splice(i,1);      
      }
    }
  }

  deleteSnacks(select4){
    for(let i=0; i< this.selection4.length; i++)
    {
      if(select4 == this.selection4[i])
      {
        this.selection4.splice(i,1);      
      }
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
