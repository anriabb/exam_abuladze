import { Component } from '@angular/core';
import { Input, Output } from '@angular/core';
import { ParentUser } from '../parent-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() users: ParentUser[] = [];
  @Output() childUsers = new EventEmitter<ChildUser[]>();

  constructor(private displayService: DisplayService) {}

  displayUsers(): void {
    this.displayService.displayArray(this.users);
  }

}

