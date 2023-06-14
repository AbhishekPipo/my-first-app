import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  // providers: [CoursesService]
})
export class CoursesComponent {
title="List of courses"

courses: string[]=[];


// @here we need to add logic for http request



// getTitle(){
//   return this.title;
// } 


constructor (private service: CoursesService){
//  let service=  new  CoursesService(); //@ this is tightly coupled exactly same like before
 this.courses=service.getCourses();
}
}
