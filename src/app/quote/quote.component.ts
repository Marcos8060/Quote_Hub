import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input() singleQuote!:{quote:string,author:string,blogger:string};


  constructor() { }

  ngOnInit(): void {
  }


}
