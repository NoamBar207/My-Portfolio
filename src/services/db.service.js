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
    var collection = storageService.load(collectionName)
    if (!collection) {
        collection = MyProjects
        storageService.save(collectionName, collection)
    }
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
                info: 'Create boards, create and move lists and tasks across the board using D&D.',
                img: 'fa-solid fa-square-plus'
            },
            {
                title: 'Customize as You Like',
                info: 'Edit task to the deepest level: cover(color/image), labels, attachments, due dates, description, members, checklists. filter members and labels. copy and remove tasks and lists.',
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
        technologies: "The technnology stack we used is MERN - MongoDB, Express, React, Node.js. We used webSockets to enable real-time updates for all users. API calls to the backend are done with REST API method. In addition, we have incorporated third-side libraries, such as React beautiful D&D, Date-picker and more. the App's layout was made with Sass (functions, mixins, variables).",
        showcase: [
            {
                showcaseTitle: 'Homepage',
                info: 'The landing page, in which the user can get some information about Mello, sign up/ login or press the call to action button "Start doing" to start as a guest.',
                img: 'https://res.cloudinary.com/noambar/image/upload/v1673784809/Portfolio/Projects/Trello/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6465626d626a7662682f696d6167652f75706c6f61642f76313636313738303031342f686f6d65706167655f7164647a67772e706e67_zpyd8f.png',
            },
            {
                showcaseTitle: 'Workspace',
                info: "User's Workspace, containing all his boards, including his starred boards. In addition, the user can create a new board (by choosing a title and a background color/ image) or start with one of our suggested templates.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1673784964/Portfolio/Projects/Trello/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6465626d626a7662682f696d6167652f75706c6f61642f76313636313738303236392f626f617264735f6667656b64692e706e67_t2yv3l.png',
            },
            {
                showcaseTitle: 'The Board',
                info: "Our Kanban-style board, containing all of the functionality Trello has. Add lists, tasks, move them across the board with D&D.Editing tasks to the deepest level. Add members to the board and to a specific task and much more!",
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
        url: 'https://mello-r9cy.onrender.com/'
    },
    {
        _id: 'mellofy',
        title: 'Mellofy',
        mainInfo: 'E2E, pixel perfect, music application inspired by Spotify - but more friendly. (React + Node.js)',
        bg: "https://res.cloudinary.com/noambar/image/upload/v1673889648/Portfolio/Projects/fotor_2023-1-16_19_18_55_qoi3f3.png",
        features: [
            {
                title: 'Create & Customizen',
                info: 'Create playlists, change its picture. Add remove and move songs to which order you like using D&D.',
                img: 'fa-solid fa-palette'
            },
            {
                title: 'Add Listeners To Your Playlist',
                info: 'As you create a playlist, you can add a listeners to it. Each change you make will be updated on real time to your listenrs.',
                img: 'fa-solid fa-square-plus'
            },
            {
                title: 'Mellofy Forum/Chatapp',
                info: 'Form/Chatapp where you can ask questions and replay to others questions, with a real time response.',
                img: 'fa-solid fa-circle-arrow-left'
            },
            {
                title: 'Authentication & Security',
                info: 'Login authentication, including encrypting user information using bcrypt.',
                img: 'fa-solid fa-lock'
            }
        ],
        technologies: "The technnology stack I used is MERN - MongoDB, Express, React, Node.js. I used webSockets to enable real-time updates for all users. API calls to the backend are done with REST API method. In addition, I have incorporated third-side libraries, such as React beautiful D&D, react-youtube and more. the App's layout was made with Sass (functions, mixins, variables). As i tried to make something other then only spotify clone , I have implemented a custom Form/Chat in the app.",
        showcase: [
            {
                showcaseTitle: 'Home Page',
                info: 'The home page is the front of Mellofy. Here the user can listen to playlists which made by Mellofy, sign up or login, watch our forum and search for song he desire.',
                img: 'https://res.cloudinary.com/noambar/image/upload/v1674052809/Portfolio/Projects/Mellofy/MellofyHomePage_ffxv8c.png',
            },
            {
                showcaseTitle: 'Playlist Details',
                info: "The playlist details page is where the user is able to edit his songs order using D&D, change the name of the playlist, change the picture of the playlist, add/remove listeners from the playlist, like and unlike songs. Also You can see the duration of the playlist and its creator.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1674052799/Portfolio/Projects/Mellofy/MellofyStationDetails_qc8rml.png',
            },
            {
                showcaseTitle: 'Forum/Chatapp',
                info: "As i tried to make something other then only spotify clone, I have implemented a custom Form/Chat in the app, users can ask questions, replay to others questions, and like others answers with a real time response. guests can replay to others questions.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1674052804/Portfolio/Projects/Mellofy/MellofyForum_ntys4m.png',
            },
            {
                showcaseTitle: 'Library Page',
                info: "The library page is where the user is able to see all his playlists, those are in the side menu as well, but in this page the playlists are more visual.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1674052801/Portfolio/Projects/Mellofy/MellofyLibraryPage_tfqx1t.png',
            },
            {
                showcaseTitle: 'Search Engine',
                info: "My search engine has two diffrent versions. First the user will search songs at the Mellofy database. Then if the user havent found the song he lookes for, he can search the song at Youtube database and it will be atumatcly add to Mellofy database.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1674052807/Portfolio/Projects/Mellofy/MellofySearchEngine_xmrm5a.png',
            },
            {
                showcaseTitle: 'Signup',
                info: "I have created an e2e authentication flow, in which I am encrypting user's information.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1674052798/Portfolio/Projects/Mellofy/MellofySignUpPage_zplkxd.png',
            },
            {
                showcaseTitle: 'And on Mobile!',
                info: "A taste of the mobile experience. I have used mixins, rem and em units, aspect ratio and more, to make Mellofy responsive with minimun effort.",
                img: 'https://res.cloudinary.com/noambar/image/upload/v1674053716/Portfolio/Projects/Mellofy/All2_b589hr.png',
            },
        ],
        url: 'https://mellofy-bynoambar.onrender.com/'
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
                info: 'As you create a meme, you can add download freely to your device and shere it whom ever you like.',
                img: 'fa-solid fa-share'
            },
            {
                title: 'Upload Your Own Backgorund',
                info: 'If you havent found the backgorund meme you want, you can upload it via your device.',
                img: 'fa-solid fa-upload'
            },
        ],
        technologies: "The technnology stack I used is DHTML - JavaScript, CSS and HTML5. I used Canvas element to enable the customization of the memes. The app's layout was made with Css, and its fully compatible throgh all devices.",
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
        moreAbout: [
            "This project built by me. Its a sprint build (only took 3 days).",
            "The projects is based on pure JavaScript, CSS and HTML 5. The meme editor is based on Canvas technolgy, which brought to us in HTML 5.",
            "Before starting the project I had one lesson about the Canvas tag, and needed to research more about it in those 3 days.",
            'In this project I also learnd alot about event listeners, as I needed them in the Canvas itself.',
            'I have implanted my own Drag & Drop in the app, using calculation of width and height of each element in the Canvas.',
        ],
        url: 'https://memegenerator-noambar.onrender.com/'
    },
    {
        _id: 'minesweeper',
        title: 'Mine Sweeper',
        mainInfo: 'Mine Sweeper - The same game but with some featers as - hints, lives and safe clicks - built using JS HTML and CSS.',
        bg: "https://res.cloudinary.com/noambar/image/upload/v1674565363/Portfolio/Projects/fotor_2023-1-24_15_2_3_xeqxeq.png",
        features: [
            {
                title: 'Lives for Game',
                info: 'In each mode you have three lives - you can hit up to 3 graneds.',
                img: 'fa-solid fa-palette'
            },
            {
                title: 'Safe Button/Click',
                info: 'As you click this for short time period the game revel a safe cell - cell which isnt granede.',
                img: 'fa-solid fa-share'
            },
            {
                title: 'Hint Button/Click',
                info: 'After clicking you can choose a cell which be reveled for short time period as its neighbors.',
                img: 'fa-solid fa-upload'
            },
        ],
        technologies: "The technnology stack I used is DHTML - JavaScript, CSS and HTML5. This project is a sprint build - had 2 days to build it. It is the first sprint I had as a developer, and mainly built for gaining more experience in JS, HTML and CSS.",
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
    }
]