function login() {
  return (
    <div className="flex h-screen bg-slate-200">
     
     <form className="flex flex-col m-auto p-4 w-60 h-64 bg-slate-800 rounded-md" >
        <input className="rounded-md p-1 m-2" type="text" placeholder="nickname"/>
        <input className="rounded-md p-1 m-2" type="text" placeholder="password"/>
        <button className="rounded-md p-1 m-2 text-slate-100 border border-slate-100">Log In</button>
     </form>
    </div>
  )
}

export default login
