function App() {
    return (
        <div className='frame'>
            <Img />
            <Post />
        </div>
    )
}

function Img() {
    return (
        <div className='frameimg'>
            <div className='img'>
            <img style={{width: "100%"}}src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80
             " alt="profile picture"/>
             </div>
            <div>
                    <h1><b>Julienne Moore</b></h1>
                    <p>Julienne.moore@company.com</p>
            </div>
        </div>
    )
}
function Post() {
    return (
    <div className='framecard'>
        <div>
            <h1><b>25</b></h1>
            <p>Posts</p>
        </div>
        <div>
            <h1><b>350</b></h1>
            <p>Following</p>
        </div>
        <div>
            <h1><b>1.5K</b></h1>
            <p>Followers</p>
        </div>
    </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />)