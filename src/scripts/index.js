import "../styles/index.scss";
import video from "../assets/video";
import sound from "../assets/sound";

const user = {
  name: "Asya",
  lastName: "Fetisova",
  age: 19,
  birth: "31.12.2000",
  height: 178,
  animal: true,
  foodPrefer: ["chicken", "juice", "cucumber"],

  getInform: function() {
    console.log(this.name + " " + this.lastName + " " + this.age);
  }
};

console.log(user);
user.getInform();
