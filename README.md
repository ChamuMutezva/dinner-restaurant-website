 # Frontend Mentor - Dine restaurant website

This is a solution to the [Dine restaurant website on Frontend Mentor](https://www.frontendmentor.io/challenges/dine-restaurant-website-yAt7Vvxt7/hub/dine-restaurant-website-w4BvEnnob). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
The challenge was created using Create React app , sass , html and javascript.  Effort has been made
to make the project as close as possible from the design assets provided by Frontend mentor which
was provided using figma files.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- fill the form and validate the data

### Screenshot

![desktop preview](./src/assets/images/design/desktopfullss.png)

### Links

- Solution URL: [Github repository](https://github.com/ChamuMutezva/dinner-restaurant-website)
- Live Site URL: [Live preview](https://dinner-restaurant-website-react.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- Scss
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Sass - Scss](https://sass-lang.com/) - css prepocessor
- [React Hook Form](https://react-hook-form.com/) - For Form and form validation
- [React router-dom](https://reactrouter.com/web/guides/quick-start) - For page navigation 

### What I learned
Function to scroll to top of page when navigating 
to a new page. Usually at the end of a page focus of page will
be at the bottom of that page and doesn't move automatically to top
of next page

```
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  <ScrollToTop />
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Mainpage />
          </Route>
          <Route path='/reservation'>
            <Reservation />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
```


### Continued development

 - use the 2x desktop images to display on bigger screens , any screens from 1500px
 - further email validation by using regex
 - date and time validation to allow digits less that 10 to displayed as **01**, **02** etc


### Useful resources

- [Navigation - React router](https://reactrouter.com/web/guides/quick-start) 
- [React hook forms](https://react-hook-form.com/) - form validation


## Author

- Website - [Chamu Mutezva](https://github.com/ChamuMutezva)
- Frontend Mentor - [@Chamu](https://www.frontendmentor.io/profile/ChamuMutezva)
- Twitter - [@ChamuMutezva](https://twitter.com/ChamuMutezva)


## Acknowledgments

tba
