### What makes a great passer? Let's find out.

Welcome to my ACCAD 5150 final project proposal. You'll find every part of my proposal below, from background information to my vision for the final product.

### Overview

Over the years, the NBA has seen an analytical revolution when it comes to shot selection and pace of play. From a reliance on isolation basketball and midrange shots in the early naughts to the 3-point revolution fueled by Stephen Curry and “Moreyball,” scoring in the NBA has become incredibly optimized. One aspect of the NBA that hasn’t yet been fully captured by analytics, however, is passing. 

There exists a surplus of fantastic passers in the NBA today. Watch any game on any night and you’ll see a number of awesome passes. But what makes a good passer? If we go by the classical standard, assists per game, recognizable names like Chris Paul, James Harden and Trae Young top the charts. 

![cp3](https://user-images.githubusercontent.com/94984667/160941564-7536f037-71e0-45d0-beb0-8fd3dca603a9.gif)

But those players are often ball-dominant, controlling the rock for long periods of time and seeking out assists rather than finding passes within the flow of the offense. What about the guys who move the ball? Those who pass more and dribble less include last year’s MVP, Nikola Jokic, along with Kyle Lowry and younger faces like Tyrese Haliburton and LaMelo Ball.

![melo](https://user-images.githubusercontent.com/94984667/160941730-449ee133-7e4c-4d42-b53a-93a66d88789f.gif)

Sure, passing the ball is great, but to be a great passer, you need to put teammates in position to make plays and score points. Using player tracking numbers in this category, we can look at potential assists, which measures the number of passes a player makes that lead directly to a shot, or adjusted assists, which showcase the number of passes a player makes that are assists, hockey assists or lead to free throws. These categories once more highlight household, ball-dominant names like Paul, Harden, Young, Dejounte Murray and Luka Doncic.

In short, it’s hard to truly separate the league’s most effective passers by looking at one, or two, or three metrics by themselves. There are so many numbers that go into a player’s passing profile — we haven’t even touched on points created, assist to pass percentage, or assist to potential assist ratio. The goal of this project is to look at as many of these numbers as possible to sort out the league’s greatest givers and potentially categorize those givers into different categories of assisting. 

[Here's a quick visualization of a few ways we can categorize the league's best passers.](https://public.flourish.studio/visualisation/9196372/)

### Data Analysis

Thanks to the statistical haven at NBA.com/stats, I have plenty of data to work with regarding player tracking and passing numbers. Specifically, I looked at the [passing section](https://www.nba.com/stats/players/passing/) of the stats website and trimmed it down to players who have played at least 20 minutes per game in at least 20 games this season. This gave me a sample of 245 players and 10 separate passing categories to work with (all per-game averages): passes made, passes received, assists, secondary assists, potential assists, assist points created, adjusted assists, assist to pass percentage, adjusted assist to pass percentage and assists to potential assist ratio.

Ideally, I also want to add in a few numbers relating to usage, including touches per game, average seconds per touch and average dribbles per touch. This will require some manual updates to the data, so it will be a slow process in adding these numbers.

[All in all, this is a lot of data](https://docs.google.com/spreadsheets/d/1E78NJZYuh5qPWUcDa0uNp7XtX23HkEYFnBKXRaJTEl0/edit?usp=sharing); and hopefully, this is a lot of useful data. I’m using Google Sheets and NBA.com’s filter tools to clean it all up and make sure it reflects the population I’m trying to showcase.

### Process

Here are a few resources related to the art of passing in the NBA:
* [The Art of Passing by Tyler Parker](https://www.theringer.com/nba/2022/2/23/22947563/nba-passing-nikola-jokic-lamelo-ball). A fun look at passing without diving too far into the weeds.
* [Beyond assists: Passing, shot creation and offensive load by Thinking Basketball](https://www.youtube.com/watch?v=yoLgSWA7n6g). Thinking Basketball has tons of content that dives into this -- both that stats and on-court elegance -- on a very detailed level.
* [Journeying to find the NBA's best passers by Ethan Fuller](https://www.basketballnews.com/stories/stats-notebook-journeying-to-find-the-nba-best-passers). A good intro to various passing stats and their meanings.

As for my end goal here, I want to be as open as possible about the many different ways people can categorize passing in the NBA. There should not be one, broad takeaway from this visualization. I want to provide plenty of filters and interactions that give the user a chance to dive into the different statistics that define passsing; the user should have the ability to toggle between different stats while being given an understanding of these stats. In a way, I want to tell a story about the evolution of passing in the NBA. I'm not exactly sure what that story will look like, but it should be more than *just* a visualization. The fun, playful storytelling of Parker in his story about the art of passing is the vibe I want to capture.

![jwill](https://user-images.githubusercontent.com/94984667/161308461-9fbd59ce-f18a-4178-b559-5a417d75f5d2.gif)

The way [Jon Bois tells a story with a visual landscape](https://www.youtube.com/watch?v=eaTCyQMyOu8) is something I'd love to attempt to replicate. It's entertaining, energetic and engaging while also telling a story in a way that combines numbers and emotions. Here's a good example of how he lays his projects out.

![jon](https://user-images.githubusercontent.com/94984667/161309000-b4d720c1-3cf7-427a-bded-bcf385f3824d.jpg)

### Visuals and Interface Design

Here's a little bit of a mood board/color guide for my project:

![NBA_space](https://user-images.githubusercontent.com/94984667/161452639-e83e698b-ddc1-461a-b5f5-ef2cedc6b9fb.png)

The NBA's primary colors are red, white and blue. To avoid an overly-American theme, I think a black background (similar to Jon Bois) would take the emphasis off these three colors. I also want to mix in a few softer shades of these colors to avoid a too much violent contrast. 

I think as far as a 'mood board' goes, the Jon Bois layout from above is a big inspiration for me, along with the lighthearted, fun theme of the Ringer story I shared above:

![ringer_ex](https://user-images.githubusercontent.com/94984667/161452884-39e77ef6-86e9-4d0f-9926-b9c426e7ef74.png)

Here are some *very* early sketches of some of my initial ideas for this project. I want it to be easy to use and understand while also bringing something new to the table that I maybe didn't have in my first two projects:

![IMG_32D956E91AD6-1](https://user-images.githubusercontent.com/94984667/161773751-41f62828-334e-4580-b351-4eb0d07ab7ec.jpeg)

