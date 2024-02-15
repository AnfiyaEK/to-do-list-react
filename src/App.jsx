import './App.css'

function App() {
  

  return (
    <>
      
      <div className='container mt-5'>
        <h1 className='text-center text-primary'>ToDo List</h1>
        <div className="card shadow mt-5">
            <table className="table">
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody id="result">
                    
                </tbody>
            </table>
        </div>
      </div>
      
    </>
  )
}

export default App
