import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gustos-usuario',
  templateUrl: './gustos-usuario.component.html',
  styleUrls: ['./gustos-usuario.component.css']
})
export class GustosUsuarioComponent implements OnInit {
 
  marks: string [] = ['Cerveza','Whiskey','Ron','Vodka','Cognac','Vino','Brandy','Tequila'];
  genres: string [] = ['Reggaeton','Salsa','Banda', 'Rock', 'Cumbia','Nortenha','Trap','Electronica','House','Hip hop','Rap','Merengue','Ranchera','Disco','Bachata','Corrido'];
  offerts: string [] = ['2x1','Chicas gratis','Cumpleanero','Sin cover']; 
  selection1: string [] = [];
  selection2: string [] = [];
  selection3: string [] = [];
  cadenafinal: string [] = [''];
  presupuesto: string = '500';
  edad: string = '18';
  sexo: string = 'masculino';
  bar: string ='Brazilian Terraza & Grill';

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

  public insertOffert(offert){
    let repetir = 0;
    for(let i=0; i< this.selection3.length; i++)
    {
      if(offert == this.selection3[i])
      {
        repetir = 1;
      }     
    }
    if(repetir == 0 )
    {
      this.selection3.push(offert);
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

  public deleteOffert(select3){
    for(let i=0; i< this.selection3.length; i++)
    {
      if(select3 == this.selection3[i])
      {
        this.selection3.splice(i,1);      
      }
    }
  }

  public generaCadenaFinal(){
    //Insertar el presupuesto
    this.cadenafinal.push(this.presupuesto);
    this.cadenafinal.push('@');
    //Insertar la edad
    this.cadenafinal.push(this.edad);
    this.cadenafinal.push('@');
    //Insertar el sexo
    this.cadenafinal.push(this.sexo);
    this.cadenafinal.push('@');
    //Insertar gustos en bebidas
     /* select1 */
    for(let k=0; k < this.marks.length;k++)  
    {
      this.cadenafinal[k+7] = '0';
    }
    for(let j=0; j<this.selection1.length;j++)
    {
      for(let i=0; i< this.marks.length; i++)
      {
        if(this.selection1[j] == this.marks[i])
        {
          this.cadenafinal[i+7] = '1';
        }
      }
    }
     /* */
    this.cadenafinal.push('@');
    //Insertar gustos en musica
    /* */
    for(let k=0; k < this.genres.length;k++)  
    {
      this.cadenafinal[k+16] = '0';
    }
    for(let j=0; j<this.selection2.length;j++)
    {
      for(let i=0; i< this.genres.length; i++)
      {
        if(this.selection2[j] == this.genres[i])
        {
          this.cadenafinal[i+16] = '1';
        }
      }
    }
     /* select2 */
    this.cadenafinal.push('@');
    //Insertar gustos en ofertas
     /* select 3*/
     for(let k=0; k < this.offerts.length;k++)  
    {
      this.cadenafinal[k+33] = '0';
    }
    for(let j=0; j<this.selection3.length;j++)
    {
      for(let i=0; i< this.offerts.length; i++)
      {
        if(this.selection3[j] == this.offerts[i])
        {
          this.cadenafinal[i+33] = '1';
        }
      }
    }
     /* */
    this.cadenafinal.push('@');
    //Insertar bar
    this.cadenafinal.push(this.bar);
  }

  ngOnInit() {
  }

  enviarDatos(){
    
  }

}
