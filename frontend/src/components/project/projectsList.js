import books from '../../assets/projects/books2.jpg'
import auctions from '../../assets/projects/commerce.jpg'
import chatapp from '../../assets/projects/flack.jpg'
import network from '../../assets/projects/network.jpg'
import newspaper from '../../assets/projects/newspaper.jpg'
import wikipedia from '../../assets/projects/wikipedia.jpg'
import restaurant from '../../assets/projects/restaurant.jpg'
import ecommerce from '../../assets/projects/react-redux.jpeg'

const projectsList = [
    {
        id: 1,
        name: '01. E-commerce',
        src: ecommerce,
        description: `A simple representation of an online store with some filters created with React-Redux state.`,
         tecnologies: 'React-Redux',
        github: 'https://github.com/LeoZorzoli/React-Redux-Ecommerce',
        demo: 'https://e-commerce-redux.web.app/',
    },
    {
        id: 2,
        name: '02. Restaurant',
        src: restaurant,
        description: `I create a representation of a restaurant page in order to put into practice my skills with the MERN stack.`,
         tecnologies: 'MERN Stack',
        github: 'https://github.com/LeoZorzoli/Restaurant',
        demo: 'https://maxrestaurant.herokuapp.com/',
    },
    {
        id: 3,
        name: '03. ChatApp',
        src: chatapp,
        description: `A real-time chat like Slack where multiple users can communicate with each other through a channel.`,
        tecnologies: 'Javascript, Python/Flask, Socket.io',
        github: 'https://github.com/LeoZorzoli/Flack',
        demo: 'https://leo-flack.herokuapp.com/',
    },
    {
        id: 4,
        name: '04. Books',
        src: books,
        description: `A book review website where the users can search books,
          leave reviews, and see the reviews made by other people.`,
        tecnologies: 'Python/Flask, PostgreSQL',
        github: 'https://github.com/LeoZorzoli/Books',
        demo: 'https://leo-books.herokuapp.com/',
    },
    {
        id: 5,
        name: '05. Social Network',
        src: network,
        description: `In this project I create a social network website to read other people's posts and share yours.`,
        tecnologies: 'Javascript, Python/Django',
        github: 'https://github.com/LeoZorzoli/Network',
        demo: 'https://leo-network.herokuapp.com/',
    },
    {
        id: 6,
        name: '06. Auctions',
        src: auctions,
        description: `A representation of a web application for auctions where users can bid for items.`,
        tecnologies: 'Javascript, Python/Django',
        github: 'https://github.com/LeoZorzoli/Commerce',
        demo: 'https://leo-commerce.herokuapp.com/',
    },
    {
        id: 7,
        name: '07. Newspaper',
        src: newspaper,
        description: `I made the implementation of a newspaper using API's to obtain news from newspapers in the world and share them.`,
        tecnologies: 'Python/Django, API',
        github: 'https://github.com/LeoZorzoli/Newspaper',
        demo: 'https://leo-newspaper.herokuapp.com/',
    },
    {
        id: 8,
        name: '08. Wikipedia',
        src: wikipedia,
        description: `An online basic web encyclopedia like Wikipedia created with Markdown2 entries.`,
        tecnologies: 'Python/Django, Markdown2',
        github: 'https://github.com/LeoZorzoli/Wiki',
        demo: 'https://leo-wiki.herokuapp.com/',
    }
]

export default projectsList