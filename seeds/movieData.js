const { Movie } = require("../models");

const movieData = [
  {
    id: 1,
    imdbID: "tt2203939",
    title: "The Other Woman",
    genre: "Comedy",
    plot: "After discovering her boyfriend is married, Carly Whitten tries to get her ruined life back on track. But when she accidentally meets the wife he's been cheating on, she realizes they have much in common, and her sworn enemy becomes her greatest friend. When yet another affair is discovered, all three women team up to plot mutual revenge on their cheating, lying, three-timing SOB.",
    releaseDate: "2014-4-25",
    runTime: 109,
    poster: "https://m.media-amazon.com/images/M/MV5BMTc0ODE4ODY1OF5BMl5BanBnXkFtZTgwMDA5NjkzMTE@._V1_SX300.jpg",
  },
  {
    id: 2,
    imdbID: "tt0377092",
    title: "Mean Girls",
    genre: "Comedy",
    plot: "Lindsay Lohan stars as Cady Heron, a 16 year old homeschooled girl who not only makes the mistake of falling for Aaron Samuels (Jonathan Bennett), the ex-boyfriend of queenbee Regina George (Rachel McAdams), but also unintentionally joins The Plastics, led by Regina herself. Join Cady as she learns that high school life can and will be really tough.",
    releaseDate: "2004-4-30",
    runTime: 97,
    poster: "https://m.media-amazon.com/images/M/MV5BMjE1MDQ4MjI1OV5BMl5BanBnXkFtZTcwNzcwODAzMw@@._V1_SX300.jpg",
  },
  {
    id: 3,
    imdbID: "tt1001526",
    title: "Megamind",
    genre: "Comedy",
    plot: "After super-villain Megamind (Ferrell) kills his good-guy nemesis, Metro Man (Pitt), he becomes bored since there is no one left to fight. He creates a new foe, Titan (Hill), who, instead of using his powers for good, sets out to destroy the world, positioning Megamind to save the day for the first time in his life.",
    releaseDate: "2010-11-5",
    runTime: 95,
    poster: "https://m.media-amazon.com/images/M/MV5BMTAzMzI0NTMzNDBeQTJeQWpwZ15BbWU3MDM3NTAyOTM@._V1_SX300.jpg",
  },
  {
    id: 4,
    imdbID: "tt21188080",
    title: "Lisa Frankenstein",
    genre: "Comedy",
    plot: "A coming of RAGE love story about a teenager and her crush, who happens to be a corpse. After a set of horrific circumstances bring him back to life, the two embark on a journey to find love, happiness - and a few missing body parts.",
    releaseDate: "2024-2-9",
    runTime: 101,
    poster: "https://m.media-amazon.com/images/M/MV5BNjJkZDExMGQtNGE2YS00YzJiLWJiNjEtNmYwZjIxZGMxNTZiXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg",
  },
  {
    id: 5,
    imdbID: "tt0112697",
    title: "Clueless",
    genre: "Comedy",
    plot: "Cher, a high school student in Beverly Hills, must survive the ups and downs of adolescent life. Her external demeanor at first seems superficial, but rather it hides her wit, charm, and intelligence which help her to deal with relationships, friends, family, school, and the all-important teenage social life.",
    releaseDate: "1995-6-19",
    runTime: 97,
    poster: "https://m.media-amazon.com/images/M/MV5BMzBmOGQ0NWItOTZjZC00ZDAxLTgyOTEtODJiYWQ2YWNiYWVjXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg",
  },
  {
    id: 6,
    imdbID: "tt0095016",
    title: "Die Hard",
    genre: "Action",
    plot: "NYPD cop John McClane goes on a Christmas vacation to visit his wife Holly in Los Angeles where she works for the Nakatomi Corporation. While they are at the Nakatomi headquarters for a Christmas party, a group of robbers led by Hans Gruber take control of the building and hold everyone hostage, with the exception of John, while they plan to perform a lucrative heist. Unable to escape and with no immediate police response, John is forced to take matters into his own hands.",
    releaseDate: "1988-6-20",
    runTime: 132,
    poster: "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    id: 7,
    imdbID: "tt0075148",
    title: "Rocky",
    genre: "Action",
    plot: "Rocky Balboa is a struggling boxer trying to make the big time, working as a debt collector for a pittance. When heavyweight champion Apollo Creed visits Philadelphia, his managers want to set up an exhibition match between Creed and a struggling boxer, touting the fight as a chance for a \"nobody\" to become a \"somebody\". The match is supposed to be easily won by Creed, but someone forgot to tell Rocky, who sees this as his only shot at the big time.",
    releaseDate: "1976-12-3",
    runTime: 120,
    poster: "https://m.media-amazon.com/images/M/MV5BNTBkMjg2MjYtYTZjOS00ODQ0LTg0MDEtM2FiNmJmOGU1NGEwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
  },
  {
    id: 8,
    imdbID: "tt0800369",
    title: "Thor",
    genre: "Action",
    plot: "The warrior Thor (Chris Hemsworth) is cast out of the fantastic realm of Asgard by his father Odin (Sir Anthony Hopkins) for his arrogance and sent to Earth to live amongst humans. Falling in love with scientist Jane Foster (Natalie Portman) teaches Thor much-needed lessons, and his new-found strength comes into play as a villain from his homeland sends dark forces toward Earth.",
    releaseDate: "2011-5-6",
    runTime: 115,
    poster: "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    id: 9,
    imdbID: "tt0360717",
    title: "King Kong",
    genre: "Action",
    plot: "Carl Denham needs to finish his movie and has the perfect location; Skull Island. But he still needs to find a leading lady. This 'soon-to-be-unfortunate' soul is Ann Darrow. No one knows what they will encounter on this island and why it is so mysterious, but once they reach it, they will soon find out. Living on this hidden island is a giant gorilla and this beast now has Ann is its grasps. Carl and Ann's new love, Jack Driscoll must travel through the jungle looking for Kong and Ann, whilst avoiding all sorts of creatures and beasts. But Carl has another plan in mind.",
    releaseDate: "2005-12-14",
    runTime: 187,
    poster: "https://m.media-amazon.com/images/M/MV5BMjYxYmRlZWYtMzAwNC00MDA1LWJjNTItOTBjMzlhNGMzYzk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    id: 10,
    imdbID: "tt0066995",
    title: "Diamonds Are Forever",
    genre: "Action",
    plot: "James Bond's mission is to find out who has been smuggling diamonds, which are not re-appearing. He adopts another identity in the form of Peter Franks. He joins up with Tiffany Case, and acts as if he is smuggling the diamonds, but everyone is hungry for these diamonds. He also has to avoid Mr. Wint and Mr. Kidd, the dangerous couple who do not leave anyone in their way. Ernst Stavro Blofeld isn't out of the question. He may have changed his looks, but is he linked with the heist? And if he is, can Bond finally defeat his ultimate enemy.",
    releaseDate: "1971-12-17",
    runTime: 120,
    poster: "https://m.media-amazon.com/images/M/MV5BZjE1NTc2MzAtZTgzNi00ZmY0LWIxNjUtZTQwMjdlNTY0ZTM2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
  },
  {
    id: 11,
    imdbID: "tt0055614",
    title: "West Side Story",
    genre: "Musical",
    plot: "West Side Story is the award-winning adaptation of the classic romantic tragedy \"Romeo and Juliet\". The feuding families become two warring New York City gangs--the white Jets led by Riff and the Latino Sharks, led by Bernardo. Their hatred escalates to a point where neither can coexist with any form of understanding. But when Riff's best friend (and former Jet) Tony and Bernardo's younger sister Maria meet at a dance, no one can do anything to stop their love. Maria and Tony begin meeting in secret, planning to run away. Then the Sharks and Jets plan a rumble under the highway--whoever wins gains control of the streets. Maria sends Tony to stop it, hoping it can end the violence. It goes terribly wrong, and before the lovers know what's happened, tragedy strikes and doesn't stop until the climactic and heartbreaking ending.",
    releaseDate: "1961-12-23",
    runTime: 153,
    poster: "https://m.media-amazon.com/images/M/MV5BMTM0NDAxOTI5MF5BMl5BanBnXkFtZTcwNjI4Mjg3NA@@._V1_SX300.jpg",
  },
  {
    id: 12,
    imdbID: "tt3783958",
    title: "La La Land",
    genre: "Musical",
    plot: "Aspiring actress serves lattes to movie stars in between auditions and jazz musician Sebastian scrapes by playing cocktail-party gigs in dingy bars. But as success mounts, they are faced with decisions that fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
    releaseDate: "2016-12-25",
    runTime: 128,
    poster: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SX300.jpg",
  },
  {
    id: 13,
    imdbID: "tt0077631",
    title: "Grease",
    genre: "Musical",
    plot: "A musical about teens in love in the 1950s. It's California 1958 and greaser Danny Zuko (John Travolta) and Australian Sandy Olsson (Olivia Newton-John) are in love. They spend time at the beach, and when they go back to school, what neither of them knows is that they both now attend Rydell High. Danny's the leader of the T-Birds, a group of black leather jacket-wearing greasers while Sandy hangs with the Pink Ladies, a group of pink-wearing girls led by Rizzo (Stockard Channing). When they clash at Rydell's first pep rally, Danny isn't the same Danny from the beach. They try to be like each other so they can be together.",
    releaseDate: "1978-6-16",
    runTime: 110,
    poster: "https://m.media-amazon.com/images/M/MV5BZmUyMDEyOTgtZmUwOS00NTdkLThlNzctNTM1ODQ4M2VhMjdhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    id: 14,
    imdbID: "tt0299658",
    title: "Chicago",
    genre: "Musical",
    plot: "Murderesses Velma Kelly (Catherine Zeta-Jones) (a chanteuse and tease who killed her husband and sister after finding them in bed together) and Roxie Hart (Renée Zellweger) (who killed her boyfriend when she discovered he wasn't going to make her a star) find themselves on death row together and fight for the fame that will keep them from the gallows in 1920s Chicago.",
    releaseDate: "2003-1-24",
    runTime: 113,
    poster: "https://m.media-amazon.com/images/M/MV5BN2E3NDU1ZTktNzZjNy00MWU3LWI4YmMtMjdjNTIzMDU0MDdiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    id: 15,
    imdbID: "tt0795421",
    title: "Mamma Mia!",
    genre: "Musical",
    plot: "Set on a colorful Greek island, the plot serves as a background for a wealth of ABBA songs. A young woman about to be married discovers that any one of three men could be her father. She invites all three to the wedding without telling her mother, Donna Sheridan (Meryl Streep), who was once the lead singer of Donna and the Dynamos. In the meantime, Donna has invited her back-up singers, Rosie Mulligan (Dame Julie Walters) and Tanya Wilkinson (Christine Baranski).",
    releaseDate: "2008-6-18",
    runTime: 108,
    poster: "https://m.media-amazon.com/images/M/MV5BMTA2MDU0MjM0MzReQTJeQWpwZ15BbWU3MDYwNzgwNzE@._V1_SX300.jpg",
  },
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;
