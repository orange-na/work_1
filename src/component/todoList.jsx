
function TodoItem(props) {
    const { text, completed } = props;
    return(
        <div className="flex my-3">
            <p>・{ text }</p>
            <p className="text-blue-600 font-bold">: {completed ? '完了' : '未完了'}</p>
        </div>
    )
}


export function TodoList() {
    const todos = [
        {text: 'Reactの勉強', completed: true},
        {text: 'アプリの作成', completed: false},
        {text: 'ポートフォリオの制作', completed: false},
    ];


    return (
        <div>
            {todos.map((todo, index) => {
                return (
                    <TodoItem key={index} text={todo.text} completed={todo.completed}/>
                )
            })}
        </div>       
    )
  }

