import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {

    firebase.initializeApp({
      apiKey: 'AIzaSyBEzkYGF6HIY0ivM8C8AVSzEJDQu_43XhY',
      authDomain: 'geekapp-470ff.firebaseapp.com'
    });

  }

}
