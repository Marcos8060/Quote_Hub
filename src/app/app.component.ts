
import { Component } from '@angular/core';
import { Quote } from './quote.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes : Quote[] = [
    new Quote(
      Quote.generateRandomId(),
      'In order to get something you never had, you have to do something you never did',
      'Coach pain',
      'Marcos Ochieng')
  ];

  onAddQuote(quote:Quote){
    this.quotes.push(quote);
  }
  removedQuote(id:number){
    this.quotes = this.quotes.filter((quote)=> quote.id != id)
  }
}

