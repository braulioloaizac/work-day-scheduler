# Work day Scheduler

In this project the main objective is develop a scheluder for the daily tasks in which the user can write and edit the tasks that are assigned to him during hours of labor (9 to 5), he can see the current hour too, if he clicks the save button the task will be saved on the localStorage in the case of the page being closed everything is going to be saved.

## Logic behind the code

From a starter code provided by the instructor the first thing to add was the current date, for that we used the luxon API that manages time and dates in real time, with that we were able to show the day, month and the year.
The next issue was, show the current, past and future hours with colors inside the tasks fields, for that again we used the same API to get the current hour and with that value we were able to establish the fields of the past hours with gray, the actual hour field with red and the hours after with green.
For the next step we had to make the time blocks editable and when the user clicks on the save button the content is going to be saved on the localStorage , for that we used the jqery library and the event delegation definition (to associate the save button to each time block) and asign the content to an array that is going to be saved on the localStorage and when the page loads again it gets the localStorage data and displays it on the time block.

Here's a sreenshot of the app
![alt text](./snapshot.png "snapshot")

And here's the app link
https://braulioloaizac.github.io/work-day-scheduler/



 
