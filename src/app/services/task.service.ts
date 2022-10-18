import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: string[]=[];
  constructor() {
    //Tener informacion al inicio
    this.tasks.push("Tarea 1");
    this.tasks.push("Tarea 2");
   }
}
