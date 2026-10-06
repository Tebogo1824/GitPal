# .RepoHug
 
### See what makes a developer tick.
 
.RepoHug is a small website where you type a GitHub username or profile URL and get a quick peek at that developer's projects, languages, stars and activity.
 
**Status: v1.** The homepage, search box and light/dark theme are done. Fetching real GitHub data is planned for v2.
 
## Home Page Screenshots
 
### Dark theme  

![RepoHug homepage in dark theme](images/screenshot-dark.png)<img width="1525" height="897" alt="RepoHug – See what makes a developer tick(4)" src="https://github.com/user-attachments/assets/c385d8c3-d02f-4ee1-ba42-5ded0a3247db" />

### light screen
<img width="1366" height="896" alt="RepoHug – See what makes a developer tick(1)" src="https://github.com/user-attachments/assets/fb72b678-76fa-4c52-bdcc-ac55fe54b4cb" />

### About Page

<img width="1366" height="3929" alt="About _ RepoHug(4)" src="https://github.com/user-attachments/assets/52165aa6-a174-4e4f-9d21-2df025ee9b44" />

<img width="1366" height="3437" alt="About _ RepoHug(5)" src="https://github.com/user-attachments/assets/64b272e4-21b9-4bc3-a51c-a7b5b27d68c2" />

## Repo Analysis

<img width="1366" height="2606" alt="RepoHug – See what makes a developer tick(2)" src="https://github.com/user-attachments/assets/02225dba-93cc-49b4-958b-7e60bec64e8f" />

<img width="1366" height="2750" alt="RepoHug – See what makes a developer tick" src="https://github.com/user-attachments/assets/4c498473-96e6-4f35-9fa3-95c038fa0a68" />

## Features (v1)
 
- Search box that accepts a username (`torvalds`), an `@username`, or a full GitHub URL
- Checks the input and shows a clear message if it isn't a valid GitHub username
- Light and dark theme with a toggle button
- Follows your device's theme setting by default
- Responsive layout for phones and desktops
- Keyboard friendly, with labels for screen readers
- Look up the user through the GitHub API
- Profile card, stats, top languages and top repositories
- Messages for loading, user not found and network errors
- 
## V2 features coming...
 

## Built with
 
- HTML
- CSS
- Vanilla JavaScript (no frameworks, no build tools)
- Fonts: Instrument Serif and Newsreader (Google Fonts)
- 
## How to run it
 
1. Download or clone this project.
2. Open the folder in VS Code.
3. Right-click `index.html` and choose **Open with Live Server**.
Or, with Python installed, run this in the project folder:
 
```
python -m http.server
```
 
Then open `http://localhost:8000` in your browser.
 
## Project structure
 
```
repohug/
  index.html     homepage
  about.html     about page
  styles.css     all styles
  script.js      theme toggle and search logic
  theme.js      light theme/ dark theme
  README.md
```
 
## Author
 
Made by Tebogo McCoy. Feel free to open an issue if you find a bug.
 
