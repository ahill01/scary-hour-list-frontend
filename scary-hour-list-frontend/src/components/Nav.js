import { Link } from 'react-router-dom';

function Nav() {

  return (
    <div className="nav">
      <header>
      <nav>

       <Link className="navitem" to='/'>
            Home
          </Link>

          <br/>

          <Link className="navitem" to="/incompleted">
          Task List
          </Link>

          <br/>

           <Link className="navitem" to='/completed'>
           Finished Tasks
          </Link>

      </nav>
      </header>
    </div>
  );
}

export default Nav;