# WealthJourney Planner
### Financial navigation made simple


## Table of Contents
1. [Introduction](#introduction)
2. [Team](#team)
3. [Problem Space](#problem-space)
4. [User & Market Research](#user--market-research)
5. [Our Solution](#our-solution)
6. [Demonstration](#demonstration)
7. [Key Insights](#key-insights)
8. [References](#references)


### Introduction
Our Industry Project WealthJourney Planner is a financial learning tool created for Wealthsimple, one of BrainStation's Industry Partners. This product was researched, designed, and produced during a 24-hour collaborative tech sprint from 30 May - 31 May 2024.  

<img src="./src/assets/images/ws-logo-invert.png" width="350">


### Team 6: Simple Solutions
Our team consisted of 5 software engineering students:
- Lily Chen
- Rana Ibrahim
- Norah Xie
- Carly Wilk
- Praise Yu


### Problem Space
How might we help Wealthsimple clients in Canada to improve their financial literacy and make better personal finance decisions?


### User & Market Research
Our app today will focus on young Canadians, ranging between the ages of 18-35. Young Canadians today are facing a world with a diverse range of financial issues, including student debt, a precarious job market, record-breaking inflation and rising cost of living, and post-pandemic economic disruption. Nearly half of young Canadians are battling moderate to high debt, with 60% surviving paycheque to paycheque. According to StatsCanada, young households were spending 10 cents per dollar earned on debt in 2023, up from seven cents a dollar in 2022. These are just some of the facts that highlight a need for an increase in financial knowledge and literacy, especially tailored to each individual's unique situations. 


### Our Solution
WealthJourney Planner was imagined with user experience as the priority; how could we as developers create a space in which financial learning was continuous and accessible?

Our solution utilizes user input in order to generate personalized recommendations and learning materials sourced from the Wealthsimple website. The questionnaire uses a number of questions to determine where in their financial journey the user is situated, taking into consideration their short-term and long-term goals when computing a result. 

We categorized the materials available on Weathsimple's site into seven groups based on if the user was just beginning their financial journey, or looking for more in depth knowledge to aid in portfolio growth (see below). 

1. Beginning Your Journey
2. Implementing Habits
3. Learning to Save
4. Paying Your Taxes
5. Big Purchases
6. Growing Your Money
7. Digital Currency

Different questionnaire endpoints will return depending on how the user answers the questions. 

After questionnaire completion, WealthJourney Planner continues to provide the user with educational resources in order to guide them and further clarify their saving priorities. If the user is looking to move in a different direction with their finances, the questionnaire can be completed again with these new considerations in mind. WealthJourney Planner then leverages the users past goals and new priorities to source different learning materials that align with their future goals.  


### Demonstration
Project-related assets (eg. sample user profile, questionnaire and related endpoints) can be found [here](https://drive.google.com/drive/folders/1nT1kQ2eSx-ar7iAK1JKwhaD80V6zPw7Z?usp=sharing)

As the user provides details on their financial situation, WealthJourney Planner is able to determine at which stage the user is positioned. The result of the questionnaire categorizes the user into one of the several groups and then returns learning resources to the user accordingly. 

[WealthJourney Planner Mockups](./src/assets/mockups/WS-WealthJourney-PlannerMockup.pdf)

A widget added on the landing dashboard at the user's Wealthsimple account, where two clickable cards will live that direct the user to two different personalized learning pages, updated weekly. 

The number of resources presented to the user is not static; we are looking to build a product that guides the user along their financial journey, growing and moving with them.


### Possible Growth & Future Directions
A notification system where users receive pings related to their learning journey in financial literacy. These notifications aim to encourage and prompt users to continue their progress by reminding them of their achievements so far and suggesting additional resources for further learning.

Implementing a page within the navigation bar that directs the user to a list of all learning materials related to their journey. A progress bar will indicate to the user how much learning they have completed and encourage the user to continue with their lessons. Resources that have been reviewed will relocate to the bottom of the list and be greyed out to indicate their completion. 

Chatbot functionality that when the user asks various questions about their financial status, the bot will return related updates and encouragements. For example, the user could ask the chatbot how their investments are performing, if they are on track with their budget, or if they could recommend further reading regarding a specific topic. 


### References
- [Wealth Simple](https://www.wealthsimple.com/en-ca)
- [5 ways young Canadians can prepare financially for what awaits in 2024](https://www.moneysense.ca/columns/making-it/5-ways-young-canadians-can-prepare-financially-for-next-year/)
- [Affordability issues are ‘casting a shadow’ over young Canadians’ economic futures](https://globalnews.ca/news/10386858/affordability-issues-casting-a-shadow-over-young-canadians-economic-futures/)
- [Nearly half of Canadians have lost sleep over financial stress, especially young people: survey](https://www.ctvnews.ca/business/nearly-half-of-canadians-have-lost-sleep-over-financial-stress-especially-young-people-survey-1.6474641)
- [New and young Canadians driving growth of $2.4 trillion debt mountain](https://www.wealthprofessional.ca/news/industry-news/new-and-young-canadians-driving-growth-of-24-trillion-debt-mountain/385999#:~:text=Millennials%20recorded%20a%205%25%20rise,around%2038%25%20of%20all%20debt)
- [Young Canadians Opting Out of Homeownership](https://www.linkedin.com/pulse/young-canadians-opting-out-homeownership-nesto-ca-jad1e/)
- [Young money: four-in-five Canadian teens are highly motivated to become financially independent](https://www.rbc.com/newsroom/news/article.html?article=125850)