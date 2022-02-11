import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatGameService {
  // The way this works might change.
  currentPoints = 0;
  pointsChanged: Subject<number> = new Subject<number>();

  constructor() {
    this.pointsChanged.subscribe((value) => {
      this.currentPoints = value;
      this.saveData();
    });
    this.loadData();
  }

  getPoints() {
    return this.currentPoints;
  };

  addPoints(numberToAdd: number) {
    const TAG = '\ncat-game service addPoints(), ';
    console.log(TAG + 'Will add this many points: ', numberToAdd);
    let newPointsValue = this.currentPoints + numberToAdd;
    this.pointsChanged.next(newPointsValue);
  };

  saveData() {
    const TAG = '\ncat-game service saveData(), ';
    let userData = {
      points: this.currentPoints,
    };
    localStorage.setItem('saveData', JSON.stringify(userData));
    console.log(TAG + "Successfully saved data.");
  };

  loadData() {
    const TAG = '\ncat-game service loadData(), ';
    let dataLoadResult = localStorage.getItem('saveData');
    console.log(TAG + "dataLoadResult: ", dataLoadResult);
    if (dataLoadResult !== null) {
      const usersData = JSON.parse(dataLoadResult);
      console.log('User save data exists: ', usersData);
      this.currentPoints = usersData.points;
    }
  }
}
