import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Crear atributo para tareas
  public tasks:string[];
  public task:string;
  //Conectarse al servicio al entrar al homepage
  //Tener que importar servicio como parametro para poder manejarlo
  //Al instanciar el taskservice se corre su constructor
  constructor(private taskService:TaskService) {
    this.tasks=this.taskService.getTasks();
    this.task="algo";
  }

}
