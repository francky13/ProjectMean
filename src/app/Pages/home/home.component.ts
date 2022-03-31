import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;
  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

    tiles: any[] = [
      {url: '../../../assets/image/logo.png',
      cols: 1,
      rows: 6,
      Text: 'Acceder a l administration E-kaly.',
      routerLink: '/Register',
      texteLink: 'Acceder a la page Administration'

    },
    {url: '../../../assets/image/chef.png',
    cols: 1,
    rows: 6,
    Text: ' Inscrivez votre restaurant ',
    routerLink: '/Register',
    texteLink: 'Accedez a la page  Restaurant'
    },
    {url: '../../../assets/image/coursier.png',
    cols: 1,
    rows: 6,
    Text: 'Livrez avec E-kaly',
    routerLink: '/Register',
    texteLink: 'Acceder a la page coursier-partenaire'
  }
    ];


}
