import React from 'react'
import { questions } from '../../../assets/Questions'

export default function AngularQuestions() {
    const handleChangeChk = () => {
        console.log('fffff')
    }
    return (
        <div className='container'>
            <div className='row header'>
                <div className='col-12'>
                    <div className='d-flex flex-column justify-content-center align-items-center shadow text-muted m-4'>
                        <div className='d-flex justify-content-center align-items-center fs-1 m-5 text-dark'> Angular Questions</div>
                        <div>
                            <p>{questions.question}</p>
                            <div className='d-flex flex-column align-self-start'>
                                {questions.options.map(option =>
                                    <label>
                                        <input type="checkbox" onChange={handleChangeChk} />
                                        <span className='p-3'>{option}</span>
                                    </label>
                                )}
                            </div>
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
