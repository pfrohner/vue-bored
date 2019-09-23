# Bored App - frontend interview task

## Introduction
Your task is to create a frontend app for the [Bored API](http://www.boredapi.com/documentation) according to this [wireframe](https://raw.githubusercontent.com/ngabesz-wse/bored-app/master/bored-app-wf.jpg).
How you decide about the small details is up to you but since this is a UI try to make it nice and usable.

You also have to share the code and deploy your app where we can try it.

## Requirements
- If it is not specified you can use any tools and frameworks.
- When the user first opens the Activity page suggest a random activity. Set the details according to the random event.
- **Activity page**: It is crucial not to reload the page when the user switches between the Activity and My list pages.
If any of the activity details have been changed update the page without reloading it.
- After pressing the **Save for later** button store the current activity. It will be available in the List page as a list view.
- If the user closes the browser the app must remember the saved activities and they must be available in the My list page.
- Pressing the **Hit me with a new one!** button will recommend a new activity according to the selected acivity details.
- **My list page**: Here the user can see the saved activities. At the end of every row there is an action button to delete the activity.
- A **Clear all** will delete all the saved suggestions .

---
## MVP Solution
https://pfrohner.github.io/vue-bored/

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production.
```
npm run build
```

### Builds and deploys to github.io
```
npm run deploy
```

### Run your tests
```
npm run test
```

## Todos
 - Finish tests for 'Bored' component.
 - Force eslint rules and format on save in tests as well.
 - Fix duplicated key warning when saving the same event multiple times.
 - Run tests before building and deploying the app.
 - Pagination for list page.
