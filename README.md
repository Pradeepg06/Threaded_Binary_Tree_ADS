🌳 Threaded Binary Tree Visualizer with Community Detection
📌 Overview

This project is a web-based visualization tool for understanding the Threaded Binary Tree (TBT) data structure along with a simple community detection mechanism.

It allows users to:

Insert nodes into a threaded binary tree
Search elements with animation
Perform tree traversals (Inorder, Preorder, Postorder)
Visualize threads and structure
Detect communities based on tree relationships
🎯 Objectives
To demonstrate the working of Threaded Binary Trees
To visualize tree operations dynamically
To provide a simplified application of TBT in community detection
To make learning interactive and intuitive
🧠 Concept Used
🔹 Threaded Binary Tree (TBT)

A threaded binary tree replaces NULL pointers with threads that point to:

Inorder predecessor
Inorder successor

This allows:

Faster traversal
No need for recursion or stack
⚙️ Features
✅ 1. Insert Operation
Inserts node into tree maintaining BST property
Updates threads accordingly
Tree redraws automatically
✅ 2. Search Operation
Step-by-step animated search
Highlights nodes during traversal
Displays message if node not found
✅ 3. Traversals
Inorder
Preorder
Postorder

Displayed in popup format.

✅ 4. Visualization
Nodes divided into 5 parts: L | ltag | data | rtag | R
Black edges → child links
Red dashed lines → threads
Auto-adjusting node size
Dynamic layout (no overlap)
✅ 5. Community Detection (Simplified)

👉 Communities are generated from tree structure

🔹 Logic:

Each node forms a community with:

Node + Left Child + Right Child
🔹 Example:
Node 50 → Community: [50, 30, 70]
Node 30 → Community: [30, 20, 40]
🔹 Output:

Displayed in a centered box after clicking:

Detect Community
🧩 How It Works
User inserts nodes
Tree is constructed using TBT logic
Visualization updates automatically
On clicking Detect Community:
Tree is traversed
Communities are formed
Duplicate groups are removed
Results are displayed


📁 Project Structure
project/
│── index.html        # UI structure
│── style.css         # Styling
│── script.js         # Tree + visualization
│── insert.js         # Insert operation
│── search.js         # Search animation
│── traversal.js      # Traversals
│── community.js      # Community detection


🖥️ Technologies Used
HTML5
CSS3
JavaScript (Vanilla JS)
Canvas API


🚀 How to Run
Download or clone the project
Open index.html in browser
Enter values and click:
Insert
Find
Print
Detect Community

⚠️ Note
Community detection is simplified
It is inspired by research concepts, not a full implementation
Focus is on visual understanding + application idea
📈 Future Enhancements
Real graph-based community detection
Weighted edges support
Animated community highlighting
Delete operation with animation
Export tree as image
👨‍💻 Author

Developed as part of Academic Project (Data Structures / Algorithms)

⭐ Conclusion

This project successfully demonstrates:

Threaded Binary Tree operations
Visualization of complex structures
A basic application of tree-based grouping
