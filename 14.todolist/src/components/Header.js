function Header() {
    return(
        <div className='Header'>
            <h3>TODOLIST</h3>
            <h2>{new Date().toDateString()}</h2>
        </div>
    )
}
export default Header;