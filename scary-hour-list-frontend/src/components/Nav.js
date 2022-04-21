import { Link } from 'react-router-dom';

function Nav({currentUser, setCurrentUser}) {

  function signOut(){
    if(currentUser){
      setCurrentUser({tasks:[]})
    }
  }

  return (
    <div className="Nav">
      <header>
      <nav>

       <Link to='/' onClick={signOut}>
            {currentUser.name ? `Sign Out` : `Log In`}
          </Link>

          <br/>

          <Link to="/incompleted">
          Task List
          </Link>

          <br/>

           <Link to='/completed'>
           Finished Tasks
          </Link>

      </nav>
      </header>
    </div>
  );
}

export default Nav;

