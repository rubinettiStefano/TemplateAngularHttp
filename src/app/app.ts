import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PersonList} from './components/person-list/person-list';
import {PersonForm} from './components/person-form/person-form';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [
    PersonList,
    PersonForm
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App
{
  mostraLista:boolean = true;

  constructor()
  {
  }

}
