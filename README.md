# Movie Picker

##  Description: 
Reel Report is an innovative app designed to transform how users discover movies. Reel Report will give recommendations based on genre such as, musical, comedy, and action. It offers personalized movie recommendations and can be added to a watchlist for later viewing. Additionally, the user can enter movies into the database to reccomend to other users. This app uses a movie database API called OMDb to ensure users have access the film's additional data. Its user-friendly interface makes finding your next favorite film an enjoyable and effortless experience.

## [Deployed Application](https://reel-report-8887d227dacc.herokuapp.com/) 

## ![Screenshot of Deployed Application](<public/assets/images/reel-report-screenshot.png>)

## User Story:

### Movie Enthusiast
- As a movie enthusiast
- I want to add a movie(s) to a movie database,
- So that other users can have the movie(s) reccomended for them to watch

### User Seeking Entertainment
- As a user seeking entertainment
- I want to receive movie recommendations based on genre,
- So that I can easily find my next favorite movie to add to my watchlist

## Acceptance Criteria:

### Login/Sign Up
- Given I am a new or returning user intending to access personalized movie recommendations,
- When I navigate to the application's login page and enter my credentials,
- Then I am directed to the homepage where I can begin to specify my movie preferences based on genre or add a movie to database.
  
### Movie Reccomendation
- Given I am on the homepage ready to find a new movie to watch,
- When I select my preferred movie genre, musical, comedy, and action,
- Then the application generates a recommended movie that matchs my selected criteria, offering a personalized viewing suggestion.
   
### Add Movie
- Given I am a user with a movie to add to the database,
- When I input a movie's title, genre, and plot,
- then the application stores the movie into the database to reccomend to users. 

### Watchlist
- Given I have previously explored and selected several movies as my favorites or picks,
- When I visit the 'Watchlist' section of the application,
- Then I am presented with a curated list of the movies I've marked as a favorite, allowing me to easily access or modify my selections.
 
## Usage: 

### Login/Sign Up
- User opens the application.
- User is presented with the option to log in or sign up on the navigation bar.
    - New User: User selects "Sign Up," enters required information, and creates an account.
    - Returning User: User selects "Log In" and enters credentials.
- Upon successful login or signup, the user is directed to the homepage.

### Homepage
The homepage offers the option to either add a movie or search for a reccomendation.

#### Add a Movie
- User can only add a movie if user is logged in.
- Once logged in, user can enter the title, genre, and plot of the movie. 
- The application then uses a server-side API to retrieve run time and release date and stores the information for reccomendations.

#### Reccomendations/Reel Report
- User is presented with the option to choose a movie based on genre. 
- The application generates a random movie based on the genre. 
- The "Reel Report" is displayed. 
- The user has the option to add to watchlist if logged in.
- The user also has the option to generate another movie in selected genre.

### Watchlist
- User can only access watchlist if logged in.
- Option to add to watchlist: User can mark movies as a favorite for later viewing.
- From any page, the user can navigate to the 'Watchlist' section.
- This section displays all the movies previously marked as their favorites, allowing the user to modify or remove selections.

### Log Out
Once user logs out the session ends.

## Credits

### Developers
- [April Vasquez](https://github.com/apri1mayrain)
- [Kalyn Sifuentez](https://github.com/kalynsifuentez)
- [Bryce Wheeler](https://github.com/BryceGitHuba)
- [Itzel Hernandez](https://github.com/itzelherndz)

### Server Side APIs:
- [Open Movie Database API](https://www.omdbapi.com/)

### CSS Framework:
- [Pico CSS](https://picocss.com/)

### Google Fonts: 
- [Fjalla One](https://fonts.google.com/specimen/Fjalla+One)

## License
Please refer to [LICENSE](./LICENSE) file in Movie Picker repository.
