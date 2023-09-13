import React, {Component} from "react";
import Options from "./Options";

class Question extends Component {
    render() {
        const {question, selectedOption, onOptionChange, onSubmit} = this.props
        
        return(
            <div>
                    <h3>Question {question.id}</h3>
                    <h5>{question.question}</h5>
                    <form onSubmit={onSubmit}>
                        <Options
                            options={question.options}
                            selectedOption={selectedOption}
                            onOptionChange={onOptionChange}
                        />
                        <button type='submit'>
                            SUBMIT
                        </button>
                    </form>
            </div>
        )
    }
    
}

export default Question;