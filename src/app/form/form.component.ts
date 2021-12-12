import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() createdQuote = new EventEmitter<{quote:string,author:string,blogger:string}>();
  newQuote = '';
  newAuthor = '';
  newBlogger = '';


  addQuote(){
    this.createdQuote.emit({quote:this.newQuote,author:this.newAuthor,blogger:this.newBlogger});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
