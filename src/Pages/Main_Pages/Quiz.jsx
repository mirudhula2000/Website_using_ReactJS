import home_logo from '../../Assets/home_logo.png'
import React, { useState,useRef } from 'react'
import './Quiz.css'
import right_mark from '../../Assets/right mark.png'
import wrong_mark from '../../Assets/wrong mark.png'

const Quiz = () => {

      const quiz = [
            { id: 1, question: "lorem 200", option_1: "option 1", option_2: "option 2", option_3: "option 3", option_4: "option 4", correct_ans: "option3" },
            { id: 2, question: "lorem 200", option_1: "option 1", option_2: "option 2", option_3: "option 3", option_4: "option 4", correct_ans: "option2" },
            { id: 3, question: "lorem 200", option_1: "option 1", option_2: "option 2", option_3: "option 3", option_4: "option 4", correct_ans: "option1" },
      ]

      const [answers, setAnswers] = useState("")
      const right=useRef();
      const wrong=useRef();
      const handleClick = () => {
            
                  let correct_answer = answers.toLowerCase();
                  // console.log(correct_answer)
            if (quiz[0].correct_ans === correct_answer) {
                  //  console.log("Correct")
                  right.current.style.display="block"
            }
            else {
                  // console.log("wrong")
                  wrong.current.style.display="block"
            }
      }

     


      return (
            <div className='quiz_main'>
                  <div className='quiz_head_main'>
                        <div className='quiz_head_1'><p>Cuisine</p>
                        </div>
                        <div className='quiz_head_2'><p>Quiz</p>
                        </div>
                  </div>
                  <div className='quiz_align'>
                        <div className='quiz_intro'>
                              <h2>Swagatham...</h2>
                              <p>Let's take a cuisine quiz</p>
                        </div>

                  </div>
                  <div className='quiz_content_align'>

                        <div className='question_content'>
                              <h4>question</h4>
                              <div className='options'>
                                    <p>option 1</p>
                                    <p>option 1</p>
                                    <p>option 1</p>
                                    <p>option 1</p>

                              </div>
                              <div className='input_ans'>
                              <input key="U1" className="input" type="text" placeholder='Enter your answer...' value={answers} onChange={(e) => { setAnswers(e.target.value) }}></input>
                              <img className='right_mark' ref={right} src={right_mark} alt="right-mark"/>
                              <img className='wrong_mark' ref={wrong} src={wrong_mark} alt="wrong-mark"/>

                              </div>
                              <button onClick={handleClick}>Submit</button>
                        </div>
                  </div>
                  <a href='/'><img className='home_logo' src={home_logo} alt="home_logo" /></a>
            </div>
      )
}

export default Quiz