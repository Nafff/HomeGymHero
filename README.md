# Project Overview

https://homegymhero.netlify.app/

## Project Name

Home Gym Hero (HGH)

## Project Description

This website allows the user to select the gym equipment that they own and it will generate a list of exercises available to them based on the selected equipment. The user can select exercises they would like to use and add them to a workout tab. Selecting any exercise will show a video and description and allow the user to edit or delete the exercise. Users can add new exercises to the API via a form.

## API and Data Sample

https://api.airtable.com/v0/appliaerxqn035dI6/homegym

```
{
    "records": [
        {
            "id": "recrbtgroTfUfIfkR",
            "fields": {
                "exercise": "Bench Press",
                "equipment": "Barbell",
                "bodyPart": "Chest",
                "videoUrl": "https://www.youtube.com/watch?v=esQi683XR44",
                "workoutInfo": "Bench Press in the Power Rack for maximum safety. Set the safety pins at the proper height so they catch the weight if you fail to lift it. You don’t need a spotter if you Bench Press inside the Power Rack as I do. If you don’t have a Power Rack, ask someone in the gym to spot you when you Bench Press. Then follow these five simple steps to Bench Press with proper form.\n\nSetup. Lie on the flat bench with your eyes under the bar. Lift your chest and squeeze your shoulder-blades. Feet flat on the floor.\nGrab the bar. Put your pinky on the ring marks of your bar. Hold the bar in the base of your palm with a full grip and straight wrists.\nUnrack. Take a big breath and unrack the bar by straightening your arms. Move the bar over your shoulders with your elbows locked.\nLower the bar. Lower it to your mid-chest while tucking your elbows 75°. Keep your forearms vertical. Hold your breath at the bottom.\nPress. Press the bar from your mid-chest to above your shoulders. Keep your butt on the bench. Lock your elbows at the top. Breathe.",
                "workoutTips": "Proper Bench Press form increases effectiveness. It moves the bar over the shortest distance from your mid-chest to your shoulders. The shorter the distance the bar has to move, the easier to lift the weight. Proper Bench Press form also improves the transfer of force from your chest and shoulder muscles into your forearms to the bar. And it improves stability while avoiding bad leverage. All of this increases your Bench Press.\n\nRead more https://stronglifts.com/bench-press/"
            },
            "createdTime": "2021-08-20T13:17:45.000Z"
        }
    ]
}
```


## Wireframes

![alt text](https://res.cloudinary.com/dy6xpqkkj/image/upload/v1629470574/Home%20Gym%20Hero/Wireframe/Screen_Shot_2021-08-20_at_10.41.01_AM_fsnxun.png)
![alt text](https://res.cloudinary.com/dy6xpqkkj/image/upload/v1629470574/Home%20Gym%20Hero/Wireframe/Screen_Shot_2021-08-20_at_10.41.37_AM_ttrri0.png)
![alt text](https://res.cloudinary.com/dy6xpqkkj/image/upload/v1629470574/Home%20Gym%20Hero/Wireframe/Screen_Shot_2021-08-20_at_10.41.46_AM_jfyrrp.png)
![alt text](https://res.cloudinary.com/dy6xpqkkj/image/upload/v1629470574/Home%20Gym%20Hero/Wireframe/Screen_Shot_2021-08-20_at_10.41.53_AM_kx9cud.png)
![alt text](https://res.cloudinary.com/dy6xpqkkj/image/upload/v1629470574/Home%20Gym%20Hero/Wireframe/Screen_Shot_2021-08-20_at_10.42.04_AM_nthd7e.png)
![alt text](https://res.cloudinary.com/dy6xpqkkj/image/upload/v1629470574/Home%20Gym%20Hero/Wireframe/Screen_Shot_2021-08-20_at_10.42.11_AM_aiyzuf.png)

https://whimsical.com/home-gym-helper-6yCTeQokT1CvYDAmexeehp

## Component Hierarchy

![alt text](https://res.cloudinary.com/dy6xpqkkj/image/upload/v1629490162/Home%20Gym%20Hero/Wireframe/Screen_Shot_2021-08-20_at_3.23.14_PM_f6misn.png)

#### MVP 

- Use Airtable API to read/write/edit/delete exercise information
- Have a sidebar accessible via hamburger menu that allows the user to see pieces of equipment they own and workouts they selected
- Allow the user to select what they own from a list of gym equipment and add it to a list
- User can generate a list of exercises available to them based on the list of equipment they own
- User can click on any workout from either the list of exercises or the sidebar and be redirected to information about the exercise
- User can add new exercises or edit existing exercises via a form component

#### PostMVP  

- Can search for exercises by name or body part
- Use local storage to save user favorites
- Gamify workouts through exp gain based on amount of pounds lifted
- Adding multiple body parts to certain exercises so they can be accessed multiple ways 
- Add more equipment options

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|August 19| Prompt / Wireframes / Component Hierarchy | Complete
|August 20| Component Hierarchy / Priority Matrix /Timeframes / Create and populate API / Project Approval| Complete
|August 23| Finish populating API / Core Application Structure (HTML, CSS, etc.) / Psuedocode | Incomplete
|August 24| Coding and setting up API functionality | Incomplete
|August 25| Initial Clickable Model / CSS Styling | Incomplete
|August 26| MVP / Finish Styling / Post-MVP| Incomplete
|August 27| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Basic HTML/CSS/JS | H | 2hrs| 2hrs | 2hrs |
| Populate API | H | 2hrs| 2hrs | 4hrs |
| Create Components | H | 1hrs| 0.5hrs | 4.5hrs |
| Link API | H | 1hrs| 0.5hrs | 5hrs |
| Create States | H | 2hrs| 2hrs | 7hrs |
| Main page | H | 3hrs| 4hrs | 11hrs |
| Side bar | H | 5hrs| 7hrs | 18hrs |
| Excersizes component | H | 4hrs| 6hrs | 24hrs |
| Excersize Info component | H | 4hrs| 4hrs | 28hrs |
| Form component | H | 4hrs| 4hrs | 32hrs |
| Styling | H | 9hrs| 6hrs | 41hrs |
| FlexBox / Grid | H | 8hrs| 0hrs | 0hrs |
| Media Queries | H | 6hrs| 0hrs| 0hrs |
| Material UI | H | 0hrs| 12hrs| 50hrs |
| Total | H | 52hrs| 53hrs | 53hrs |

## Code Snippet

Description here

```
{
}
```

## SWOT Analysis

Strengths:
- Coding comprehension
- Always have new ideas

Weaknesses:
- Time management
- Getting too ambitious

Opportunities:
- Paring down my ambitions to more attainable goals in a given timeline

Threats:
- Taking too much time to perfect small details rather than focusing on reaching MVP
- Spending too much time working with collegues rather than focusing on my own work


## Change Log

|  Day | Changes
|---|---|
|August 19| Wireframe Complete
|August 19| Component Hierarchy Complete
|August 19| Started README
|August 20| Priority Matrix Complete
