import books from '../../assets/projects/books2.jpg'
import commerce from '../../assets/projects/commerce.jpg'
import chatapp from '../../assets/projects/flack.jpg'
import network from '../../assets/projects/network.jpg'
import newspaper from '../../assets/projects/newspaper.jpg'
import wikipedia from '../../assets/projects/wikipedia.jpg'
import restaurant from '../../assets/projects/restaurant.jpg'

const projectsList = [
    {
        id: 1,
        name: '01. Restaurant',
        src: restaurant,
        description: `I create a representation of a restaurant page in order to put into practice my skills with the MERN stack.`,
         tecnologies: 'MERN Stack, React-Redux, React-Router, Bootstrap',
        github: 'https://github.com/LeoZorzoli/Restaurant',
        demo: 'https://maxrestaurant.herokuapp.com/',
    },
    {
        id: 2,
        name: '02. Books',
        src: books,
        description: `I have build a book review website where the users will be able to search for books,
          leave reviews, and see the reviews made by other people.`,
        tecnologies: 'HTML, CSS, Bootstrap, Javascript, Python/Flask, API, PostgreSQL',
        github: 'https://github.com/LeoZorzoli/Books',
        demo: 'https://leo-books.herokuapp.com/',
    },
    {
        id: 3,
        name: '03. Commerce',
        src: commerce,
        description: `A representation of an e-commerce for auctions where users can bid for items.`,
        tecnologies: 'HTML, CSS, Bootstrap, Javascript, Python/Django, Sqlite3',
        github: 'https://github.com/LeoZorzoli/Commerce',
        demo: 'https://leo-commerce.herokuapp.com/',
    },
    {
        id: 4,
        name: '04. ChatApp',
        src: chatapp,
        description: `A real-time chat like Slack where multiple users can communicate with each other through a channel.`,
        tecnologies: 'HTML, CSS, Bootstrap, Javascript, Python/Flask, Socket.io',
        github: 'https://github.com/LeoZorzoli/Flack',
        demo: 'https://leo-flack.herokuapp.com/',
    },
    {
        id: 5,
        name: '05. Social Network',
        src: network,
        description: `In this project I create a social network website to read other people's posts and share yours.`,
        tecnologies: 'HTML, CSS, Bootstrap, Javascript, Python/Django, Sqlite3',
        github: 'https://github.com/LeoZorzoli/Network',
        demo: 'https://leo-network.herokuapp.com/',
    },
    {
        id: 6,
        name: '06. Newspaper',
        src: newspaper,
        description: `I made the implementation of a newspaper using API's to obtain news from newspapers in the world and share them.`,
        tecnologies: 'HTML, CSS, Bootstrap, Python/Django, API',
        github: 'https://github.com/LeoZorzoli/Newspaper',
        demo: 'https://leo-newspaper.herokuapp.com/',
    },
    {
        id: 7,
        name: '07. Wikipedia',
        src: wikipedia,
        description: `An online basic encyclopedia like Wikipedia created with Markdown2.`,
        tecnologies: 'HTML, CSS, Bootstrap, Python/Django, Markdown2',
        github: 'https://github.com/LeoZorzoli/Wiki',
        demo: 'https://leo-wiki.herokuapp.com/',
    }
]

export default projectsList