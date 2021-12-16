import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote.model';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input() quote!: Quote;
  constructor() { }
  @Output() quoteRemoved = new EventEmitter<void>();

  ngOnInit(): void {
  }

  removeQuote(id:number){
    this.quoteRemoved.emit();
  }

}
