import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = new FormGroup({
      fname: new FormControl('Rahul'),
      lname: new FormControl(),
      address: new FormGroup({
          street: new FormControl(),
          city: new FormControl(),
          zip: new FormControl()
      })
  });

  onSubmit(){
      console.log(this.user.value);
  }
}
