const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  const data = {
    artist:
      '"Early on, I was inspired by the artists I appreciated, and the visual media I grew up watching . I enjoyed the works from likes of  Bob Clampett, Chuck Jones, and Tex Avery,  to more recent animation entrepreneurs like Satoshi Kon. I was the kid that was definitely  up for Saturday morning cartoons, and the teen that recommended foreign live action and animated films. Graduating and dipping my toes into the industry, I have greatly evolved and matured as an artist. I delved deeper into the art world, I had learned that there is a much bigger world out there, in terms of design, animation and illustration, that I would find passion to explore. Breaking the mold that I previously held myself in.Now I am my own artist, with the personality to inspire others. there isn’t anything in the world I wouldn’t mind watching just to learn and somehow incorporate that into myself to be the best we can be. That is something I hope all artists feel regardless on the direction they are going."',
  };

  res.render("home", data);
});

router.get("/products", (req, res, next) => {
  res.render("products");
});

router.get("/signup", (req, res, next) => {
  res.render("signup");
});

module.exports = router;
