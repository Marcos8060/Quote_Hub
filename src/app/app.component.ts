import { QuoteComponent } from './quote/quote.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:any[] = [{id:0,quote:'Home is best',author:'Marcos',blogger:'Trevor'}];


  onCreatedQuote(quoteData:{quote:string,author:string,blogger:string}){
    this.quotes.push({
      id: 1,
      quote: quoteData.quote,
      author: quoteData.author,
      blogger: quoteData.blogger
    })
  }

}

