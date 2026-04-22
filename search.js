function searchNode() {

    let input = document.getElementById("value").value;

    // 🔥 Validate input
    if (!/^-?\d+$/.test(input)) {
        alert("Please enter a valid number!");
        return;
    }

    let val = parseInt(input);

    // 🔥 Check empty tree
    if (!root) {
        alert("Tree is empty!");
        return;
    }

    let curr = root;

    function step() {

        // ❌ NOT FOUND
        if (!curr) {
            highlightedNode = null;
            drawTree();

            setTimeout(() => {
                alert("Node not found!");
            }, 200);

            return;
        }

        // 🔍 Highlight current node
        highlightedNode = curr.data;
        drawTree();

        // ✅ FOUND
        if (curr.data === val) {
            setTimeout(() => {
                highlightedNode = null;
                drawTree();
            }, 1200); // slightly faster

            return;
        }

        // ➡️ Continue search
        setTimeout(() => {

            if (val < curr.data && curr.ltag === 1)
                curr = curr.lchild;
            else if (val > curr.data && curr.rtag === 1)
                curr = curr.rchild;
            else
                curr = null;

            step();

        }, 300);
    }

    step();
}