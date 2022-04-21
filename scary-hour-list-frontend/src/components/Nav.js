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
      <button>
       <Link to='/' onClick={signOut} className="navitem">
            {currentUser.name ? `Sign Out` : `Log In`}
          </Link>
      </button>
      <button>
          <Link to="/unfinished" className="navitem">
          Task List
          </Link>
      </button>
      <button>
           <Link to='/finished' className="navitem">
           Finished Tasks
          </Link>
      </button>
      </nav>
      </header>
    </div>
  );
}

export default Nav;