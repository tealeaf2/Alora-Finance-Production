import React, {useEffect, useState} from 'react'
import axios from 'axios'

function DisplayUnitAndLessons ({id, name}) {
    const [lessons, setLessons] = useState([])

    useEffect(() => {
        async function getLessons() {
            try {
                const {data} = await axios.get('api/lessons/')
                setLessons(data)
            } catch (error) {
                console.log(error.message);
            }
        }
        getLessons()
    },[])

    return (
        <>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 py-3">
                <div className="h-32 rounded-3xl lg:col-span-2 Unit-display-lesson"> 
                    <div className="py-10 px-10 text-3xl">
                    Unit {id}: {name}
                    </div>
                </div>
                <div className="h-32">image</div>
            </div>

            {lessons.map((lesson) => {
                if (lesson.unit === id) {
                    return(
                        <div key={lesson.id} className="py-2">
                            <div className="grid grid-cols-1 rounded-3xl Unit-display-lesson">
                                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 p-5">
                                    <div className="grid grid-rows-4 h-32">
                                        <div>Topic {lesson.lesson_num}: {lesson.name}</div>
                                        <div>Learn</div>
                                        <div>Video One Description</div>
                                        <div>Video Two Description</div>
                                    </div>
                                    <div className="grid grid-rows-2 h-32">
                                        <div>Practice</div>
                                        <div className="text-center rounded-3xl Unit-display-lesson">
                                            Quiz
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </>
    )
}

export default DisplayUnitAndLessons