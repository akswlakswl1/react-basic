import Student from "./Student.jsx";

function App() {
  return(
    <>
     <Student name="Spongebob" age={20} isStudent={true}/>
     <Student name="Patrick" age={42} isStudent={false}/>
     <Student name="Squidard" age={15} isStudent={true}/>
     <Student name="Sandy" age={27} isStudent={true}/>
     <Student/>
     <Student/>
    </>  
  );
}

export default App
