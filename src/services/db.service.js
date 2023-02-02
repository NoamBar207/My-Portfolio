'use strict'

import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'

export const dbService = {
    query,
    get,
    remove,
    post,
    put,
    insert,
}

const ID_FIELD = '_id'

async function query(collectionName) {
    // var collection = storageService.load(collectionName)
    // if (!collection) {}
    collection = MyProjects
    storageService.save(collectionName, collection)
    return Promise.resolve(collection)
}

async function get(collectionName, id) {
    var collection = await query(collectionName)
    return collection.find(curr => curr[ID_FIELD] === id)
}

async function remove(collectionName, id) {
    var collection = await query(collectionName)
    var idx = collection.findIndex(curr => curr[ID_FIELD] === id)
    if (idx === -1) throw new Error('something went wrong')
    collection.splice(idx, 1)

    storageService.save(collectionName, collection)
    return Promise.resolve()
}

async function post(collectionName, item) {
    var collection = await query(collectionName)

    item[ID_FIELD] = utilService.makeId()
    collection.push(item)

    storageService.save(collectionName, collection)
    return Promise.resolve(item)
}

async function put(collectionName, item) {
    var collection = await query(collectionName)

    let idx = collection.findIndex(curr => curr[ID_FIELD] === item[ID_FIELD])
    if (idx === -1) throw new Error('something went wrong')
    collection[idx] = item

    storageService.save(collectionName, collection)
    return Promise.resolve(item)
}

async function insert(collectionName, items) {
    var collection = await query(collectionName)
    items.forEach(curr => (curr[ID_FIELD] = utilService.makeId()))
    collection.push(...items)

    storageService.save(collectionName, collection)
    return Promise.resolve()
}



const MyProjects = [
    {
        _id: 'mello',
        title: 'Mello',
        mainInfo: 'E2E, pixel perfect application for project management inspired by Trello. (React + Node.js)',
        bg: "https://res.cloudinary.com/noambar/image/upload/v1673948000/Portfolio/Projects/fotor_2023-1-17_11_32_59_oadhqw.png",
        // bg: "https://res.cloudinary.com/noambar/image/upload/v1674329051/Portfolio/Projects/Mellofy/fotor_2023-1-17_11_32_59_xhdrnw.png",
        features: [
            {
                title: 'Create of Your Choice',
                info: 'Create boards, and within each board you can create lists and tasks. You can move lists and tasks across the board using D&D.',
                img: 'fa-solid fa-square-plus'
            },
            {
                title: 'Customize as You Like',
                info: 'Edit task to the deepest level: cover, labels, attachments, due dates, description, members, checklists. filter members and labels.',
                img: 'fa-solid fa-palette'
            },
            {
                title: 'Side Menu & Activity Log',
                info: 'Activity log, background cover for the board. (on side-menu).',
                img: 'fa-solid fa-circle-arrow-left'
            },
            {
                title: 'Authentication & Security',
                info: 'Login authentication, including encrypting user information using bcrypt.',
                img: 'fa-solid fa-lock'
            }
        ],
        technologies: "The technology stack we used is MERN - MongoDB, Express, React, and Node.js. We utilized websockets to allow for real-time updates for all users, and API calls to the backend were made using REST API methods. Furthermore, we incorporated third-party libraries, such as React Beautiful D&D, date-picker, and more. The app's layout was designed using Sass, including functions, mixins, and variables.",
        showcase: [
            {
                showcaseTitle: 'Homepage',
                info: 'The landing page provides the user with information about Mello and allows them to sign up/log in or start as a guest by pressing the "Start Doing" button.',
                img: 'https://res.cloudinary.com/noambar/image/upload/v1673784809/Portfolio/Projects/Trello/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6465626d626a7662682f696d6167652f75706c6f61642f76313636313738303031342f686f6d65706167655f7164647a67772e706e67_zpyd8f.png',
            },
            {
                showcaseTitle: 'Workspace',
                info: "The Workspace is where the user can access all their boards, including any boards they have starred for quick access. The user can create a new board by choosing a title and selecting a background color or image, or they can start with one of the suggested templates provided by the app.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1673784964/Portfolio/Projects/Trello/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6465626d626a7662682f696d6167652f75706c6f61642f76313636313738303236392f626f617264735f6667656b64692e706e67_t2yv3l.png',
            },
            {
                showcaseTitle: 'The Board',
                info: "In the Kanban-style board, users can create boards, lists, and tasks. They have the ability to move tasks and lists across the board using drag-and-drop functionality. Tasks can be edited to the deepest level, including changing the cover (color/image), labels, attachments, due dates, description, members, and checklists. Members and labels can be filtered, tasks and lists can be copied and removed. The board has all the functionality that Trello has, and users can add members to the board or to a specific task.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1673785020/Portfolio/Projects/Trello/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6465626d626a7662682f696d6167652f75706c6f61642f76313636313738303331332f626f6172645f776f373764782e706e67_zginuy.png',
            },
            {
                showcaseTitle: 'Task Details',
                info: "When clicking a task, task details is opened and the user can edit the task, label it, add a description, checklists and more. Every button on the right menu opens a dynamic modal, enabling a different action. All changes are being seen live, both in this page and the board's.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1673785110/Portfolio/Projects/Trello/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6465626d626a7662682f696d6167652f75706c6f61642f76313636313738303337332f7461736b64657461696c73315f6c727633787a2e706e67_h1ngsc.png',
            },
            {
                showcaseTitle: 'Side Menu',
                info: "The side menu on the right (opened by clicking 'Show menu' button) displays the activity log of the board, documenting the time and action made by each member of the board. Moreover, users can change the background of the board by choosing from our selection of background images or upload directly from their computer.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1673785201/Portfolio/Projects/Trello/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6465626d626a7662682f696d6167652f75706c6f61642f76313636313738303436332f736964656d656e755f696f6b69636c2e706e67_uwcgrd.png',
            },
            {
                showcaseTitle: 'Signup',
                info: "We have created an e2e authentication flow, in which we are encrypting user's information.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1673785275/Portfolio/Projects/Trello/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6465626d626a7662682f696d6167652f75706c6f61642f76313636313738303531322f7369676e75705f73377a647a702e706e67_wnhkys.png',
            },
            {
                showcaseTitle: 'And on Mobile!',
                info: "A taste of the mobile experience. we have used mixins, rem and em units, aspect ratio and more, to make our website responsive with minimun effort.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1673785445/Portfolio/Projects/Trello/MelloMobile_eqp5or.png',
            },
        ],
        url: 'https://mello-r9cy.onrender.com/',
        repoLink: 'https://github.com/NoamBar207/Mello-Proj',
    },
    {
        _id: 'mellofy',
        title: 'Mellofy',
        mainInfo: 'E2E, pixel perfect, music application inspired by Spotify - but more friendly. (React + Node.js)',
        bg: "https://res.cloudinary.com/noambar/image/upload/v1673889648/Portfolio/Projects/fotor_2023-1-16_19_18_55_qoi3f3.png",
        features: [
            {
                title: 'Create and Customizen',
                info: 'You can create playlist and change its picture. Songs can be added, removed, and rearranged in the desired order using D&D.',
                img: 'fa-solid fa-palette'
            },
            {
                title: 'Add Listeners To Your Playlist',
                info: 'As you create a playlist, you can add listeners to it. Any changes made to the playlist will be updated in real-time for all listeners.',
                img: 'fa-solid fa-square-plus'
            },
            {
                title: 'Mellofy Forum/Chatapp',
                info: 'The forum/chat app allows users to ask and answer questions with real-time.',
                img: 'fa-solid fa-circle-arrow-left'
            },
            {
                title: 'Authentication & Security',
                info: 'The app features login authentication with user information encrypted using bcrypt.',
                img: 'fa-solid fa-lock'
            }
        ],
        technologies: `The technology stack used for this project is MERN, which stands for - MongoDB, Express, React, and Node.js. Real-time updates for all users were enabled using web sockets. API calls to the backend were made using REST methods. Third-party libraries, such as React Beautiful D&D and React-YouTube, were also integrated into the project. The app's layout was created using Sass, with features such as functions, mixins, and variables. In an effort to differentiate from a simple Spotify clone, a custom form/chat feature was also added to the app.`,
        showcase: [
            {
                showcaseTitle: 'Home Page',
                info: 'The home page is the main interface of Mellofy, where users can listen to playlists created by Mellofy, sign up or log in, view the forum, and search for desired songs.',
                img: 'https://res.cloudinary.com/noambar/image/upload/v1674052809/Portfolio/Projects/Mellofy/MellofyHomePage_ffxv8c.png',
            },
            {
                showcaseTitle: 'Playlist Details',
                info: "The playlist details page allows the user to rearrange songs using drag-and-drop, change the playlist's name and image, manage listeners, like or unlike songs, and view the playlist's duration and creator.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1674052799/Portfolio/Projects/Mellofy/MellofyStationDetails_qc8rml.png',
            },
            {
                showcaseTitle: 'Forum/Chatapp',
                info: "As i tried to make something other then only spotify clone, I have implemented a custom Form/Chat in the app. both registered users and guests can participate in discussions by asking questions, responding to other questions, and liking others' answers, with real-time updates.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1674052804/Portfolio/Projects/Mellofy/MellofyForum_ntys4m.png',
            },
            {
                showcaseTitle: 'Library Page',
                info: "The library page offers a more visual display of all the user's playlists, which are also accessible from the side menu. On this page, playlists are presented in a clear and organized manner.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1674052801/Portfolio/Projects/Mellofy/MellofyLibraryPage_tfqx1t.png',
            },
            {
                showcaseTitle: 'Search Engine',
                info: "The search engine has two different versions. The first version allows the user to search songs within Mellofy's database. If the desired song is not found, the second version allows the user to search for the song on the Youtube database and automatically add it to Mellofy's database.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1674052807/Portfolio/Projects/Mellofy/MellofySearchEngine_xmrm5a.png',
            },
            {
                showcaseTitle: 'Signup/Login Page',
                info: "I have created an e2e authentication flow, in which I am encrypting user's information.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1674052798/Portfolio/Projects/Mellofy/MellofySignUpPage_zplkxd.png',
            },
            {
                showcaseTitle: 'And on Mobile!',
                info: "A taste of the mobile experience. I have used mixins, rem and em units, aspect ratio and more, to make Mellofy responsive with minimun effort.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1674053716/Portfolio/Projects/Mellofy/All2_b589hr.png',
            },
        ],
        url: 'https://mellofy-bynoambar.onrender.com/',
        repoLink: 'https://github.com/NoamBar207/Spotify-Clone'
        // moreAbout:[
        //     // "This project Built by me. Its a sprint build (only took 3 days).",
        //     "The projects is based on pure JavaScript, CSS and HTML 5. The meme editor is based on Canvas technolgy, which brought to us in HTML 5.",
        //     "Before starting the project I had one lesson about the Canvas tag, and needed to research more about it in those 3 days.",
        //     'In this project I also learnd alot about event listeners, as I needed them in the Canvas itself.',
        //     'I have implanted my own Drag & Drop in the app, using calculation of width and height of each element in the Canvas.',
        // ]
    },
    {
        _id: 'memegenerator',
        title: 'Meme Generator',
        mainInfo: 'Meme Generator - Create your own custom memes and share them whom ever you like. Built using Pure JS, and Canvas.',
        bg: "https://res.cloudinary.com/noambar/image/upload/v1674149177/Portfolio/Projects/fotor_2023-1-19_19_25_50_pdpwuq.png",
        features: [
            {
                title: 'Create & Customizen',
                info: 'Create meme, add text, stickers, change font size, change text color, and move lines around using drag & drop.',
                img: 'fa-solid fa-palette'
            },
            {
                title: 'Share Your Own Memes',
                info: 'While creating a meme, you have the option to download it for free to your device and share it with whoever you like.',
                img: 'fa-solid fa-share'
            },
            {
                title: 'Upload Your Own Backgorund',
                info: "If you can't find the desired background image for your meme, you can easily upload one from your device.",
                img: 'fa-solid fa-upload'
            },
            {
                title: 'Filter By Your Own Cohice',
                info: 'You have the option to filter the available meme backgrounds using your preferred keywords or by using free-text search.',
                img: 'fa-solid fa-filter'
            },
        ],
        technologies: "I created a custom meme generator using JavaScript, HTML5, and CSS. The app allows you to create and share your own memes using the HTML5 canvas element for customization. The layout is designed to be fully responsive for all devices",
        showcase: [
            {
                showcaseTitle: 'Gallery Page',
                info: 'The home page serves as the front of the meme generator where users can choose from a variety of meme templates, filtered by keyword or free-text search.',
                img: 'https://res.cloudinary.com/noambar/image/upload/v1674150058/Portfolio/Projects/MemeGenerator/Homepage_btewbr.png',
            },
            {
                showcaseTitle: 'Canvas Page',
                info: "Once you have selected a meme background, you will be taken to the canvas page. Here you can add text, stickers, adjust font size, change text color, and rearrange elements using drag-and-drop functionality. You also have the option to change the background image using the upload button.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1674150052/Portfolio/Projects/MemeGenerator/MemeCanvas_hfzjwb.png',
            },
            {
                showcaseTitle: 'About Page',
                info: "On this page, users are provided with clear instructions on how to use the app, as well as an explanation of the purpose and motivation behind the project.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1674150062/Portfolio/Projects/MemeGenerator/AboutPage_utrxt7.png',
            },
            // {
            //     showcaseTitle: 'Library Page',
            //     info: "The library page is where the user is able to see all his playlists, those are in the side menu as well, but in this page the playlists are more visual.",
            //     img: 'https://res.cloudinary.com/noambar/image/upload/v1674052801/Portfolio/Projects/Mellofy/MellofyLibraryPage_tfqx1t.png',
            // },
        ],
        moreAbout: [
            "I built this project in a short time frame of three days.",
            "The technology stack used was pure JavaScript, CSS, and HTML5. The meme editor was created using the HTML5 canvas technology.",
            "efore starting the project, I had a basic understanding of the canvas tag and needed to do further research during the three-day build.",
            'In this project, I also learned a lot about event listeners, which were necessary for the canvas functionality.',
            'I implemented my own drag-and-drop feature in the app using calculations of the width and height of each canvas element.',
        ],
        url: 'https://memegenerator-noambar.onrender.com/',
        repoLink: 'https://github.com/NoamBar207/MemeGenartor'
    },
    {
        _id: 'minesweeper',
        title: 'Mine Sweeper',
        mainInfo: 'Mine Sweeper - The same game but with some featers as - hints, lives and safe clicks - built using JS HTML and CSS.',
        bg: "https://res.cloudinary.com/noambar/image/upload/v1674565363/Portfolio/Projects/fotor_2023-1-24_15_2_3_xeqxeq.png",
        features: [
            {
                title: 'Diffiuclty Select By You',
                info: 'Users can easily switch between different levels of difficulty by pressing the buttons below.',
                img: 'fa-solid fa-hand-pointer'
            },
            {
                title: 'Lives for Game',
                info: 'In each mode you have three lives - you can hit up to 3 graneds.',
                img: 'fa-solid fa-heart'
            },
            {
                title: 'Safe Button/Click',
                info: 'When you click, the game reveals a safe cell, which is not a mine, for a short period of time.',
                img: 'fa-solid fa-helmet-safety'
            },
            {
                title: 'Hint Button/Click',
                info: 'After clicking, you can choose a cell to be revealed, along with its neighbors, for a short period of time.',
                img: 'fa-solid fa-lightbulb'
            },
        ],
        technologies: "The technology stack I used for this project includes DHTML, JavaScript, CSS, and HTML5. It was a sprint build and I had only 2 days to complete it. This project was mainly focused on gaining more experience in JavaScript, HTML, and CSS",
        showcase: [
            {
                showcaseTitle: 'Gallery Page',
                info: 'The home page is the front of My meme generator. Here the user can pick the meme template, and its has filter ability via keywords or search.',
                img: 'https://res.cloudinary.com/noambar/image/upload/v1674150058/Portfolio/Projects/MemeGenerator/Homepage_btewbr.png',
            },
            {
                showcaseTitle: 'Canvas Page',
                info: "As you selected your meme background you will get to the canvas page. Here you can add text lines, stickers, change font size, change text color, and move lines around using drag & drop. Furthermore after choosing your template, you can change its background using the upload button..",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1674150052/Portfolio/Projects/MemeGenerator/MemeCanvas_hfzjwb.png',
            },
            {
                showcaseTitle: 'About Page',
                info: "At this page the user is given instructions on how to use the app. furthermore, I explained there the reason behind this project.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1674150062/Portfolio/Projects/MemeGenerator/AboutPage_utrxt7.png',
            },
            {
                showcaseTitle: 'Library Page',
                info: "The library page is where the user is able to see all his playlists, those are in the side menu as well, but in this page the playlists are more visual.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1674052801/Portfolio/Projects/Mellofy/MellofyLibraryPage_tfqx1t.png',
            },
        ],
        url: 'https://memegenerator-noambar.onrender.com/'
    },
    {
        _id: 'portfolio',
        title: 'This Portfolio',
        mainInfo: 'My Portfolio - This project was built using Vue. It was my first experience with Vue.',
        bg: "https://res.cloudinary.com/noambar/image/upload/v1675073347/Portfolio/Projects/PortfolioFullPic_fvdg8i.png",
        features: [
            {
                title: 'My Projects',
                info: 'You can view my latest projects such as Mellofy (a Spotify clone) and Mello (a Trello clone).',
                img: 'fa-solid fa-briefcase'
            },
            {
                title: 'My Tech Stack',
                info: 'HTML, Css, Scss, JavaScript, React, Node.js, MongoDB, Vue, Angular .',
                img: 'fa-brands fa-stack-overflow'
            },
            {
                title: 'About Me',
                info: 'Learn more about me, including my interests and background, on the "About Me" page.',
                img: 'fa-solid fa-address-card'
            },
            {
                title: 'Contact Me',
                info: 'You can easily contact me via email using the contact form on the website. My contact information is also available at the bottom of the page.',
                img: 'fa-solid fa-comments'
            },
        ],
        technologies: "The technology stack I used for this project includes Vue 3 as the framework, Vite as the build tool, JavaScript as the programming language, and SCSS for styling. It took me about 2 weeks to complete. This was my first experience with Vue as a developer and was mainly focused on gaining experience with the framework.",
        showcase: [
            {
                showcaseTitle: 'Home Page',
                info: 'The home page serves as the front of my portfolio. Its mainly a summery of my projects and technologies I use. Also you can contact me, as for any other page, via the contact component.',
                img: 'https://res.cloudinary.com/noambar/image/upload/v1675351019/Portfolio/Projects/Portfolio%20Imgs/HomePage_k5itbf.png',
            },
            {
                showcaseTitle: 'About Project Page',
                info: "On this page, you can read about and visit each of my projects. You can learn about the technology stacks I used and see the technologies in action. I've also included a showcase carousel for each project, and some projects have additional information available.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1675351020/Portfolio/Projects/Portfolio%20Imgs/PojectPage_cuzp8j.png',
            },
            {
                showcaseTitle: 'About Me Page',
                info: "On this page, you can learn more about me, including my areas of expertise, hobbies, military service, and professional experience.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1675072794/Portfolio/Projects/Portfolio%20Imgs/AboutMe_gzundw.png',
            },
            {
                showcaseTitle: 'And On Mobile!',
                info: "A taste of the mobile experience. I have used mixins, rem and em units, aspect ratio and more, to make my website responsive with minimun effort.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1675350439/Portfolio/Projects/Portfolio%20Imgs/PortFolioMobilefull_huafv2.png',
            },
        ],
        moreAbout: [
            "I built this portfolio and it was my first experience with Vue. It took me about 2 weeks, with most of the time spent on design and styling.",
            "The project is based on Vue and SCSS. I used Vue 3 with Vite as the build tool.",
            "Before starting, I had no prior experience with Vue, but I learned it through research and self-study.",
            'During this project, I gained a lot of knowledge about event listeners, communication between components, Vue directives, and the basics of Vue.',
            'The main goal of this project was to learn more about the Vue framework and create a more visually appealing CV for myself.',
        ],
        repoLink: 'https://github.com/NoamBar207/My-Portfolio'
    },
    {
        _id: 'misterbitcoin',
        title: 'Mister Bitcoin',
        mainInfo: 'Mister Bitcoin - This project was built using Angular and TypeScript. It was my first experience with both technologies. It is a CRUD (Create, Read, Update, Delete) application.',
        bg: "https://res.cloudinary.com/noambar/image/upload/v1675160598/Portfolio/Projects/MisterBitcoinAngularFullPic_vhsjw5.png",
        features: [
            {
                title: 'Create',
                info: 'You can create as many contacts as you desire and they will be automatically saved, just click on the add button (plus icon) at the buttom of the page.',
                img: 'fa-solid fa-square-plus'
            },
            {
                title: 'Read',
                info: 'By hovering over a contact, you can view their information and transaction history by clicking the info button (plus icon).',
                img: 'fa-brands fa-readme'
            },
            {
                title: 'Update',
                info: 'By hovering over a contact, you can click the edit button (pen icon) and make changes to their information using an edit modal.',
                img: 'fa-solid fa-pen'
            },
            {
                title: 'Remove',
                info: 'By hovering over a contact, you can delete it from your contact list by clicking the delete button (trash can icon).',
                img: 'fa-solid fa-square-minus'
            },
        ],
        technologies: "The technology stack I used for this project is Angular as the framework, TypeScript as the programming language, and Scss for styling. It took me less than a week to complete. This was my first experience with Angular and TypeScript and I mainly built this project to gain experience with these technologies.",
        showcase: [
            {
                showcaseTitle: 'HomePage',
                info: 'The Homepage serves as the front of the app. To use the app, you need to enter your name as a login. From the Homepage, you can access the history of Bitcoin throughout the years and view your complete transaction history.',
                img: 'https://res.cloudinary.com/noambar/image/upload/v1675160690/Portfolio/Projects/MisterBitcoin/HomePage_oc2dey.png',
            },
            {
                showcaseTitle: 'Contact List Page',
                info: "On the Contact List page, you can view your contact list. To add a contact, simply click the plus button at the bottom of the page.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1675160696/Portfolio/Projects/MisterBitcoin/ContactList_fm9ijl.png',
            },
            {
                showcaseTitle: 'Contact Details Page',
                info: "On the Contact Details Page, you can view the transaction history between you and a specific contact, as well as their information.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1675160696/Portfolio/Projects/MisterBitcoin/ContactDetails_sqr8vw.png',
            },
            {
                showcaseTitle: 'Edit Contact Modal',
                info: "You can edit a contact by hovering over it and clicking the pen button. This will open an edit modal where you can update the contact information. The changes will be reflected in real time and will be automatically saved.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1675160685/Portfolio/Projects/MisterBitcoin/EditContactModal_almfs5.png',
            },
            {
                showcaseTitle: 'And On Mobile!',
                info: "A taste of the mobile experience. I have used mixins, rem and em units, aspect ratio and more, to make my website responsive with minimun effort.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1675160835/Portfolio/Projects/MisterBitcoin/fotor_2023-1-31_12_26_56_qvgyxk.png',
            },
        ],
        moreAbout: [
            "This project was built by me. It was my first experience with Angular and TypeScript and took less than a week.",
            "The projects is based on Angular as framwork, TypeScript as programming language and Scss for styling.",
            "Before starting the project I havent used Angular nor TypeScript.  I researched and learned it by myself.",
            "I learned about components, services, modules, and how to use them in Angular.",
            "Additionally, I learned about the benefits of using TypeScript over plain JavaScript, such as stronger typing and improved code quality."
        ],
        url: 'https://noambar207.github.io/MisterBitcoin-Angular/#/',
        repoLink: 'https://github.com/NoamBar207/MisterBitcoin-Angular'
    },
]