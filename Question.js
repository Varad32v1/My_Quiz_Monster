class Question {
  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h2');
    this.option1 = createElement('h3');
    this.option2 = createElement('h3');
    this.option3 = createElement('h3');
    this.option4 = createElement('h3');
    this.rule = createElement('h2');
    this.rule1 = createElement('h2');
  }
  
  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.rule.hide();
    this.rule1.hide();
  }
  
  display(){

    this.title.html("My Quiz Game");
    this.question.html("Question:- An astronaut in outer space will observe sky as____ " );
    this.option1.html("1: White " );
    this.option2.html("2: Blue " );
    this.option3.html("3: Black " );
    this.option4.html("4: Red " );
    this.rule.html("Wait for 4 contestant to start the game" );
    this.rule1.html("Enter answer only in numbers" );

    this.option4.position(150, 160);
    this.option3.position(150, 140);
    this.option2.position(150, 120);
    this.option1.position(150, 100);
    this.question.position(150, 70);
    this.title.position(350, 0);
    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.rule.position(200, 475);
    this.rule1.position(250, 430);
    this.button.position(290, 300);
  
    this.button.mousePressed(()=>{
      this.input1.hide();
      this.button.hide();
      this.input2.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}