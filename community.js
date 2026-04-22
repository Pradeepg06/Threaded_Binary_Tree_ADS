// ================= COMMUNITY FROM TREE =================

// ---------------- GET COMMUNITIES FROM TREE ----------------
function getCommunitiesFromTree(node, communities) {
    if (!node) return;

    let community = [];

    // include current node
    community.push(node.data);

    // include left child
    if (node.ltag === 1 && node.lchild) {
        community.push(node.lchild.data);
    }

    // include right child
    if (node.rtag === 1 && node.rchild) {
        community.push(node.rchild.data);
    }

    communities.push(community);

    // recurse
    if (node.ltag === 1)
        getCommunitiesFromTree(node.lchild, communities);

    if (node.rtag === 1)
        getCommunitiesFromTree(node.rchild, communities);
}

// ---------------- REMOVE DUPLICATES ----------------
function cleanCommunities(communities) {
    let seen = new Set();
    let result = [];

    for (let comm of communities) {
        let sorted = [...new Set(comm)].sort((a, b) => a - b);
        let key = sorted.join(",");

        if (!seen.has(key)) {
            seen.add(key);
            result.push(sorted);
        }
    }

    return result;
}

// ---------------- MAIN FUNCTION ----------------
function runCommunityDetection() {

    if (!root) {
        document.getElementById("output").style.display = "inline-block";
        document.getElementById("output").innerText = "Tree is empty!";
        return;
    }

    let communities = [];

    getCommunitiesFromTree(root, communities);
    let finalCommunities = cleanCommunities(communities);

    let output = "Detected Communities (from Tree):\n\n";

    finalCommunities.forEach((c, i) => {
        output += "Community " + (i + 1) + ": " + c.join(", ") + "\n";
    });

    // 🔥 SHOW BOX ONLY NOW
    let outDiv = document.getElementById("output");
    outDiv.style.display = "inline-block";
    outDiv.innerText = output;
}