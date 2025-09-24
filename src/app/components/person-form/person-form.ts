import { Component } from '@angular/core';
import {PersonaPost} from '../../model/PersonaPost';
import {FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-person-form',
  imports: [
    FormsModule
  ],
  templateUrl: './person-form.html',
  styleUrl: './person-form.css'
})
export class PersonForm
{
  personaDaInserire:PersonaPost = {n:"",c:"",e:0};

  //inietta un oggetto di tipo HttpClient
  //chiamando http
  constructor(private http:HttpClient) {
  }

  salva()
  {
    this.http.post("/api/persons",this.personaDaInserire)
      .subscribe(
        //success
        ()=>
        {
          alert("Persona Salvata");
          //svuota la form
          this.personaDaInserire = {n:"",c:"",e:0};
        },
        //error
        (err)=>
        {
          //per prendere il messaggio di errore o il tipo nel json
          let messaggio = err.error.msg;
          let tipo = err.error.type;
          alert("Salvataggio fallito perchè "+messaggio);
        }
      );
  }


  //subscribe(funz)
  //{
  //    funz(bodyDellaResponse);
  //}
}
