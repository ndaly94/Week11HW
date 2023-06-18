const React = require('react')

function Edit (props) {
    const { title, _id, completed, created_at } = props.toDo
    return(
        <div>
            <h1>{title} Edit Page</h1>
            <a href='/toDos'>Go back to Index Page</a>
            <form action={`/toDos/${_id}?_method=PUT`} method="POST">
                Title: <input type="text" name="tile" defaultValue={title} /><br/>
                Description: <input type="text" name="desription" defaultValue={description}/><br/>
                Is it completed?: {completed? <input type="checkbox" name="completed" defaultChecked />: <input type='checkbox' name="completed"/>}<br/>
                <input type="submit" value="Update toDo" />
            </form>
        </div>
    )
}

module.exports = Edit