import {Component, Injectable} from "@angular/core";

@Injectable()
export class AppService {
  getCourses() {
    return ["course1", "course2", "course3"];
  }
}
