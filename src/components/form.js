function Form({todos,setTodos}) {
    const handleSubmit = (event) => {
      event.preventDefault();
      // reset the form
      const value = event.target.todo.value;
      const newTodo = {
        title: value,
        id: 1,
        is_completed: false,
      };
      setTodos((prevTodos) => [
        ...prevTodos,newTodo]);
        const updatedTodoList = JSON.stringify([...todos, newTodo]);
  localStorage.setItem("todos", updatedTodoList);
      event.target.reset();
    };
    return (
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="todo">
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder="Write your next task"
          />
        </label>
        <button>
          <span className="visually-hidden">Submit</span>
          <svg>
            <path d="" />
          </svg>
        </button>
      </form>
    );
  }
  export default Form;
  