import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';
import { IUsuario } from '../Datos/IUsuario';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements AfterViewInit {
  @ViewChild(HijoComponent) hijo: any;
  messagePadre: String = "";
  messageEvent:String="";
  Usuario:IUsuario[] | undefined ;

  ngAfterViewInit(): void {
    this.messagePadre = this.hijo.message;

    this.Usuario=[{id:1,username:'Juan',password:'abc123',fullname:'Juan Perez'},
                  {id:2,username:'Pedro',password:'abc456',fullname:'Pedro Perez'},
                  {id:3,username:'Miguel',password:'abc456',fullname:'Miguel Soto'}];

  }

  reciveMessage($event:any){
    this.messageEvent=$event;
  }


}
