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
        ()=>
        {
          alert("Persona Salvata");
          //svuota la form
          this.personaDaInserire = {n:"",c:"",e:0};
        }
      );
  }


  //subscribe(funz)
  //{
  //    funz(bodyDellaResponse);
  //}
}
