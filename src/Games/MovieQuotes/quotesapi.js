import React from "react"

const quotes = [
    {
        id: 1,
        quote: `It's a hell of a thing killing a man. You take away all he's got... all he's ever gonna have`,
        title: 'Unforgiven',
        options: ['Unforgiven', 'The Wild Bunch', 'Open Range', 'Shane']
    },
    {
        id: 2,
        quote: `Fly you fools`,
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        options: ['Eddie the Eagle', 'Fly Away Home', 'The Lord of the Rings: The Fellowship of the Ring', 'Flight']
    },
    {
        id: 3,
        quote: `We'll always have Paris`,
        title: `Casablanca`,
        options: ['Gone With the Wind', 'The Philadelphia Story', 'Casablanca', 'Sleepless in Seattle']

    },
    {
        id: 4,
        quote: `The uhh... stuff that dreams are made of.`,
        title: `The Maltese Falcon`,
        options: ['The Big Sleep', 'Key Largo', 'The Maltese Falcon', 'Double Indemnity']
    },
    {
        id: 5,
        quote: `How could I have known that murder could sometimes smell like honeysuckle?`,
        title: `Double Indemnity`,
        options: ['Detour', 'In a Lonely Place', 'Laura', 'Double Indemnity']
    },
    {
        id: 6,
        quote: `A man doesn't tell a woman what to do. She tells herself.`,
        title: `Notorious`,
        options: ['Notorious', 'The Killing', 'Double Indemnity', 'Key Largo']
    },
    {
        id: 7,
        quote: `Neither do I, baby, but if I have to, I'm going to die last.`,
        title: `Out of the Past`,
        options: ['Detour', 'Out of the Past', 'Double Indemnity', 'To Have and Have Not']
    },
    {
        id: 8,
        quote: `Badges? We ain't got no badges. We don't need no badges. I don't have to show you any stinking badges.`,
        title: `The Treasure of the Sierra Madre`,
        options: ['The Wild Bunch', 'For a Few Dollars More', 'The Treasure of the Sierra Madre', 'Shane']
    },
    {
        id: 9,
        quote: `I was born when she kissed me. I died when she left me. I lived a few weeks while she loved me.`,
        title: `In a Lonely Place`,
        options: ['The Big Sleep', 'To Have and Have Not', 'Key Largo', 'In a Lonely Place']
    },
    {
        id: 10,
        quote: `I AM big. It's the pictures that got small.`,
        title: `Sunset Blvd.`,
        options: ['Sunset Blvd.', 'Ace in the Hole', 'All That Jazz', 'Some Like it Hot']
    },
    {
        id: 11,
        quote: `Fasten your seatbelts, it's going to be a bumpy night!`,
        title: `All About Eve`,
        options: ['The Big Sleep', 'All About Eve', 'It Happened One Night', 'My Man Godfrey']
    },
    {
        id: 12,
        quote: `You don't understand. I coulda had class. I coulda been a contender. I coulda been somebody, instead of a bum, which is what I am, let's face it. It was you, Charley.`,
        title: `On the Waterfront`,
        options: ['To Have and Have Not', 'White Heat', 'On the Waterfront', 'A Streetcar Named Desire']
    },
    {
        id: 13,
        quote: `Why would a man leave his apartment three times on a rainy night with a suitcase and come back three times?`,
        title: `Rear Window`,
        options: ['North by Northwest', 'Rear Window', 'Psycho', 'The Birds']
    },
    {
        id: 14,
        quote: `Would you like me to tell you the little story of right-hand/left-hand? The story of good and evil?`,
        title: `The Night of the Hunter`,
        options: ['The Night of the Hunter', 'Out of the Past', 'Cape Fear', 'Angel Face']
    },
    {
        id: 15,
        quote: `That's funny, that plane's dustin' crops where there ain't no crops.`,
        title: `North by Northwest`,
        options: ['Rear Window', 'Shadow of a Doubt', 'North by Northwest', 'Psycho']
    },
    {
        id: 16,
        quote: `I haven't seen Berlin yet, from the ground or from the air, and I plan on doing both before the war is over.`,
        title: `The Great Escape`,
        optons: ['The Magnificent Seven', 'The Great Escape', 'Bullitt', 'The Cincinatti Kid']
    },
    {
        id: 17,
        quote: `I swear, if you existed, I'd divorce you.`,
        title: `Who's Afraid of Virginia Woolf?`,
        options: ['Awakenings', `Who's Afraid of Virginia Woolf?`, 'Giant', 'Cat on a Hot Tin Roof']
    },
    {
        id: 18,
        quote: `Well that's you, Marlowe. You'll never learn, you're a born loser.`,
        title: `The Long Goodbye`,
        options: ['The Big Sleep', 'The Long Goodbye', 'Marlowe', 'Farewell, My Lovely']
    },
    {
        id: 19,
        quote: `The swan's escaped`,
        title: `Hot Fuzz`,
        options: [`The World's End`, 'Shaun of the Dead', 'Hot Fuzz', 'Baby Driver']
    },
    {
        id: 20,
        quote: `Did he just say funky butt loving?`,
        title: `Rookie of the Year`,
        options: ['Rookie of the Year', 'The Big Green', `A Kid in King Arthur's Court`, 'Little Big League']
    },
    {
        id: 21,
        quote: `Keep your lovin' brother happy.`,
        title: `Once Upon a Time in the West`,
        options: ['The Wild Bunch', 'Once Upon a Time in the West', 'Unforgiven', 'Shane']
    },
    {
        id: 22,
        quote: `Leave the gun...take the cannolis`,
        title: `The Godfather`,
        options: ['The Godfather', 'The Godfather II', 'Goodfellas', 'Casino']
    },
    {
        id: 23,
        quote: `Smile, you son of a bitch!`,
        title: `Jaws`,
        options: ['The Dentist', 'The Meg', 'Jaws', 'Aliens']
    },
    {
        id: 24,
        quote: `ATTICA! ATTICA! ATTICA!`,
        title: `Dog Day Afternoon`,
        options: ['Dog Day Afternoon', 'Serpico', '12 Angry Men', 'Network']
    },
    {
        id: 25,
        quote: `You're gonna eat lightnin' and you're gonna crap thunder!`,
        title: `Rocky`,
        options: ['Rocky', 'Rocky 2', 'Rocky 3', 'Creed']
    },
    {
        id: 26,
        quote: `I'm listening to the fucking song!`,
        title: `Slap Shot`,
        options: ['Miracle', 'Mystery, Alaska', '']
    },
    {
        id: 27,
        quote: `You talkin' to me? You talkin' to me?`,
        title: `Taxi Driver`
    },
    {
        id: 28,
        quote: `I'm sorry, Dave. I'm afraid I can't do that.`,
        title: `2001: A Space Odyssey`
    },
    {
        id: 29,
        quote: `A census taker once tried to test me. I ate his liver with some fava beans and a nice chianti.`,
        title: `The Silence of the Lambs`
    },
    {
        id: 30,
        quote: `Closer, please. Clo-ser...`,
        title: `The Silence of the Lambs`
    },
    {
        id: 31,
        quote: `All right, you proved your point. You broke into my vault. Congratulations, you're a dead man.`,
        title: `Ocean's Eleven`
    },
    {
        id: 32,
        quote: `We're gonna be doin' one thing and one thing only... killin' Nazis`,
        title: `Inglourious Basterds`
    },
    {
        id: 33,
        quote: ``,
        title: ``
    },
    {
        id: 34,
        quote: ``,
        title: ``
    },
    {
        id: 35,
        quote: ``,
        title: ``
    },
    {
        id: 36,
        quote: ``,
        title: ``
    },
    {
        id: 37,
        quote: ``,
        title: ``
    },
    {
        id: 38,
        quote: ``,
        title: ``
    },
]

export default quotes
