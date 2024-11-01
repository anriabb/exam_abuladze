import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  
  displayArray(childParent: any[]): void {
    console.log("Array is displayed by Display service");
    childParent.forEach(item => console.log(item));
  }

}
