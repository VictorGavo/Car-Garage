import React from 'react';
import { Navbar, useStyles } from '../Navbar'


export const About = () => {
  
  const classes = useStyles();
    return (
      <>
        <Navbar />
        <div className={`${classes.background}`}>
          <div className={classes.main_text}>
          <h1>About Victor Gavojdea</h1>
          <p>
            Victor Gavojdea is a human of Earth who is a friend to all. With a passion for self-improvement and a desire to learn from others, Victor is always striving to be the best human he can be.
          </p>
          <p>
            Victor's career goal is to become an expert in AI with the aim of making healthcare easier to access for individuals. He also wants to have the means to work and connect with others to improve their standard of living and care.
          </p>
          <p>
            Victor's positive attitude and passion for stoic philosophy are his greatest strengths. He believes in the power of humans to create magic when enough people come together, and is always eager to learn and grow from those around him.
          </p>
          <p>
            With a "can do" attitude, Victor wants to bring people together and is not afraid to take a backseat in order to learn from others. He is committed to adapting and overcoming obstacles, and is always looking for ways to be a leader in the pursuit of a shared goal.
          </p>
          <p>
            Victor's passion for self-improvement and learning is something he enjoys, and he believes that every person has a unique gift to offer the world. He encourages others to find and pursue their own gifts, as he believes this is the path to true happiness.
          </p>
          <p>
            In short, Victor is a positive and enthusiastic individual who is always looking to make a difference in the world. He is eager to learn, grow, and make magic happen!
          </p>
          <p>The above text was written by an AI after being prompted to interview me and write an about me page.</p>

          </div>
          <div>
          </div>
        </div>
      </>
    )
}