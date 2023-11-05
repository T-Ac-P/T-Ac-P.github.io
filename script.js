function nerdify() {
  document.getElementById("french-modal").style.display = 'block';
}

function closeModal() {
  document.getElementById("french-modal").style.display = 'none';
}

let newspanels = document.querySelectorAll(".news-box");

newspanels.forEach((ele) => {
  ele.addEventListener('click', () => {
    location.href = "/news/2023-year-in-review";
  });
});

// const can = document.getElementById("c");
// const ctx = can.getContext("2d");

// ctx.canvas.width = window.innerWidth * 0.7;
// ctx.canvas.height = ctx.canvas.width * 0.66;

// const cw = can.width;
// const ch = can.height;

// const cwu = cw/100;
// const chu = ch/100;
// function drawLogo() {
//   ctx.fillStyle = "#70B2E5";
//   ctx.strokeStyle = "#70B2E5"
//   ctx.beginPath();
//   ctx.roundRect(22.5*cwu, 42.5*chu, 56*cwu, 15*chu, 44);
//   ctx.stroke();
//   ctx.fill();
//   ctx.fillStyle = "#FFFCFF";
//   ctx.strokeStyle = "#FFFCFF"
//   ctx.font = "48px sans-serif";
//   ctx.fillText("Who is Jean Paul-Pierre?", 25*cwu, 52*chu);
// }


// class Cloud {
//   constructor(text, direction) {
//     this.text = text;
//     this.width = 15*cwu;
//     this.height = 10*chu;
//     this.x = 42.5*cwu;
//     this.y = 45*chu;
//     this.direction = direction; // Will be a vector containing cloud direction
//   }
// }

// clouds = []

// clouds.push(new Cloud("Father",[-24,7.5])); // 8 clouds total
// clouds.push(new Cloud("Lawyer",[24,-7.5]));
// clouds.push(new Cloud("Brother",[24,7.5]));
// clouds.push(new Cloud("Leader",[-24,-7.5]));

// clouds.push(new Cloud("Mayor",[0,-9.7]));
// clouds.push(new Cloud("Premier",[0,9.7]));
// clouds.push(new Cloud("Husband",[27.5,0]));
// clouds.push(new Cloud("Proud",[-27.5,0]));



// function draw() {
//   ctx.clearRect(0,0,100*cwu,100*chu);
//   for (const cloud of clouds) {
//     ctx.fillStyle = "#70B2E5";
//     ctx.strokeStyle = "#70B2E5"
//     ctx.beginPath();
//     ctx.roundRect(cloud.x,cloud.y,cloud.width,cloud.height,44);
//     ctx.stroke();
//     ctx.fill();
//     ctx.fillStyle = "#FFFCFF";
//     ctx.strokeStyle = "#FFFCFF"
//     ctx.font = "24px sans-serif";
//     ctx.fillText(cloud.text, cloud.x + 4*cwu, cloud.y + 6*chu);
//   }
//   drawLogo();
// }

// var iter = 0;

// for (const cloud of clouds) {
//   console.log(cloud.x, cloud.y)
// }

// function step() {
//   if (iter >= 1.99) {
//     for (const cloud of clouds) {
//       console.log(cloud.x, cloud.y)
//     }
//     return
//   }
//   iter += 0.01;
//   for (const cloud of clouds) {
//     cloud.x += cloud.direction[0] - (1 - Math.pow(1 - iter,5))*cloud.direction[0];
//     cloud.y -= cloud.direction[1] - (1 - Math.pow(1 - iter,5))*cloud.direction[1];
//   }
//   draw();
//   requestAnimationFrame(step);
// }

// step();