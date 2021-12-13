 ### 1. Create a new project

```powershell
# Need Node.JS to run npx
-> npx create-react-app getting-started-react

# Once created
-> cd getting-started-react
// Open in visual Studio Code
-> cd code .

# Start the project
-> npm start

// Note we can start the project without running 'npm install'
// Because when running 'npx', node will install all default dependencies
// This dependencies are listed inside the 'package.json' file
```
<aside>
💡 To start the development server run: 
→ npm start
To bundle the app into static files for production run:
→ npm run build

</aside>
<hr>

### 2. Folder structure
> Analyse your folder structure !
<hr>

### 3. Clean up  the folder structure 

>Delete unnecessary files
-> ' reportWebVitals.js' , 'setupTests.js' , ' App.test.js'

>Change the 'index.js' file

```
// CURRENTLY 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// TODO
// Remove the reportWebVitals and import
// Remove the <React.StrictMode> component

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <App />,    
  document.getElementById('root')
  // getElementById -> index.html body where id = root
);
```


### 4. **Run React application**

At this moment the app should run without any problems.

→ npm start

This should open your browser on the ' localhost:3000 '

## Let's get started !

---

### Implementing bootstrap

→ For now, we will implement bootstrap using jsDelivr.
[ Further on we will use react-bootstrap, using React Components]

<aside>
💡 Bootstrap is a framework for building responsive, mobile-first sites.
Using jsDelivr, a free open source CDN.

</aside>

[Introduction](https://getbootstrap.com/docs/5.1/getting-started/introduction/)

1. Add Bootstrap CSS

`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">`
→ Add to your index.html file, inside the <head>

2. JS
`<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>`

→ Add to your index.html file, inside the <body>

<aside>
💡 The index.html file can be found in the 'public' folder.

</aside>

After cleaning up the index file and adding bootstrap it should look like this:

```powershell
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<!-- Bootstrap CSS -->
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
		<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="theme-color" content="#000000" />
		<meta name="description" content="Web site created using create-react-app" />
		<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
		<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
		<!-- Title Webpage  -->
		<title>Getting Started With React</title>
	</head>
	<body>
		<div id="root"></div>
		<!-- Bootstrap JS Bundle -->
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
	</body>
</html>
```

### App.js

---

We will start by creating a single-page application.

1. Cleaning up App.js

```jsx
import './App.css';
function App() {
	return (
	<div className="App">
	</div>
	);
}export default App;
```

1. Navbar

[Navbar](https://getbootstrap.com/docs/5.1/components/navbar/)

<aside>
⚠️ ! Change class to className !

</aside>

- Source code Navbar and main changes App.js
    
    
    ```jsx
    import './App.css';
    function App() {
    return (
    	<div classNameName="App">
    		{/* NAVBAR **/}
    		<nav className="navbar navbar-expand-lg navbar-light bg-light">
    			<div className="container-fluid">
    				<a className="navbar-brand" href="#">DPiP</a>
    			
    				{/** Menu button (up right corner, on small screens)
    				To toggle a value -> to collapse the navbar = open or close navbar*/}
    				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    				<span className="navbar-toggler-icon"></span>
    				</button>
    				<div className="collapse navbar-collapse" id="navbarSupportedContent">
    					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
    				
    					{/* NAV-ITEMS **/}
    					<li className="nav-item">
    					{/* Home Page -> href="/"  (=default route) */}
    						<a className="nav-link active" aria-current="page" href="/">Home</a>
    					</li>
    					<li className="nav-item">
    						<a className="nav-link" href="#">Link</a>
    					</li>
    					{/** DROPDOWN NAV-ITEM */}
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
    	</div>
    );
    }export default App;
    ```
    
**Output**
    
    → On mobile we see a menu icon, whenever we press the menu item 
    
    →  data-bs-toggle will collapse the navbar = open or close depending on state
    
    → that state is changed(=toggle) whenever you press on the menu-icon
    

## 1. Home Header
### Creating single card
    
What are we trying to build ?
We create a container and inside a row. 

→ A row = horizontal direction

Inside the row, we create a column (=vertical direction).

We give that colum a tag 'sm-6' to specify that even we a user is on a small device, this column should have the proportion of 6.

Full screen-width = col-sm-12

Half of screen-width = col-sm-6 

A third of the screen-width = col-sm-4

→ The idea is that you can easily create responsive layouts, 
    depending our your proportions ('4, 6, 8,12..'-
    
    ```
    <div className='container'>
    	<div className='row'>
    		<div className='col-sm-6'>
    				<div className='card'>
    				<div className='card-body'>
    					<h1 className="card-title"> Hello</h1>
    					<p className="card-text">Ola amigo!</p>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
    ```
    
    
- Adding some content, layout and design
    
    To generate some text, we can use: [https://www.lipsum.com/](https://www.lipsum.com/)
    
    1. Adding an Image
        1. To add an image create an new folder in the public folder called images
        2. Inside this folder you can store your images
        3. Access images using src="/images/img-name.extension"
        
        [ Example: src="/images/img-card-one.jpg" ]

    2. Adding bootstrap font-style and font-weight - using bootstrap classes
    
    ```
    <p class="fw-bold">Bold text.</p>
    <p class="fw-bolder">Bolder weight text (relative to the parent element).</p>
    <p class="fw-normal">Normal weight text.</p>
    <p class="fw-light">Light weight text.</p>
    <p class="fw-lighter">Lighter weight text (relative to the parent element).</p>
    <p class="fst-italic">Italic text.</p>
    <p class="fst-normal">Text with normal font style</p>
    ```
    
    1. Adding some margin and padding - using bootstrap classes
    2. Adding a button - using bootstrap class
    
       More info - [Spacing](https://getbootstrap.com/docs/5.1/utilities/spacing/)
    
    1. **Source code**
    
    ```jsx
    <div className='container'>
    	<div className='row p-5'>
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
    	</div>
    </div>
    ```
    
# Let's create our Home page - creating multiple cards
    
    → For now lets just copy and paste our code for the column and card
    → Modify the 'second column', by changing the title, image and paragraph
    

**Add a title for our home-page**
    
By adding a new row in our container (App.js)
    
```jsx
{/* Home Header */}
<div className='row'>
    <h1 className='pb-2 text-center'>Burnout Prevention Informationplatform</h1>
    <hr></hr>
</div>

```
**Text-align using bootstrap classes**    
    
(https://getbootstrap.com/docs/4.0/utilities/text/)

**Changing the position of the navbar items**
    
```jsx
<ul className="navbar-nav ms-auto mb-2 px-3 mb-lg-0">
```

**Source Code**

```jsx
{/* HOME PAGE */}
<div className='container'>

    {/* Home Header */}
    <div className='row'>
        <h1 className='pb-2 text-center'>Burnout Prevention Informationplatform</h1>
        <hr></hr>
    </div>

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
</div>

```
    
    