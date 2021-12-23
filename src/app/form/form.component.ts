import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Quote } from '../quote.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('quoteInput') quoteInputRef! : ElementRef;
  @ViewChild('authorInput')authorInputRef!: ElementRef;
  @ViewChild('bloggerInput')bloggerInputRef!: ElementRef;

  @Output() quoteAdded = new EventEmitter<Quote>();

  constructor() { }

  ngOnInit(): void {
  }

  addQuote(){
    const quote = this.quoteInputRef.nativeElement.value;
    const author = this.authorInputRef.nativeElement.value;
    const blogger = this.bloggerInputRef.nativeElement.value;
    const addedQuote = new Quote(Quote.getRandomId(),quote,author,blogger);
    this.quoteAdded.emit(addedQuote);
  }

}
