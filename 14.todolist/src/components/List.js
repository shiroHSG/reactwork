function List({todos}) {
    return(
        <div className='List'>
            <h4>Todo List</h4>
            <input placeholder="검색어를 입력하세요" />
            <div className='todos_wrapper'>
                {
                    todos.map((todo) =>
                        <Todoitem todo={todo}/>
                    )
                }

            </div>
        </div>
    )
}
export default List;