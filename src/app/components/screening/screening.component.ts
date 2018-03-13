import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-screening",
  templateUrl: "./screening.component.html",
  styleUrls: ["./screening.component.css"]
})
export class ScreeningComponent implements OnInit {
  // batches: string[] = ["Programming", "Example Business Category", "Example .NET Category", "Example Pega Category"];
  
  skills: string[] = ["Java", "C++", "C#", "Spring", "Threads"];
  answers: string[] = [
    "No answer provided",
    "Referenced term(s), no definition(s) provided",
    "Average - Example: Lorem, ipsum dolor sit  adipisicing elit. Qui, ut.",
    "Above average - Example: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, ut.",
    `Best - Example: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat corporis tenetur 
    delectus ullam doloribus veritatis distinctio libero numquam officia aliquid?`
  ];
  areSkillsConfirmed = false;
  currentTopic: string;
  topics: string[] = ["Core Java", "Advanced Java", "Web", "SQL"];

  i = 0;
  currentQuestion: string;
  questions: string[] = [
    "Sample question 1",
    "Sample question 2",
    "Sample question 3",
    "Sample question 4"
  ];
  j = 0;
  selectedQuestion: Number;
  selectedAnswer: Number;
  isQuestionSelected = false;
  isAnswerSelected = false;
  finished = false;

  constructor() {
    // for testing / mockup
    this.currentTopic = this.topics[this.i];
    this.currentQuestion = this.questions[this.j];
  }

  ngOnInit() {}

  confirmSkills(){
    this.areSkillsConfirmed = true;
  }

  selectQuestion(j) {
    if (!this.isQuestionSelected) {
      this.currentQuestion = this.questions[j];
      this.selectedQuestion = j;
      this.isAnswerSelected = false;
      this.isQuestionSelected = true;
    } else {
      this.isQuestionSelected = false;
    }
  }

  selectAnswer(i) {
    // Need to save the selected answer of each question in a 
    // key value array
    if (!this.isAnswerSelected) {
      this.selectedAnswer = i;
      this.isAnswerSelected = true;
      this.isQuestionSelected = false;
    }
  }

  nextTopic() {
    this.i++;
    if (this.i < this.topics.length) this.currentTopic = this.topics[this.i];
    this.isAnswerSelected = false;
    this.isQuestionSelected = false;
  }

  nextQuestion() {
    this.j++;
    if (this.j < this.questions.length) {
      this.currentQuestion = this.questions[this.j];
    }
    this.isAnswerSelected = false;
    this.isQuestionSelected = false;
  }

  toggle() {
    this.finished = true;
  }

  onSubmit() {}
}
