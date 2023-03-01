var source = $("#some-template").html();
var template = Handlebars.compile(source);

var data = {
    users: [ 
        {
            imgs: "https://i.ytimg.com/vi/qqdutiOJvKQ/maxresdefault.jpg",
            Title: "Personal Care",
            uploadDate: "20-02-2023",
            Desc: "BhuAstra Super is an organic solution for reducing very tough and recurrent crop damages due to soil-borne insects, pests like white grub, crickets, cutworms, snails, termites.",
            urls: "#",
            link: "#"

        },
        {
            imgs: "https://i.ytimg.com/vi/2SrHOuKvchs/maxresdefault.jpg",
            Title: "Health Care",
            uploadDate: "18-02-2023",
            Desc: "BhuAstra Super is an organic solution for reducing very tough and recurrent crop damages due to soil-borne insects, pests like white grub, crickets, cutworms, snails, termites.",
            urls: "#",
            link: "#"
        },
        {
            imgs: "https://i.ytimg.com/vi/2SrHOuKvchs/maxresdefault.jpg",
            Title: "Body Care",
            uploadDate: "18-02-2023",
            Desc: "BhuAstra Super is an organic solution for reducing very tough and recurrent crop damages due to soil-borne insects, pests like white grub, crickets, cutworms, snails, termites.",
            urls: "#",
            link: "#"
        },
        {
            imgs: "https://i.ytimg.com/vi/2SrHOuKvchs/maxresdefault.jpg",
            Title: "Agro Care",
            uploadDate: "18-02-2023",
            Desc: "BhuAstra Super is an organic solution for reducing very tough and recurrent crop damages due to soil-borne insects, pests like white grub, crickets, cutworms, snails, termites.",
            urls: "#",
            link: "#"
        },
    ]
};


$('article').append(template(data));