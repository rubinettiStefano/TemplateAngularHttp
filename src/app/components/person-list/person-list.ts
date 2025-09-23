import { Component } from '@angular/core';
import {PersonaGet} from '../../model/PersonaGet';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-person-list',
  imports: [],
  templateUrl: './person-list.html',
  styleUrl: './person-list.css'
})
export class PersonList
{
  all:PersonaGet[] = [];
  // dependency injection, come @Autowired, in spring sarebbe
  //@Autowired
  //HttpClient http;
  constructor(private http:HttpClient)
  {
    //this.http prende l'oggetto autowirato (iniettato)
    // .get diciamo di fare una REQUEST con VERBO GET
    //                          "/persons" indichiamo URI, l'url lo ho preimpostato io, mettete solo parte dopo localhost:8080
    //           <PersonaGet[]> è equivalente al @RequestBody di Spring
    //          converti in JSON in un Array di Oggetti PersonaGet
    this.http.get<PersonaGet[]>("/api/persons")
      .subscribe //cosa fare dopo che la response arriva, vuole una arrow function, la "lambda" di js
      (
        (json) =>
        {
          console.log(json);
          this.all=json
        }
      );
  }

}
