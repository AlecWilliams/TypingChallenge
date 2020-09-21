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

  time: number = 0;
  interval;


  



  generateNewText()
  {
    this.randomText = lorem.sentence();
    this.enteredText = '';
    //console.log(this.inputBox);
    this.inputBox.nativeElement.focus();
  }

  inputChange(){
    if(this.enteredText.length == 1)
    {
      this.startTimer();
    }
   else if(this.enteredText == this.randomText)
   {
     this.pauseTimer()
     console.log(this.time / 100.00, 'Timer')
   }

  }
  compText(generatedLetter: string, enteredLetter: string)
  {
    if(!enteredLetter)
      return 'pending';
  
    return generatedLetter == enteredLetter ? 'correct' : 'incorrect';
  }

  startTimer() {
    
    this.interval = setInterval(() => {
      this.time++;
    },10)
  }

  pauseTimer() {
   
    clearInterval(this.interval);
  }
}
