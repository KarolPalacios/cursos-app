const Courses = require("../models/courses.models");
const Users = require("../models/users.models");
const db = require("../utils/database");
const Categories = require("../models/categories.models");
const Videos = require("../models/videos.models");
const UserCourses = require("../models/userCourses.model");
const CourseCategories = require("../models/courseCategories.model");

const users = [
    {
        firstName: "Karol",
        lastName: "Dayana",
        password: "2314",
        email: "karol@gmail.com"
    },

    {
        firstName: "Norfi",
        lastName: "Noyra",
        password: "4356",
        email: "ofi@gmail.com"
    },

    {
        firstName: "Camila",
        lastName: "Sanchez",
        password: "6575",
        email: "cami@gmail.com"
    }
];

const courses = [
    {
        title: "Angular",
        description: "lalasfnffnrf rfjrfjksnd c dnd",
        instructor: "Brenda"
    },

    {
        title: "JS",
        description: "lalasfnffnrf rfjrfjksnd c dnd",
        instructor: "Brenda"
    },

    {
        title: "Macarrones con queso",
        description: "lalasfnffnrf rfjrfjksnd c dnd",
        instructor: "Brenda"
    },

    {
        title: "Maquillaje",
        description: "lalasfnffnrf rfjrfjksnd c dnd",
        instructor: "Brenda"
    },
];

const uc = [
    {
        userId: 1,
        courseId: 1
    },
    {
        userId: 1,
        courseId: 2
    },
    {
        userId: 2,
        courseId: 3
    },
    {
        userId: 2,
        courseId: 4
    },
    {
        userId: 3,
        courseId: 1
    },
    {
        userId: 3,
        courseId: 3
    }
];

const categories = [
    {name: "tecnologia"},
    {name: "cocina"},
    {name: "belleza"}
]

const courseC = [
    {
        courseId: 1,
        categoryId: 1
    },
    {
        courseId: 2,
        categoryId: 1
    },
    {
        courseId: 3,
        categoryId: 2
    },
    {
        courseId: 4,
        categoryId: 3
    }
]

const videos = [
    {
        title: "jdlnvnvif njisknc",
        url: "http://techslides.com/demos/sample-videos/small.mp4",
        courseId: 1
    },
    {
        title: "djcnyjcmsonf",
        url: "http://techslides.com/demos/sample-videos/small.mp4",
        courseId: 2
    },
    {
        title: "njfuefiwnh",
        url: "http://techslides.com/demos/sample-videos/small.mp4",
        courseId: 3
    },
    {
        title: "fheixocnfueiosk",
        url: "http://techslides.com/demos/sample-videos/small.mp4",
        courseId: 4
    }
];

db.sync({force: true})
    .then(() => {
        console.log("Iniciando la plantacion de informacion");

        users.forEach((user) => Users.create(user));

        setTimeout(() => {
            courses.forEach((course) => Courses.create(course));
        }, 100);

        setTimeout(() => {
            categories.forEach((category) => Categories.create(category));
        }, 200);

        setTimeout(() => {
            videos.forEach((video) => Videos.create(video));
        }, 350);

        setTimeout(() => {
            uc.forEach((uc) => UserCourses.create(uc));
        }, 450);

        setTimeout(() => {
            courseC.forEach((courseC) => CourseCategories.create(courseC));
        }, 550);
    })
    .catch((error) => console.log(error));