import { Component } from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `<h1>Default</h1>
  <h2>Hello World!</h2>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'List of courses';
  courses;

  constructor(service: AppService) {
    this.courses = service.getCourses();
  }
}
