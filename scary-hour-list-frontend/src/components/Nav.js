import { Link } from 'react-router-dom';

function Nav() {

  return (
    <div className="Nav">
      <header>
      <nav>

       <Link to='/'>
            Home
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

