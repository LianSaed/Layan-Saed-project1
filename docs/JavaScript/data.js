const data = [
    {
        description: "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript).",
        title: "HTML",
        author: "Sarah Smith",
        intimation: "Web Development Langauges",
        rating: 4,
        subTopics: ["HTML syntax and structure","HTML elements and attributes","HTML forms and input elements",
        "HTML tables and lists","HTML multimedia elements(audio, video, images)","HTML accessibility and semantic markup"],
        favorite: 0,
        ImagePath: "../Logos/html.png"
    },
    {
        description: "",
        title: "CSS",
        author: "David Lee",
        intimation: "Web Development Langauges",
        rating: 3.8,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/css.webp"
    },
    {
        description: "",
        title: "JavaScript",
        author: "Emily Chen",
        intimation: "Web Development Langauges",
        rating: 4,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/javascript.jpg"
    },
    {
        description: "",
        title: "jQuery",
        author: "John Johnson",
        intimation: "Frontend FrameWorks and Libraries",
        rating: 3.9,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/jquery.png"
    },
    {
        description: "",
        title: "Angular",
        author: "Jessica Davis",
        intimation: "Frontend FrameWorks and Libraries",
        rating: 3.8,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/angular.png"
    },
    {
        description: "",
        title: "React",
        author: "Daniel Brown",
        intimation: "Frontend FrameWorks and Libraries",
        rating: 4,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/react.webp"
    },
    {
        description: "",
        title: "Vue.js",
        author: "Ava Jones",
        intimation: "Frontend FrameWorks and Libraries",
        rating: 3.8,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/vuejs.jpeg"
    },
    {
        description: "",
        title: "Node.js",
        author: "Micheal Kim",
        intimation: "Backend FrameWorks and Libraries",
        rating: 4,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/nodejs.webp"
    },
    {
        description: "",
        title: "Express.js",
        author: "Sophia Rodriguez",
        intimation: "Backend FrameWorks and Libraries",
        rating: 4,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/expressjs.webp"
    },
    {
        description: "",
        title: "Ruby on Rails",
        author: "William Lee",
        intimation: "Backend FrameWorks and Libraries",
        rating: 3,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/ruby.jpeg"
    },
    {
        description: "",
        title: "Django",
        author: "Olivia Martinez",
        intimation: "Backend FrameWorks and Libraries",
        rating: 4,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/django.jpeg"
    },
    {
        description: "",
        title: "Flask",
        author: "Ethan Thompson",
        intimation: "Backend FrameWorks and Libraries",
        rating: 3,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/flask.webp"
    },
    {
        description: "",
        title: "SQL",
        author: "Madison Davis",
        intimation: "Databases and APIs",
        rating: 4.2,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/sql.png"
    },
    {
        description: "",
        title: "NoSQL",
        author: "Isabella Wilson",
        intimation: "Databases and APIs",
        rating: 4.3,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/nosql.png"
    },
    {
        description: "",
        title: "Rest APIs",
        author: "Jacob Garcia",
        intimation: "Databases and APIs",
        rating: 3,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/restapi.jpeg"
    },
    {
        description: "",
        title: "GraphQL",
        author: "Mia Brown",
        intimation: "Databases and APIs",
        rating: 4,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/graphql.png"
    },
    {
        description: "",
        title: "OAuth",
        author: "Evelyn Nguyen",
        intimation: "Web Development Concepts and T...",
        rating: 3.6,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/oauth.png"
    },
    {
        description: "",
        title: "JSON",
        author: "Liam Hernandez",
        intimation: "Web Development Concepts and T...",
        rating: 3.8,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/json.png"
    },
    {
        description: "",
        title: "AJAX",
        author: "Avery Perez",
        intimation: "Web Development Concepts and T...",
        rating: 3,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/ajax.gif"
    },
    {
        description: "",
        title: "Websockets",
        author: "Victoria Kim",
        intimation: "Web Development Concepts and T...",
        rating: 4,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/websockets.png"
    },
    {
        description: "",
        title: "Responsive Design",
        author: "Ryan Jones",
        intimation: "Web Development Concepts and T...",
        rating: 4,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/responsive.gif"
    },
    {
        description: "",
        title: "Accessibility",
        author: "Samantha Martin",
        intimation: "Web Development Concepts and T...",
        rating: 4,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/accessibility.png"
    },
    {
        description: "",
        title: "User Experience (UX)",
        author: "Luke Davis",
        intimation: "Web Development Concepts and T...",
        rating: 4,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/ux.jpeg"
    },
    {
        description: "",
        title: "User Interface (UI)",
        author: "Grace Wilson",
        intimation: "Web Development Concepts and T...",
        rating: 3,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/ui.png"
    },
    {
        description: "",
        title: "Design Systems",
        author: "Noah Martinez",
        intimation: "Web Development Concepts and T...",
        rating: 4,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/design-systems.jpeg"
    },
    {
        description: "",
        title: "performance Optimization",
        author: "Chloe Taylor",
        intimation: "Web Development Concepts and T...",
        rating: 3.2,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/performance.png"
    },
    {
        description: "",
        title: "Cross Browser Compatibility",
        author: "David Lee",
        intimation: "Web Development Concepts and T...",
        rating: 42,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/cross-browser.jpeg"
    },
    {
        description: "",
        title: "Search Engine Optimization (SEO)",
        author: "Emily Kim",
        intimation: "Web Development Concepts and T...",
        rating: 4,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/seo.jpeg"
    },
    {
        description: "",
        title: "Web security",
        author: "Gabriel Hernandez",
        intimation: "Web Development Concepts and T...",
        rating: 3.9,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/web-security.jpeg"
    },
    {
        description: "",
        title: "Testing And Debugging",
        author: "Avery Perez",
        intimation: "Web Development Concepts and T...",
        rating: 4.4,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/testing.jpeg"
    },
    {
        description: "",
        title: "Continuous Integration",
        author: "Madison Davis",
        intimation: "Web Development Concepts and T...",
        rating: 4,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/ci-cd.jpeg"
    },
    {
        description: "",
        title: "Devops",
        author: "Isabella Wilson",
        intimation: "Web Development Concepts and T...",
        rating: 4,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/devops.png"
    },
    {
        description: "",
        title: "Cloud Computing",
        author: "Jacob Garcia",
        intimation: "Web Development Concepts and T...",
        rating: 4.2,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/cloud.jpeg"
    },
    {
        description: "",
        title: "Docker",
        author: "Mia Brown",
        intimation: "Web Development Concepts and T...",
        rating: 4,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/docker.png"
    },
    {
        description: "",
        title: "Microservices",
        author: "Evelyn Nguyen",
        intimation: "Web Development Concepts and T...",
        rating: 4,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/microservices.png"
    },
    {
        description: "",
        title: "Progressive Web Apps (PWA)",
        author: "Liam Hernandez",
        intimation: "Web Development Concepts and T...",
        rating: 3,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/pwa.png"
    },
    {
        description: "",
        title: "Web Accessibility Initiative (WAI)",
        author: "Avery Perez",
        intimation: "Web Development Concepts and T...",
        rating: 4.2,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/wai.jpeg"
    },
    {
        description: "",
        title: "Content Mnagement System (CMS)",
        author: "Victoria Kim",
        intimation: "Web Development Concepts and T...",
        rating: 4,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/cms.png"
    },
    {
        description: "",
        title: "Web Analytics",
        author: "Ryan Jones",
        intimation: "Web Development Concepts and T...",
        rating: 4,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/analytics.png"
    }
]

const fav = [
    {
        description: "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript).",
        title: "HTML",
        author: "Sarah Smith",
        intimation: "Web Development Langauges",
        rating: 4,
        subTopics: ["HTML syntax and structure","HTML elements and attributes","HTML forms and input elements",
        "HTML tables and lists","HTML multimedia elements(audio, video, images)","HTML accessibility and semantic markup"],
        favorite: 0,
        ImagePath: "../Logos/html.png"
    },
    {
        description: "",
        title: "CSS",
        author: "David Lee",
        intimation: "Web Development Langauges",
        rating: 3.8,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/css.webp"
    },
    {
        description: "",
        title: "JavaScript",
        author: "Emily Chen",
        intimation: "Web Development Langauges",
        rating: 4,
        subTopics: [],
        favorite: 0,
        ImagePath: "../Logos/javascript.jpg"
    }
]
