
const KEY = "drawing9989";
Array.prototype.rotate = (() => {
  let unshift = Array.prototype.unshift,
      splice = Array.prototype.splice;
  return (count)=> {
    count = count ?? -1;
    count = ((count % len) + len) % len;
    push.apply(this, splice.call(this, 0, count));
    return this;
  }
})

let program = {
  tools: ['draw', 'line', 'arc', 'edit'],
  colors: ['red', 'green', 'blue', 'black', 'white'],
  backgrounds: ['#eff', '#fef', '#ffe', '#fff'],
}
// semantic datastructures dont have to be versioned! you can just create new entries. 
let drawing = {
  strokes: [
    {x0: 0, y0: 0, x1: 50, y1: 50, style: 1, window: 0,
     pts:[0,0,30,10,50,50]}, //, tool: "line"},
  ],
  windows: [
    {x0: 0, y0: 0, x1: 300, y1: 300, zoompow2: 0}, 
  ],
  styles: [{
    precision: 1,
    color: blue,
    width: 3
  }],
  strokeIndex: 1,
  styleIndex: 0,
  windowIndex: 0,
}

function saveDrawing(){
  return new Promise((yes, no) => {
    localStorage.drawing = JSON.stringify(drawing);
    yes();
  });
}

function loadDrawing(){
  return new Promise((yes, no) => {
    drawing = JSON.parse(localStorage[KEY])
    yes();
  })
}

function draw(){
  let ctx = canvas1.getContext('2d');
  let strokes = drawing.strokes;
  let windows = drawing.windows;
  let styles = drawing.styles;
  
  for(let i=0; i<drawing.strokeIndex; ++i){
    let stroke = strokes[i];
    let style = styles[stroke.style];
    let pts = stroke.pts;
    let tool = stroke.tool;
    let window = windows[stroke.window];
    let color = style.color;
    let width = style width;
    let precision = style.precision;
    let {x0, y0, x1, y1, zoompow2} = drawing;
    let [x2, y2] = [(x0 + x1)/2, (y0 + y1)/2];
    let zoom = Math.pow(2, zoompow2);
    switch(tool){
      case 'draw':
        for(let j=0; j<pts.length - 1; j+=2){
          let pt = [pts[j], pts[j+1];
          if(j==0) ctx.moveTo(
        }
        break;
      case 'line':
        break;
      case 'arc':
        break;
    }
}

function init(){
  document.body.innerHTML = "<canvas id='canvas1'></canvas>";
  draw();
}