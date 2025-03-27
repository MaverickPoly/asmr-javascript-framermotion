# Framer Motion Beginner Projects and Programs

This is a repository with small projects and exercises with **React Framer Motion** animation framework. This was made to practice animations and get used to it! The project was made using _Next JS_.

## Basic Exercises

#### Basics (1–5)

1. **Fade In Box**

   - Create a square `div` that fades in from `opacity: 0` to `opacity: 1` when the component mounts.
   - Use: `animate={{ opacity: 1 }}`, `initial={{ opacity: 0 }}`.

2. **Slide In Text**

   - Animate text sliding in from the left (`x: -100` to `x: 0`) with a 0.5-second duration.
   - Use: `animate={{ x: 0 }}`, `initial={{ x: -100 }}`, `transition={{ duration: 0.5 }}`.

3. **Scale Up Button**

   - Make a button scale from 0.8 to 1 on mount with a bounce effect.
   - Use: `animate={{ scale: 1 }}`, `initial={{ scale: 0.8 }}`, `transition={{ type: "spring", stiffness: 300 }}`.

4. **Rotate Square**

   - Animate a square rotating 360 degrees over 2 seconds when it loads.
   - Use: `animate={{ rotate: 360 }}`, `transition={{ duration: 2 }}`.

5. **Color Change Circle**
   - Create a circle that changes background color from red to blue on mount.
   - Use: `animate={{ backgroundColor: "blue" }}`, `initial={{ backgroundColor: "red" }}`.

#### Gestures (6–10)

6. **Hover Scale**

   - Make a box scale up by 10% when hovered over.
   - Use: `whileHover={{ scale: 1.1 }}`.

7. **Tap Color Change**

   - Change a button’s background color when clicked (tapped).
   - Use: `whileTap={{ backgroundColor: "#ff0000" }}`.

8. **Drag Box**

   - Create a draggable square constrained to a 200x200px area.
   - Use: `drag`, `dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}`.

9. **Hover Rotate**

   - Rotate a shape 45 degrees when hovered over, returning to 0 when not.
   - Use: `whileHover={{ rotate: 45 }}`.

10. **Double Tap Pulse**
    - Make a circle scale up and down twice when double-tapped.
    - Use: `whileTap={{ scale: [1, 1.2, 1, 1.2, 1] }}`.

#### Variants (11–15)

11. **Toggle Fade**

    - Use a button to toggle a box fading in and out with variants.
    - Use: `variants` with `hidden: { opacity: 0 }` and `visible: { opacity: 1 }`, controlled by a state.

12. **Slide Menu**

    - Animate a sidebar sliding in from the left using variants when a button is clicked.
    - Use: `variants` with `closed: { x: -200 }` and `open: { x: 0 }}`.

13. **Staggered List**

    - Animate a list of 5 items fading in one-by-one using `staggerChildren`.
    - Use: `variants` on parent and child with `transition={{ staggerChildren: 0.2 }}`.

14. **Expand Card**

    - Create a card that expands (height and width) when clicked using variants.
    - Use: `variants` with `collapsed` and `expanded` states.

15. **Orbiting Dots**
    - Animate 3 dots orbiting in a circle using variants and keyframes.
    - Use: `animate={{ rotate: 360 }}` with `transition={{ repeat: Infinity }}`.

#### Transitions & Keyframes (16–20)

16. **Bounce Ball**

    - Make a ball bounce up and down infinitely with a spring transition.
    - Use: `animate={{ y: [-20, 0, -20] }}`, `transition={{ repeat: Infinity, type: "spring" }}`.

17. **Path Animation**

    - Animate a dot moving along a square path (up, right, down, left).
    - Use: `animate={{ x: [0, 100, 100, 0], y: [0, 0, 100, 0] }}`.

18. **Pulse Effect**

    - Create a pulsing circle that scales between 0.9 and 1.1 repeatedly.
    - Use: `animate={{ scale: [0.9, 1.1, 0.9] }}`, `transition={{ repeat: Infinity, duration: 1 }}`.

19. **Fade Sequence**

    - Animate a box fading in, moving right, then fading out in sequence.
    - Use: `animate={{ opacity: [0, 1, 1, 0], x: [0, 0, 50, 50] }}`.

20. **Loading Spinner**
    - Build a spinner with 3 dots scaling up and down in a loop with staggered timing.
    - Use: `variants` and `staggerChildren` with `animate={{ scale: [1, 1.5, 1] }}`.

## Contributions

Feel free to explore the project in details and learn about specific animation in the `components` folder.
Also, feel free to star the repository, make a fork|branch or submit an issue.
