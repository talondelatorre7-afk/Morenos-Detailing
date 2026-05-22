module.exports = {
    name: "Morenos Detailing",
    email: "morenoerik@gmail.com",
    phoneForTel: "951-765-5587",
    phoneFormatted: "(951) 765-5587",
    address: {
        lineOne: "4752 Felspar St Unit D102",
        city: "Riverside",
        state: "CA",
        zip: "92509",
        country: "US",
        mapLink: "https://www.google.com/maps/place/Moreno's+High+End+Detailing/@34.0015145,-117.4833678,17z/data=!3m1!4b1!4m6!3m5!1s0x80dcb74c0616eed1:0xfddcbcdb7347a534!8m2!3d34.0015145!4d-117.4833678!16s%2Fg%2F11hdpzrwfy?entry=ttu&g_ep=EgoyMDI2MDUxNy4wIKXMDSoASAFQAw%3D%3D",
    },
    socials: {
        facebook: "https://www.facebook.com/p/Morenos-Detailing-100068464838198/",
        instagram: "https://www.instagram.com/morenos.detailing/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
