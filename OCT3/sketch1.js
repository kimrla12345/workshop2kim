
// gunhunt.gif를 터치할 때마다 이동하는 코드 (p5.js)
let gunhuntImg;
let gunhuntX, gunhuntY;
let targetX, targetY;
let moveSpeed = 0.08; // 이동 속도
let gunhuntScale = 1.2;
let isMoving = false;
let touchCounter = 0;

function preload() {
    gunhuntImg = loadImage('gunhunt.gif');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    gunhuntX = width / 2;
    gunhuntY = height / 2;
    targetX = gunhuntX;
    targetY = gunhuntY;
    imageMode(CENTER);
    textAlign(CENTER, CENTER);
    background(220);
}

function draw() {
    background(220);

    // gunhunt.gif 이동
    if (isMoving) {
        gunhuntX = lerp(gunhuntX, targetX, moveSpeed);
        gunhuntY = lerp(gunhuntY, targetY, moveSpeed);
        let d = dist(gunhuntX, gunhuntY, targetX, targetY);
        if (d < 2) {
            isMoving = false;
        }
    }

    // gunhunt.gif 그리기
    image(gunhuntImg, gunhuntX, gunhuntY, 200 * gunhuntScale, 200 * gunhuntScale);

    // 안내 텍스트
    fill(50);
    textSize(22);
    text('화면을 터치하면 gunhunt.gif가 이동합니다!', width/2, height - 40);
    textSize(18);
    text('이동 횟수: ' + touchCounter, width/2, 40);
}

function touchStarted() {
    if (touches.length > 0) {
        targetX = touches[0].x;
        targetY = touches[0].y;
        isMoving = true;
        touchCounter++;
    }
    return false;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
