import React from "react";
export let answerQuestion;

const radioHandler = event =>{
    if(event.target.checked === true){
        answerQuestion = event.target.value;
    }
};

export const QuestionPage = ({question}) =>{
            return(
                <div className='container text-center mt-4'>
                    <div className='col mb-2'>
                        <p>{question.name}</p>
                        <input defaultChecked={false} onChange={radioHandler} type="radio" name='answer' value={question.answer1}/>{question.answer1}
                    </div>
                    <div className='col mb-2'>
                        <input defaultChecked={false}  onChange={radioHandler} type='radio'  name='answer' value={question.answer2}/>{question.answer2}
                    </div>
                        <div className='col'>
                            <input defaultChecked={false}  onChange={radioHandler} type='radio'  name='answer' value={question.answer3}/>{question.answer3}
                        </div>
                </div>
            )
        };
