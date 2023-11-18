import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  message:String="Me estoy comunicando desde el componente hijo";
  message2:string="Esto en un mensaje desde emitter";
  ngOnInit(): void {        
  }

  @Input() name='';
  @Input() subname='';
  @Output() messageEvent = new EventEmitter<string>();
  
  sendMessage(){
    this.messageEvent.emit(this.message2);
  }



}
