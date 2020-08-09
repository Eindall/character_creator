import { Component, OnInit } from '@angular/core';
import { ApiService } from "../service/api.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  characters: any;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getCharacters().subscribe(
      res => {
        this.characters = res;
      }, err => {
        console.log(err);
      }
    );
  }

  goToCharacter(character: any): void {
    if (character && character._id && character.game) {
      this.router.navigate([character.game, 'details', character._id]);
    }
  }
}
