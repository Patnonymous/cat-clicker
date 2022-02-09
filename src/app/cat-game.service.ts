import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatGameService {
  // The way this works might change.
  currentPoints = 5;
  pointsChanged: Subject<number> = new Subject<number>();

  constructor() {
    this.pointsChanged.subscribe((value) => {
      this.currentPoints = value;
    })
  }

  getPoints() {
    return this.currentPoints;
  }

  addPoints(numberToAdd: number) {
    let newPointsValue = this.currentPoints + numberToAdd;
    this.pointsChanged.next(newPointsValue);
    console.log("New points: ", this.currentPoints);
  }
}
