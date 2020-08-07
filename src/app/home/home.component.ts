import { Component, OnInit } from '@angular/core';
import { ApiService } from "../service/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  characters: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getCharacters().subscribe(
      res => {
        console.log(res);
        this.characters = res;
      }, err => {
        console.log(err);
      }
    );
  }

}
