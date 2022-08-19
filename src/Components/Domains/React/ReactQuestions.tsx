import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../Redux/ReduxHooks'
import { getQuestions } from '../../../Redux/action/QuestionAction'
interface Questions {
    question: String,
    options: Array<String>,
    correctAnswer: String,
    questionType: String
}
export default function ReactQuestions() {
    const [questions, setQuestions] = useState<Questions[]>([])
    const questionsssss = useAppSelector(state => state.questions)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getQuestions())
        setQuestions(questionsssss)
    }, [])

    console.log("questionsssss===>>>>", questions)

    const handleChangeChk = () => {
        console.log('dddddddddddddd')
    }
    return (
        <div className='container'>
            <div className='row header'>
                <div className='col-12'>
                    <div className='d-flex flex-column justify-content-center align-items-center shadow text-muted m-4'>
                        <div className='d-flex justify-content-center align-items-center fs-1 m-5 text-dark'> React Questions</div>
                        <div>
                            <div>
                                {
                                    questions && questions.map((item: Questions) => {
                                        return 'ddd'
                                        console.log(item)
                                    })
                                }

                            </div>
                            {/* <p>{questions.question}</p>
                            <div className='d-flex flex-column align-self-start'>
                                {questions.options.forEach((option: any) =>
                                    <label>
                                        <input type="checkbox" onChange={handleChangeChk} />
                                        <span className='p-3'>{option}</span>
                                    </label>
                                )} */}
                            {/* </div> */}
                        </div>
                        <div className='d-flex justify-content-between px-5 w-75 m-5'>
                            <button>Previous</button>
                            <button>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
