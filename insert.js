function insertNode() {
    let input = document.getElementById("value").value;

    // 🔥 Validate numeric input
    if (!/^-?\d+$/.test(input)) {
        alert("Please enter a valid number!");
        return;
    }

    let val = parseInt(input);

    let newNode = new Node(val);

    if (!root) {
        root = newNode;
        drawTree();
        return;
    }

    let curr = root, parent = null;

    while (curr) {
        parent = curr;

        if (val === curr.data) {
            alert("Duplicate not allowed!");
            return;
        }

        if (val < curr.data) {
            if (curr.ltag === 1) curr = curr.lchild;
            else break;
        } else {
            if (curr.rtag === 1) curr = curr.rchild;
            else break;
        }
    }

    if (val < parent.data) {
        newNode.lchild = parent.lchild;
        newNode.rchild = parent;

        parent.ltag = 1;
        parent.lchild = newNode;
    } else {
        newNode.rchild = parent.rchild;
        newNode.lchild = parent;

        parent.rtag = 1;
        parent.rchild = newNode;
    }

    drawTree();
}