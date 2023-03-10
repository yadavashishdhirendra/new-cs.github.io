var source = $("#some-template").html();
var template = Handlebars.compile(source);

var data = {
    users: [ 
        {
            imgs: "https://yadavashishdhirendra.github.io/new-cs.github.io/Assets/Images/00004.jpg",
            Title: "Personal Care",
            uploadDate: "20-02-2023",
            Desc: "BhuAstra Super is an organic solution for reducing very tough and recurrent crop damages due to soil-borne insects, pests like white grub, crickets, cutworms, snails, termites.",
            urls: "#",
            link: "#"

        },
        {
            imgs: "https://yadavashishdhirendra.github.io/new-cs.github.io/Assets/Images/00002.jpg",
            Title: "Health Care",
            uploadDate: "18-02-2023",
            Desc: "BhuAstra Super is an organic solution for reducing very tough and recurrent crop damages due to soil-borne insects, pests like white grub, crickets, cutworms, snails, termites.",
            urls: "#",
            link: "#"
        },
    
    ]
};


$('article').append(template(data));