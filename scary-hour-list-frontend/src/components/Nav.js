import { Link } from 'react-router-dom';

function Nav({currentUser, setCurrentUser}) {

  function signOut(){
    if(currentUser){
      setCurrentUser({tasks:[]})
    }
  }

  return (
    <div className="nav">
      <header>
      <nav>
      <button className="button">
       <Link to='/' onClick={signOut} className="navitem">
            {currentUser.name ? `Sign out` : `Log in`}
          </Link>
      </button>
      <button className="button">
          <Link to="/unfinished" className="navitem">
          Tasks
          </Link>
      </button>
      <button className="button">
           <Link to='/finished' className="navitem">
           Finished
          </Link>
      </button>
      </nav>
      </header>
    </div>
  );
}

export default Nav;