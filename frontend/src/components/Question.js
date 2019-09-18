import React, {useEffect, useState} from 'react';
import {answerQuestion, QuestionPage} from "./QuestionPage";

const rightAnswer = ['in the east', 'New York', 'India', 'bat', 'Laptev Sea'];

export let answerArr = [];

export const Question = () =>{
    const [question, setQuestion] = useState();
    const [counter, setCounter] = useState(0);
    const [questionQuantity, setQuestionQuantity] = useState(0);

    const getQuestion = async ()  =>{
        const response = await fetch('/question');
        const responseJSON = await response.json();
        setQuestion(responseJSON);
        setQuestionQuantity(responseJSON.length);
    };

    const handleBtn = () =>{
        if(questionQuantity > counter+1){
            answerArr.push(answerQuestion);
            setCounter(counter + 1);
        } else {
            answerArr.push(answerQuestion);
            let res = rightAnswer.filter(item => answerArr.includes(item));
            console.log( typeof res.length);
            alert(`Правильных ответов: ${res.length} 
            Неверных ответов: ${questionQuantity - res.length}`);
            window.location.href = '/'
        }
    };

    useEffect(() =>{
        getQuestion();
    }, []);

    return(
        <div>
            {question && questionQuantity > counter ? <QuestionPage question={question[counter]}/> : null}
            <div className='container text-center'>
                <div className='row'>
                    <div className='col mt-3'>
                        <button type='button' className='btn btn-primary' onClick={handleBtn}>NEXT</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

