// Tecnologías agrupadas. `icon` es una máscara (PNG o SVG) de src/assets/tech: el color lo pone el CSS.
// Los SVG de marcas vienen de Simple Icons (CC0); aws, chatgpt, codex, java, nosql y datamesh son dibujos propios.
import angular from '../assets/tech/angular.png'
import aws from '../assets/tech/aws.svg'
import bootstrap from '../assets/tech/bootstrap.png'
import chatgpt from '../assets/tech/chatgpt.svg'
import claude from '../assets/tech/claude.svg'
import cloudflare from '../assets/tech/cloudflare.svg'
import codex from '../assets/tech/codex.svg'
import csharp from '../assets/tech/csharp.png'
import css from '../assets/tech/css.png'
import cursor from '../assets/tech/cursor.svg'
import datadog from '../assets/tech/datadog.svg'
import datamesh from '../assets/tech/datamesh.svg'
import django from '../assets/tech/django.png'
import docker from '../assets/tech/docker.svg'
import dotnet from '../assets/tech/dotnet.svg'
import express from '../assets/tech/express.svg'
import figma from '../assets/tech/figma.svg'
import flask from '../assets/tech/flask.svg'
import git from '../assets/tech/git.png'
import githubactions from '../assets/tech/githubactions.svg'
import go from '../assets/tech/go.svg'
import grafana from '../assets/tech/grafana.svg'
import html from '../assets/tech/html.png'
import java from '../assets/tech/java.svg'
import js from '../assets/tech/js.png'
import mongodb from '../assets/tech/mongodb.svg'
import mysql from '../assets/tech/mysql.png'
import node from '../assets/tech/node.png'
import nosql from '../assets/tech/nosql.svg'
import photoshop from '../assets/tech/photoshop.png'
import postgresql from '../assets/tech/postgresql.svg'
import python from '../assets/tech/python.png'
import react from '../assets/tech/react.png'
import redux from '../assets/tech/redux.svg'
import sass from '../assets/tech/sass.png'
import socketio from '../assets/tech/socketdotio.svg'
import supabase from '../assets/tech/supabase.svg'
import tailwind from '../assets/tech/tailwindcss.svg'
import typescript from '../assets/tech/typescript.png'
import vite from '../assets/tech/vite.svg'

const technologies = [
  {
    group: 'Frontend',
    items: [
      { name: 'JavaScript', icon: js },
      { name: 'TypeScript', icon: typescript },
      { name: 'React', icon: react },
      { name: 'Angular', icon: angular },
      { name: 'Redux', icon: redux },
      { name: 'Vite', icon: vite },
      { name: 'Tailwind CSS', icon: tailwind },
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
      { name: '.NET', icon: dotnet },
      { name: 'Go', icon: go },
      { name: 'Java', icon: java },
      { name: 'Node.js', icon: node },
      { name: 'Express', icon: express },
      { name: 'Python', icon: python },
      { name: 'Django', icon: django },
      { name: 'Flask', icon: flask },
      { name: 'Socket.io', icon: socketio },
    ],
  },
  {
    group: 'Datos',
    items: [
      { name: 'MySQL', icon: mysql },
      { name: 'PostgreSQL', icon: postgresql },
      { name: 'MongoDB', icon: mongodb },
      { name: 'NoSQL', icon: nosql },
      { name: 'Supabase', icon: supabase },
      { name: 'Data Mesh', icon: datamesh },
    ],
  },
  {
    group: 'Nube y observabilidad',
    items: [
      { name: 'AWS', icon: aws },
      { name: 'Cloudflare', icon: cloudflare },
      { name: 'Docker', icon: docker },
      { name: 'GitHub Actions', icon: githubactions },
      { name: 'Grafana', icon: grafana },
      { name: 'Datadog', icon: datadog },
    ],
  },
  {
    group: 'IA',
    items: [
      { name: 'Claude Code', icon: claude },
      { name: 'Codex', icon: codex },
      { name: 'ChatGPT', icon: chatgpt },
      { name: 'Cursor', icon: cursor },
    ],
  },
  {
    group: 'Herramientas',
    items: [
      { name: 'Git', icon: git },
      { name: 'Figma', icon: figma },
      { name: 'Photoshop', icon: photoshop },
    ],
  },
]

export default technologies
