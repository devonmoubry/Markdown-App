What is it?
-----------
TIY Spring 2017 Front End Development assignment.

What does it do?
----------------
An app to create markdown friendly notes

**Explorer Mode**
Using React, Redux, React Router, and a fresh clone of the webpack starter you will be creating an app that allows users to write up notes in text area in markdown, see a live preview of that note on the same page and finally submit to save the note on the server.

Your app will use multiple react components to present a text area to the user where they can type a note.
As the user types into the textarea they should see their markdown code parsed and previewed in a box of the same side on the right hand side of the page.
When the user hits submit the content should be sent to backendless and saved.
The notes need to be longer than 50 characters, anything less should not be sent to backendless.
The user should get confirmation on the page that their post was saved successfully.
The text area should empty after their post is saved.

**Notes**
To handle the markdown parsing you'll need two things.
The marked JS library.
Know how to dangerously Set Inner HTML
Example UI http://markdownlivepreview.com/
Yours will obviously look much better than this, but that is the desired layout.

**Adventure Mode**
Write tests for your components and your reducer
Allow the users to navigate to a page that shows all the existing notes in markdown or in the compiled HTML.

**Epic Mode**
Allow the users to edit previously created notes.

Live Version
------------
https://motionless-crowd.surge.sh

--------------------------------------------------------------------------------
Created by Devon Moubry.
devon@moubry.com
