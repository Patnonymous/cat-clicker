import { Component, OnInit } from '@angular/core';
import { Cat } from '../cat';
import { CatGameService } from '../cat-game.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit {

  catData: Cat = {
    id: -1,
    name: 'Default Cat',
    description: 'Default development cat.',
    imageSource: '../../assets/cats/cat_1_normal.png',
  };

  constructor(private catGameService: CatGameService) { };

  ngOnInit(): void {
  };

  catClicked() {
    this.catGameService.addPoints(1);
  };

};
