# Notes

So here it is :)

I decided to install the required tools for this project to become production ready,

* eslint: a few rules had to be disabled because it conflicts with Flow errors or buggy
* flow: not all params are typed. For this project to be more complete I would aim to type everything properly for safety (remove the * s)

## Todos

1. Error feedback improvements: the error feedbacks can be better (should be!). Initially I only had the red outlines on text boxes but at the very end of this project I decided to add a message box to display detailed reasons. It's incomplete and rough but I do want to leave it in to show the idea
2. Complete typing, fix linting issues
3. Styling can be centralised: I used bootstrap to give myself a quick start. There are custom css and styles in quite a few places. They should be tidied up.
4. Tests (of course!)
5. Cannot think of more component refactors for now (YAGNI trumps DRY) but there may be more when I come back to look at this again.
6. Supported browser testing: this is only tested in Chrome & Firefox
