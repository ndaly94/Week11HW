//generates a form that lets us input the

const React = require('react')

function New (props) {
    return(
        <div>
            <h1>New To-Do Page</h1>
            <a href='/ToDos'>Go back to Index Page</a>
            <form action="/" method="POST">
                Title: <input type="text" name="title"/><br/>
                Description: <input type="text" name='description'/><br/>
                Completed: <input type="checkbox" name ="completed"/><br/>
                Date Created: <input type="date" name ="dateCreated"/><br/>
                <input type="submit" value="Create To-Do"/><br/>
            </form>
        </div>
    )
}

module.exports = New