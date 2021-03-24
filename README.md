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

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

