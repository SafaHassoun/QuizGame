import React, {Component} from "react";
import Options from "./Option";
 
class Question extends Component{
    render() {
        const {question, selectedOption, onOptionChange, onSubmit} = this.props;
 
        return(
            <div className="">
                <h4>Question {question.id}</h4>
                <h6 className="mt-2">{question.question}</h6>
                <form onSubmit={onSubmit} className="mt-2 mb-2">
                    <Options
                        options={question.options}
                        selectedOption={selectedOption}
                        onOptionChange={onOptionChange}
                    />
                    <button type="submit" className="btn btn-primary mt-2">
                        SUBMIT
                    </button>
                </form>
                 
            </div>
        )
    }
}
 
export default Question;