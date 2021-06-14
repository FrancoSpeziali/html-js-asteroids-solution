# Challenging Difficulty

## Task 1 - Setting the Space Background (CSS)

1. Create a CSS file in the `/styles` folder, and import it into your `index.html` file

2. Write styles for the `<body>` tag - set the properties `width` and `height` to take up the full viewport width and height

3. Remove the margin for the `<body>` tag

4. Set the background image to the `space.png` image

5. Make the background image repeat across the page

## Task 2 - Animating the background (CSS)

![Space background](space-background.gif)

We are going to animate the background to give the simulation of travelling through space.

In your CSS file:

1. Create a CSS animation which moves the background position of the body. This number will determine the direction of the animation.

2. Set the CSS animation to the `body` tag, and play around with the animation values until you are satisfied with your result

> Hint: Is the animation not smooth, does it "jump"? You should move the background by the same distance as the file dimensions.

> Hint: Check the file dimensions for the image `space.png` and move the background in pixels (`px`), not percentages (`%`)

## Task 3 - Adding the player (JavaScript & CSS)

![Player](player.gif)

Now we have our animated background, let's add the player. Our player in this case is a spaceship graphic with a character inside.

For the player, we are going to use an ES6 Class. Why?

A Class helps us to organise common functions together, by "grouping" them together. For example, we might have 1 function which draws (renders) the player on the screen, and another function to move the player. These are common functions, because they relate to the player. We will group them together.

1. Write an ES6 class called "Player". This class should create a new DOM object which is automatically added to the `<body>` tag. Use the image `/images/spaceship.png` as the element's background image.

> Hint: Try to separate your CSS from your JavaScript where possible. Use a CSS class to manage the styling of the HTML element.

> Hint: Try and think what properties you might want to use in your constructor

When you run the code `new Player()` you should see your player character on the screen.

## Task 4 - Player movement (JavaScript)

Currently the player character is static (it does not move) - but we are going to change this. We want to allow the user to control the "player" character by using their keyboard.

1. Add an event listener to listen for the keyboard. Respond to the gamer keys "W A S D" and / or the keyboard arrow keys and make the player character move accordingly, for example, up, down, left, and right.

> Hint: Create methods in your class to control movement

## Task 5 - Adding an asteroid (JavaScript & CSS)

![Asteroid](asteroid.gif)

Just as you did for the player character, we will use an ES6 class for the asteroid.

1. Write an ES6 class called "Asteroid". This class should create a new DOM object which is automatically added to the `<body>` tag. Use the image `/images/asteroid.png` as the element's background image.

2. In your ES6 class for the asteroid, give the asteroid a random Y position (CSS: `top`)

3. In your ES6 class for the asteroid, give the asteroid an X position (CSS: `left` or `right`) so that it appears on the far right of the browser.

When you run the code `new Asteroid()` you should see a new asteroid in the browser.

## Task 6 - Giving a behaviour to the asteroid

The asteroid doesn't look so fun when it doesn't move.

Let's make it move.

1. Within the asteroid class, create an interval which moves the asteroid slowly from the far right of the window to the far left

> Hint: Don't put your logic in one method. Separate it into multiple methods, and use class properties to share information between them

## Task 7 - Remove the asteroid

We can't keep the asteroid on the screen forever. Once it reaches the far left of the browser, we must remove it from the DOM. We do this to prevent from consuming too many resources in the browser.

1. Keep checking the X position of the asteroid. Once it reaches it's desired destination, remove it from the DOM.

> Hint: Don't put your logic in one method. Separate it into multiple methods, and use class properties to share information between them

## Task 8 - Multiple asteroids

One asteroid is not enough! Let's add more, to make it more interesting.

1. Add a new asteroid (or multiple asteroids) in the browser at an interval of your choosing.

## Task 9 - What other improvements would you make?

1. Add a title to the page

2. Clean up the styles

## Task 10 - Collision!

How might you detect if a collision occurs between an asteroid and the player?