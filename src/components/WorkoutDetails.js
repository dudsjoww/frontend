const WorkoutDetails = ({ workout }) => {
    return(
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p>Carga: {workout.load}</p>
            <p>Repetições: {workout.reps}</p>
            <p>Criado: {workout.createdAt}</p>
        </div>
    )
}
export default WorkoutDetails