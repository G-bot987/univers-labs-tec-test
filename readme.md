Create a React application to display a hero carousel that animates between slides. We expect this to take ~3-4 hours to complete (but we're not counting!). Your test will be judged on attention to design, quality of code and 

Build Requirements:
- Implement the hero carousel according to [these designs](https://www.figma.com/file/SmJU0ebqgQXkFcUTs7rRbe/Hero-Carousel-Test?node-id=64%3A2), matching the designs as closely as possible. Create a free [Figma](https://www.figma.com/login) account to be able to view specific values in the design
- Provide the final code in a git repository, either hosted on github or shared with us as a ZIP file
- Styles should be implemented using SCSS or plain CSS
- The carousel component should accept the following props:
```
{
  heading
  cta: {
    label
    url
  }
  slides: {
    title
    excerpt
    backgroundImage
    cta: {
      label
      url
    }
  }[]
}
```

- The carousel component should loop through a maximum of 3 slides, but should accept fewer slides as well
- The carousel should show each slide for 5 seconds before animating to the next active slide, the carousel should loop between slides infinitely
- On page load, the carousel should animate elements in, staggering each element and fading in their opacity
- The active carousel slide dot should pulse blue
- The active carousel slide should change the background image, the background image should fade to the new image
- Implement desktop design only


Optional Requirements:
- Make the carousel responsive and implement mobile designs