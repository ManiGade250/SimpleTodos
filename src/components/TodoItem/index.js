// Write your code here
import './index.css'
const TodoItem = props => {
  const {todoDetails, deleteUser} = props
  const {title, id} = todoDetails
  const onDeleteUser = () => {
    deleteUser(id)
  }
  return (
    <li className="list-cont">
      <div className="bg-cont">
        <p className="para">{title}</p>
        <div>
          <button className="button" type="button" onClick={onDeleteUser}>
            Delete
          </button>
        </div>
      </div>
    </li>
  )
}
export default TodoItem
