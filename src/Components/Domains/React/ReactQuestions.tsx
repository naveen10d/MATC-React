import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../Redux/ReduxHooks'
import { getQuestions } from '../../../Redux/action/QuestionAction'
interface Questions {
    question: string,
    options: Array<string>,
    correctAnswer: string,
    questionType: string
}
export default function ReactQuestions() {
    const [questions, setQuestions] = useState<Questions[]>([])
    const [index, setIndex] = useState<number>(0)
    const reactQuestions = useAppSelector(state => state.questions)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getQuestions(`/question?questionType=react`))
        setQuestions(reactQuestions)
    }, [])

    const handleClick = () => {
        setIndex(index + 1)
    }
    const handleChange = () => {
        console.log("first")
    }
    return (
        <div className='container'>
            <div className='row header'>
                <div className='col-12'>
                    <div className='d-flex flex-column justify-content-center align-items-center shadow text-muted m-4'>
                        <div className='d-flex justify-content-center align-items-center fs-1 m-5 text-dark'> React Questions</div>
                        <div>{questions.length > 1 &&
                            <p>{questions[index].question}</p>}
                            {/* <div className='d-flex flex-column align-self-start'>
                                {questions[index].options.map((option: any) =>
                                    <label>
                                        <input type="checkbox" onChange={handleChange} />
                                        <span className='p-3'>{option}</span>
                                    </label>
                                )}
                            </div> */}
                        </div>
                        <div className='d-flex justify-content-between px-5 w-75 m-5'>
                            <button>Previous</button>
                            <button onClick={handleClick}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
