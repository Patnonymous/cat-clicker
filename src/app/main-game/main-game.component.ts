import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CatGameService } from '../cat-game.service';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.scss']
})
export class MainGameComponent implements OnInit {
  // Variables.
  pointsToDisplay: number = 0;

  constructor(private titleService: Title, private catGameService: CatGameService) {
    this.catGameService.pointsChanged.subscribe(value => {
      this.pointsToDisplay = value;
    })
  }

  ngOnInit(): void {
    this.titleService.setTitle("Game Screen");
    this.pointsToDisplay = this.catGameService.getPoints();
  };

}
