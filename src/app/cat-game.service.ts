import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatGameService {
  // The way this works might change.
  currentPoints = 0;
  userName = "Cat Clicker User"
  pointsChanged: Subject<number> = new Subject<number>();
  userNameChanged: Subject<string> = new Subject<string>();

  constructor() {
    this.pointsChanged.subscribe((value) => {
      this.currentPoints = value;
      this.saveData();
    });
    this.userNameChanged.subscribe((value) => {
      this.userName = value;
      this.saveData();
    })
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

  getUserName() {
    return this.userName;
  };

  editUserName(newName: string) {
    const TAG = "\ncat-game service editUserName(), ";
    console.log(TAG + "Name Changed to: ", newName);
    this.userNameChanged.next(newName);
  };

  saveData() {
    const TAG = '\ncat-game service saveData(), ';
    let userData = {
      name: this.userName,
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
      this.userName = usersData.name;
      this.currentPoints = usersData.points;
    }
  }
}
