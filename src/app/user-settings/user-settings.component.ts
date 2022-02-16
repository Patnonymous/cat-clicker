import { Component, OnInit } from '@angular/core';
import { CatGameService } from '../cat-game.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  // Vars.
  userNameToDisplay: string = "Default Username";
  isEditingUserName: boolean = false;
  userNameEntry: string = "";

  constructor(private catGameService: CatGameService) {
    this.catGameService.userNameChanged.subscribe((value) => {
      this.userNameToDisplay = value;
    })
  }

  ngOnInit(): void {
    this.userNameToDisplay = this.catGameService.getUserName();
  }

  enableUserNameEdit(): void {
    this.userNameEntry = this.userNameToDisplay;
    this.isEditingUserName = true;
  };

  disableUserNameEdit(): void {
    this.userNameEntry = "";
    this.isEditingUserName = false;
  };

  changeUserName(): void {
    this.catGameService.editUserName(this.userNameEntry);
    this.disableUserNameEdit();
  };

}
