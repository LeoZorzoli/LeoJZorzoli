import firebase from '../../assets/blogs/firebase.png'
import markdown from '../../assets/blogs/markdown.png'

const projectsList = [
    {
        id: 1,
        name: 'React App to Firebase',
        src: 'https://medium.com/@zorzolileonel/react-app-to-firebase-3ce910f4aef1',
        img: firebase,
        description: `How to upload our static react application to a hosting like google's "Firebase".`,
        read: '3 min',
        date: '17/11/20'
    },
    {
        id: 2,
        name: 'Markdown2 + Django',
        src: 'https://zorzolileonel.medium.com/markdown2-django-dbd59d83e172',
        img: markdown,
        description: `A simple tutorial on how to use markdown2 with django for project one of the CS50’s Web Programming with Python and JavaScript course.`,
        read: '3 min',
        date: '18/11/20'
    },
]

export default projectsList