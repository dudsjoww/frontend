import { useEffect, useState } from "react"
import WorkoutDetails from "../components/WorkoutDetails"
const Home = () => {
    const [workouts, setWorkouts ] = useState(null)

    useEffect(()=> {
        const fetchWorkouts = async() => {
            const response = await fetch('/api/workouts/')
            const json = await response.json()
            if(response.ok){
                setWorkouts(json)
            }
        }
        fetchWorkouts()
    },[])

    return(
        <div className="Home">
            <h1>Sex</h1>
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
        </div>
    )
}

export default Home