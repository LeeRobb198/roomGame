import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-room',
  templateUrl: './basic-room.component.html',
  styleUrls: ['./basic-room.component.css']
})
export class BasicRoomComponent implements OnInit {

  ourRoom;
  currentRoomName = "5";
  numberOfDoors = 0;
  newItem = new FormControl('');

  constructor(private apiService: ApiService) {
    this.getRoomByName(this.currentRoomName);
    this.numberOfDoors = 0;
  }

  ngOnInit() {
  }

  getRoomByName(name){
    this.apiService.getRoomByName(name).subscribe((data) => {
      this.ourRoom = data[0];
      this.currentRoomName = this.ourRoom.name;
      this.numberOfDoors = this.numberOfDoors + 1;
    });
  }

  addItemToRoom(myItem){
    this.ourRoom.items.push(myItem);
    this.apiService.updateRoomByName(this.ourRoom.name, this.ourRoom).subscribe((data) => {
    })
  }

}
