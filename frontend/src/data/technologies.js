// Tecnologías agrupadas. `icon` es una máscara PNG de src/assets/tech: el color lo pone el CSS.
import angular from '../assets/tech/angular.png'
import bootstrap from '../assets/tech/bootstrap.png'
import csharp from '../assets/tech/csharp.png'
import css from '../assets/tech/css.png'
import django from '../assets/tech/django.png'
import git from '../assets/tech/git.png'
import html from '../assets/tech/html.png'
import js from '../assets/tech/js.png'
import mysql from '../assets/tech/mysql.png'
import node from '../assets/tech/node.png'
import photoshop from '../assets/tech/photoshop.png'
import python from '../assets/tech/python.png'
import react from '../assets/tech/react.png'
import sass from '../assets/tech/sass.png'
import typescript from '../assets/tech/typescript.png'

const technologies = [
  {
    group: 'Frontend',
    items: [
      { name: 'JavaScript', icon: js },
      { name: 'TypeScript', icon: typescript },
      { name: 'React', icon: react },
      { name: 'Angular', icon: angular },
      { name: 'HTML', icon: html },
      { name: 'CSS', icon: css },
      { name: 'Sass', icon: sass },
      { name: 'Bootstrap', icon: bootstrap },
    ],
  },
  {
    group: 'Backend',
    items: [
      { name: 'C#', icon: csharp },
      { name: 'Node.js', icon: node },
      { name: 'Python', icon: python },
      { name: 'Django', icon: django },
    ],
  },
  {
    group: 'Datos',
    items: [
      { name: 'MySQL', icon: mysql },
    ],
  },
  {
    group: 'Herramientas',
    items: [
      { name: 'Git', icon: git },
      { name: 'Photoshop', icon: photoshop },
    ],
  },
]

export default technologies
