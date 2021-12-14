import './App.css';
import Questions from './Questions';

function App() {
  return (
    <div classNameName="App">
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">DPiP</a>
          {/* Menu button (up right corner, on small screens)
              To toggle a value -> to collapse the navbar = open or close navbar*/}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 px-3 mb-lg-0">
              {/* NAV-ITEMS */}
              <li className="nav-item">
                {/* Home Page -> href="/"  (=default route) */}
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              {/* DROPDOWN NAV-ITEM */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              {/*Disabled nav-item */}
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Login</a>
              </li>
            </ul>           
          </div>
        </div>
      </nav>
      
      {/* HOME PAGE */}
      <div className='container'>
        {/* Home Header */}
        <div className='row'>
          <h1 className='pb-2 text-center'>Burnout Prevention Informationplatform</h1>
          <hr></hr>
        </div>
        
        {/* Home Cards */}
        <div className='row p-5'>
          {/* First Column */}
          <div className='col-sm-6'>
            <div className='card'>
              <div className='card-body'>
                <img src="/images/img-card-one.jpg" className="card-img-top" alt="You are not alone, we are always there for you!"/>
                <h2 className="card-title pt-2">You are not alone!</h2>
                <hr></hr>
                <p className="card-text fst-italic">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <a href="#" className="btn btn-outline-info">Read more ..</a>
              </div>
            </div>
          </div>      
          {/* Second Column */}
          <div className='col-sm-6'>
            <div className='card'>
              <div className='card-body'>
                <img src="/images/img-card-two.jpg" className="card-img-top" alt="You are not alone, we are always there for you!"/>
                <h2 className="card-title pt-2">We are there for you!</h2>
                <hr></hr>
                <p className="card-text fst-italic">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <a href="#" className="btn btn-outline-info">Read more ..</a>
              </div>
            </div>
          </div>       
        </div>

        <hr></hr>

      </div>

      <div className='center-widget-h m-5'>
      <Questions/>
      </div>
      
    </div>
  );
}

export default App;
