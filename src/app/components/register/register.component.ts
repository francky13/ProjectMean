import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/Services/hero.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  User: any ;
  constructor(private info : HeroService) { }

  ngOnInit(): void {
    this.actualiter();
  }

  actualiter(){
    this.info.getinfo().subscribe(
    (res) => {
       const temps = res as any;
       this.User = temps['resultat'];
       console.log(this.User);
    }
  );
}
}
