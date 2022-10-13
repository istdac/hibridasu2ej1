import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public photos = []
  constructor() {
    this.photos=[
      {
        name:"Foto 1",
        description:"blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada",
        url:"https://picsum.photos/id/1016/300"
      },
      {
        name:"Foto 2",
        description:"blandit cursus risus ",
        url:"https://picsum.photos/id/1026/300"
      },
      {
        name:"Foto 3",
        description:"mi tempus imperdiet nulla malesuada",
        url:"https://picsum.photos/id/126/300"
      }
    ]
  }

}
