const React = require('react')

function Index (props) {
    return (
        <div>
            <h1>To Dos Index Page</h1>
            <a href= "/todos/new">Create A New To Do Here</a>
            <ul>
                {
                    props.toDos.map((toDo) => {
                        return (
                            <li key={toDo._id}>
                                <a href={`/todos/${toDo._id}`}>{toDo.title}{toDo.description}</a> 
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


module.exports = Index