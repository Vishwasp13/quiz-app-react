import React,{Component} from 'react';
import './App.css';
import Questions from './data/questions.json';


class App extends Component{

  constructor(){
    super();
    this.state = {
      key: Questions.questions.map(questions =>questions.id),
      questions: Questions.questions.map(questions =>questions.question),
      options: Questions.questions.map(questions =>questions.options.option.map(option => option.value)),
      answers: Questions.questions.map(questions =>questions.answer),
      currentQuestionNumber:0,
      previousQuestionNumber: 0
    };
    console.log(this.state);
  }

  handleClick = () => {
        this.setState({previousQuestionNumber: this.state.currentQuestionNumber,currentQuestionNumber: (this.state.currentQuestionNumber+1)});
  }

  handlePreviousClick = () => {
    if(this.state.previousQuestionNumber !=0){
      this.setState({currentQuestionNumber:this.state.previousQuestionNumber, 
        previousQuestionNumber:(this.state.previousQuestionNumber-1)})
    }
  }

  render(){
    return (
      <div className="App">
        
        

         
           <div>
           <ul>{this.state.questions[this.state.currentQuestionNumber]}</ul>
           {this.state.options[this.state.currentQuestionNumber].map(options => <div><input type="radio" name="radio" value={options}/><label>{options}</label></div>)}
          </div>
         
        <button onClick={this.handlePreviousClick}>Previous</button>
        <button onClick={this.handleClick}>Next</button>
        
      </div>

    );
  }


}
 

export default App;
