// -------- INORDER --------
function inorderTraversal(node, res) {
    if (!node) return;

    if (node.ltag === 1 && node.lchild)
        inorderTraversal(node.lchild, res);

    res.push(node.data);

    if (node.rtag === 1 && node.rchild)
        inorderTraversal(node.rchild, res);
}

// -------- PREORDER --------
function preorderTraversal(node, res) {
    if (!node) return;

    res.push(node.data);

    if (node.ltag === 1 && node.lchild)
        preorderTraversal(node.lchild, res);

    if (node.rtag === 1 && node.rchild)
        preorderTraversal(node.rchild, res);
}

// -------- POSTORDER --------
function postorderTraversal(node, res) {
    if (!node) return;

    if (node.ltag === 1 && node.lchild)
        postorderTraversal(node.lchild, res);

    if (node.rtag === 1 && node.rchild)
        postorderTraversal(node.rchild, res);

    res.push(node.data);
}

// -------- PRINT ALL --------
function printTraversal() {

    if (!root) {
        alert("Tree is empty!");
        return;
    }

    let inorder = [];
    let preorder = [];
    let postorder = [];

    inorderTraversal(root, inorder);
    preorderTraversal(root, preorder);
    postorderTraversal(root, postorder);

    // ✅ Clean formatted output
    let output =
        "Traversal Results:\n\n" +
        "Inorder   : " + inorder.join(" -> ") + "\n" +
        "Preorder  : " + preorder.join(" -> ") + "\n" +
        "Postorder : " + postorder.join(" -> ");

    alert(output);
}