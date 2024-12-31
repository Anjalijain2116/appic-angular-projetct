import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit{
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  parentMessage: string = "Message from Parent";
  message: string = '';
  data:string[] = [];

  receiveMessage($event: string) {
    this.message = $event;
  }
}