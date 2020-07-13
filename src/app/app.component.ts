import { Component, ViewChild } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText= lorem.sentence();
  enteredText = '';
  @ViewChild("inputBox") inputBox;

  onChangeInput(value: string)
  {
    console.log(value);
    this.enteredText = value;
  }

  generateNewText()
  {
    this.randomText = lorem.sentence();
    this.enteredText = '';
    console.log(this.inputBox);
    this.inputBox.nativeElement.focus();
  }
  compText(generatedLetter: string, enteredLetter: string)
  {
    if(!enteredLetter)
      return 'pending';
    return generatedLetter == enteredLetter ? 'correct' : 'incorrect';
  }

}
