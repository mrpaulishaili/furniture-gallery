const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

// Listen to PORT
app.listen(PORT, () => {
  console.log(`Connected to http://localhost:${PORT}`);
});

// Static files
app.use(express.static("assets"));

// Templating Engine
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  const furnitures = [
    {
      name: "Furniture 1",
      description:
        "a brief entitled description of the newly made furniture 1 for all and sundry",
      image: "/images/pexels-photo-1866149.jpeg",
    },
    {
      name: "Furniture 2",
      description:
        "a brief entitled description of the newly made furniture 2 for all and sundry",
      image: "/images/pexels-photo-1866149.jpeg",
    },
    {
      name: "Furniture 3",
      description:
        "a brief entitled description of the newly made furniture 3 for all and sundry",
      image: "/images/pexels-photo-1866149.jpeg",
    },
    {
      name: "Furniture 4",
      description:
        "a brief entitled description of the newly made furniture 4 for all and sundry",
      image: "/images/pexels-photo-1866149.jpeg",
    },
    {
      name: "Furniture 5",
      description:
        "a brief entitled description of the newly made furniture 5 for all and sundry",
      image: "/images/pexels-photo-1866149.jpeg",
    },
    {
      name: "Furniture 6",
      description:
        "a brief entitled description of the newly made furniture 6 for all and sundry",
      image: "/images/pexels-photo-1866149.jpeg",
    },
    {
      name: "Furniture 7",
      description:
        "a brief entitled description of the newly made furniture 7 for all and sundry",
      image: "/images/pexels-photo-1866149.jpeg",
    },
    {
      name: "Furniture 8",
      description:
        "a brief entitled description of the newly made furniture 8 for all and sundry",
      image: "/images/pexels-photo-1866149.jpeg",
    },
  ];
  res.render("index", { furnitures: furnitures });
});
