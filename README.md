# Project Overview

## Project Name

Fermently

## Project Description

An open-ended application that can be tailored to track information about a wide variety of fermentation projects from beer and wine to lactofermented vegetables or whatever else you can imagine.

## Wireframes
### Home page
![alt text](https://i.imgur.com/v3Q4ufnl.png "Wireframe - Home")
### Category View
![alt text](https://i.imgur.com/N9j01Lsl.png "Wireframe - Category View")
### Detailed View
![alt text](https://i.imgur.com/z7y4ih2l.png "Wireframe - Details")
### New Project Form
![alt text](https://i.imgur.com/NRViDT5l.png "Wireframe - Add")
### Help Page
![alt text](https://i.imgur.com/XGutoOsl.png "Wireframe - Help")

## Component Hierarchy 

![alt text](https://i.imgur.com/r0IdrvHl.png "Component Heirarchy")

## API and Data Sample

Fermently is an Airtable-based application.

```json
{
    "records": [
        {
            "id": "recN6ggQxM7KTgokV",
            "fields": {
                "Title": "Sauerkraut",
                "Date": "9/21/2020",
                "Ingredients": "2.5k caraflex cabbage\n46g salt",
                "Method": "cabbage shredded, transferred to 2gal crock, and salted\nmuddled after 2 hours\nweight placed and covered\nfermented at room temp",
                "Notes": "yeastybois"
            },
            "createdTime": "2021-02-16T15:37:00.000Z"
        },
        {
            "id": "recTOGq7ZS8SnLNNY",
            "fields": {
                "Title": "Riesling",
                "Date": "8/15/2020",
                "Ingredients": "riesling must concentrate\nwater\nwild yeast culture",
                "Method": "must concentrate diluted to 1.091\nyeast pitched with 6g Fermfast nutrients\nfermented at 65F for 1 month until gravity of .998 reached\nbottled with 32p...",
                "Field 1 Title": "Starting Gravity",
                "Field 1 Text": "1.091",
                "Field 2 Title": "Final Gravity",
                "Field 2 Text": ".998",
                "Field 3 Title": "SO2",
                "Field 3 Text": "32ppm"
            },
            "createdTime": "2021-02-16T15:37:00.000Z"
        },
        {
            "id": "recfrOJHmr49uDYvC",
            "fields": {},
            "createdTime": "2021-02-16T15:37:00.000Z"
        }
    ],
    "offset": "recfrOJHmr49uDYvC"
}
```

## MVP

- Connect to Airtable API
- Render existing project titles in sidebar
- Sidebar projects link to detailed view
- Allow user to create projects with at least 4 custom fields, letting them tailor the application to a wide variety of use - cases.
- Unused fields will not be rendered
- Edit form to make adjustments and updates to projects
- Media query for mobile-friendly layout (potentially mobile-first design so I would mostly be using this from my phone)

## PostMVP

- Greater styling - smooth transition animations and visual styling to give it a fermentation visual theme.
- Additional custom fields
- Resource page with links to troubleshooting help and project ideas.


## Project Schedule
|  Day | Deliverable | Status
|---|---| ---|
|Feb 16| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Feb 16| Project Approval | Incomplete
|Feb 16| Pseudocode| Incomplete
|Feb 17| Core Application Structure (HTML, React component structure), Airtable exploration|Incomplete
|Feb 18| Initial Clickable Model, CSS styling |	Incomplete
|Feb 19| MVP |Incomplete
|Feb 20| Post-MVP | Incomplete
|Feb 23| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Actual Time |
|---|---|---|---|
| Core app html |   H   | 1hr | -   |
|Component structure and function|    H  | 4hrs |  -
|API data integration | H | 2hrs | -
|Formatting project display | H | 4hrs | -
|Airtable exploration | H | 4hrs | -
|Formatting new project form | H | 4hrs |	-
|Edit form functionality | H | 2hrs | -
|CSS styling | H | 2hrs | -
|Adding resources | L | 2hrs | -
|Adding additional custom fields | M | 2hrs | -
|Adding styling to look more ferment-y | L | 2hrs | -
|Transitions| M | 1hr | -
|Total|	- | 30hrs | -

## SWOT Analysis

- Strengths: My project idea is coming from an actual need: many apps I've used have been too tailed to one specific type of fermentation project and their specificity has made them ONLY useable for that one thing. My application is less detailed (no fancy charts) but more open-ended  to track high-level data and a few specifics about whatever you might be working on.
- Weaknesses: I'm going to have to figure out how to collect more than just single-line data, like an ingredients list, and store it in airtable in a way where I can cleanly access it to display it in easily recognizable formats like a bulleted list.
- Opportunities: To fill an actual need in my life and store information about my projects in an easily accessible format.
- Threats: Ending up with a huge, confusing Airtable spreadsheet that is very difficult to store and render data from. To mitigate this I've dedicated a full half-day to researching Airtable so I can best understand how best to collect data through the form so I can cleanly render it.
