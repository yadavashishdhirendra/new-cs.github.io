var source = $("#some-template").html();
var template = Handlebars.compile(source);

var data = {
    users: [ 
        {
            imgs: "https://yadavashishdhirendra.github.io/new-cs.github.io/Assets/Images/00004.jpg",
            Title: "A Comprehensive Guide to Understanding and Succeeding in Direct Selling",
            uploadDate: "20-02-2023",
            Desc: "Direct Selling involves making sales directly to customers without the assistance of any middlemen. It is the practice of selling goods outside of a traditional retail environment, such as online, at home, or in other locations. Wholesalers and local distribution hubs are two examples of the middlemen it gets rid of in the distribution process.",
            urls: "https://yadavashishdhirendra.github.io/new-cs.github.io/a-comprehensive-guide-to-understanding-and-succee%20ding-in-direct-selling.html",
            link: "https://yadavashishdhirendra.github.io/new-cs.github.io/a-comprehensive-guide-to-understanding-and-succee%20ding-in-direct-selling.html"

        },
        {
            imgs: "https://yadavashishdhirendra.github.io/new-cs.github.io/Assets/Images/00002.jpg",
            Title: "The Direct Selling Industry: A Global Perspective",
            uploadDate: "18-02-2023",
            Desc: "Direct selling is the practice of promoting and selling a product or service directly to a consumer outside of a traditional retail setting (like a customer's home, place of business, etc.) through personal explanation and demonstration. It's been around for a long time and is very much like the standard retail setup for everyday items, making it one of the earliest forms of commerce.",
            urls: "https://yadavashishdhirendra.github.io/new-cs.github.io/the-direct-selling-industry-a-global-perspective.html",
            link: "https://yadavashishdhirendra.github.io/new-cs.github.io/the-direct-selling-industry-a-global-perspective.html"
        },
    
    ]
};


$('article').append(template(data));