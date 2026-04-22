let xCounter = 0;

class Node {
    constructor(data) {
        this.data = data;
        this.lchild = null;
        this.rchild = null;

        // 0 = thread, 1 = child
        this.ltag = 0;
        this.rtag = 0;
    }
}

let root = null;
let highlightedNode = null;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");



let nodePositions = {};

// ---------------- DRAW TREE ----------------
function drawTree() {

    nodePositions = {};
    xCounter = 0;

    // generate positions
    calculatePositions(root);

    // 🔥 HANDLE EMPTY TREE
    let values = Object.values(nodePositions);
    if (values.length === 0) {
        canvas.width = 1200;
        canvas.height = 600;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
    }

    let xs = values.map(p => p.x);
    let ys = values.map(p => p.y);

    let maxX = Math.max(...xs, 1200);
    let maxY = Math.max(...ys, 600);

    canvas.width = maxX + 150;
    canvas.height = maxY + 100;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawNode(root);
}

// ---------------- POSITION ----------------
function calculatePositions(node, y = 50) {
    if (!node) return;

    // LEFT
    if (node.ltag === 1 && node.lchild)
        calculatePositions(node.lchild, y + 80);

    // 🔥 ADAPTIVE SPACING
    let spacing = 140; // increased from 120 → avoids overlap

    nodePositions[node.data] = {
        x: xCounter * spacing + 100,
        y: y
    };

    xCounter++;

    // RIGHT
    if (node.rtag === 1 && node.rchild)
        calculatePositions(node.rchild, y + 80);
}

// ---------------- DRAW NODE ----------------
function drawNode(node) {
    if (!node) return;

    let pos = nodePositions[node.data];
    if (!pos) return;

    let { x, y } = pos;

    let text = node.data.toString();
    ctx.font = "bold 12px Arial";

    let dataWidth = ctx.measureText(text).width + 10;
    let partW = Math.max(20, dataWidth);

    let totalW = partW * 5;
    let h = 40;
    let startX = x - totalW / 2;

    // COLOR
    ctx.fillStyle = (node.data === highlightedNode) ? "yellow" : "#5cb55c";
    ctx.fillRect(startX, y - h / 2, totalW, h);

    // BORDER
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.strokeRect(startX, y - h / 2, totalW, h);

    // PARTITIONS
    ctx.beginPath();
    for (let i = 1; i < 5; i++) {
        ctx.moveTo(startX + i * partW, y - h / 2);
        ctx.lineTo(startX + i * partW, y + h / 2);
    }
    ctx.stroke();

    // TEXT
    ctx.fillStyle = "black";
    ctx.fillText("L", startX + 5, y + 5);
    ctx.fillText(node.ltag, startX + partW + 5, y + 5);

    let centerX = startX + partW * 2 + partW / 2;
    ctx.fillText(node.data, centerX - ctx.measureText(text).width / 2, y + 5);

    ctx.fillText(node.rtag, startX + partW * 3 + 5, y + 5);
    ctx.fillText("R", startX + partW * 4 + 5, y + 5);

    // LEFT CHILD
    if (node.ltag === 1 && node.lchild && nodePositions[node.lchild.data]) {
        let c = nodePositions[node.lchild.data];
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.moveTo(x, y + h / 2);
        ctx.lineTo(c.x, c.y - h / 2);
        ctx.stroke();
        drawNode(node.lchild);
    }

    // RIGHT CHILD
    if (node.rtag === 1 && node.rchild && nodePositions[node.rchild.data]) {
        let c = nodePositions[node.rchild.data];
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.moveTo(x, y + h / 2);
        ctx.lineTo(c.x, c.y - h / 2);
        ctx.stroke();
        drawNode(node.rchild);
    }

    // THREADS
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = "red";

    if (node.ltag === 0 && node.lchild && nodePositions[node.lchild.data]) {
        let t = nodePositions[node.lchild.data];
        ctx.beginPath();
        ctx.moveTo(startX, y);
        ctx.lineTo(t.x + totalW / 2, t.y);
        ctx.stroke();
    }

    if (node.rtag === 0 && node.rchild && nodePositions[node.rchild.data]) {
        let t = nodePositions[node.rchild.data];
        ctx.beginPath();
        ctx.moveTo(startX + totalW, y);
        ctx.lineTo(t.x - totalW / 2, t.y);
        ctx.stroke();
    }

    ctx.setLineDash([]);
}

function getTreeHeight(node) {
    if (!node) return 0;

    let left = (node.ltag === 1) ? getTreeHeight(node.lchild) : 0;
    let right = (node.rtag === 1) ? getTreeHeight(node.rchild) : 0;

    return Math.max(left, right) + 1;
}