import { Link } from 'react-router-dom';

function Nav() {

  return (
    <div className="Nav">
      <header>
      <h1>
        Scary Hour
      </h1>
      <nav>
        <ul className="nav">
        <Link to='/'>
            <li>Main</li>
          </Link>
          <Link to='/task-list'>
            <li>Task List</li>
          </Link>
           <Link to='/new-task'>
            <li>New Task</li>
          </Link>
        </ul>
      </nav>
      </header>
    </div>
  );
}

export default Nav;

