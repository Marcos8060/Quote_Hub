
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
      'Whenever you feel like giving up,remember why you started in the first place',
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

