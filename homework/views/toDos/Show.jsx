const React = require('react')

function Show(props){
    return(
        <div>
            
          <h1>{props.toDo.title}</h1>
            <a href='/todos'>Go back to Index Page</a>
            <p>
                The {props.toDo.title} is {props.toDo.completed? 'Completed' : 'not completed'}
            </p>
              <form action={`todos/${props.toDo._id}?_method=DELETE`} method="POST">
                <input type="submit" value={`Delete this ${props.toDo.title}`}/>
            </form>
            <div>
            <a href={`todos/${props.toDo._id}/edit`}><button>{`Edit this ${props.toDo.title}`}</button></a>
            </div>
        </div>
    )
}

module.exports = Show