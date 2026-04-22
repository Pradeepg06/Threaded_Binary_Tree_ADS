🌳 Threaded Binary Tree Visualizer with Community Detection

📌 Overview

This project is a web-based visualization tool for understanding the Threaded Binary Tree (TBT) along with a simple community detection mechanism.

It allows users to:
1.Insert nodes into a threaded binary tree
2.Search elements with animation
3.Perform tree traversals (Inorder, Preorder, Postorder)
4.Visualize threads and structure
5.Detect communities based on tree relationships

🎯 Objectives

1. Demonstrate the working of Threaded Binary Trees
2. Provide interactive visualization of tree operations
3. Apply tree structure for simplified community detection
4. Improve conceptual understanding through UI

🧠 Concept Used

🔹 Threaded Binary Tree (TBT)
A Threaded Binary Tree replaces NULL pointers with threads that point to:
1. Inorder predecessor
2. Inorder successor
This helps in:
1. Faster traversal
2. No recursion or stack required

⚙️ Features

✅ Insert Operation

1. Inserts node maintaining BST property
2. Updates threads automatically
3. Tree redraws dynamically

✅ Search Operation

1. Step-by-step animated traversal
2. Highlights nodes during search
3. Displays alert if node not found

✅ Traversals

1. Inorder
2. Preorder
3. Postorder
Displayed using popup output.

✅ Visualization

1. Node divided into 5 parts: L | ltag | data | rtag | R
2. Black lines → child links
3. Red dashed lines → threads
4. Auto-adjusting node size
5. Dynamic layout (no overlapping)

✅ Community Detection (Simplified)

Communities are generated based on tree structure.

🔹 Logic:

Node + Left Child + Right Child

🔹 Example:

Node 50 → [50, 30, 70]  
Node 30 → [30, 20, 40]

🧩 How It Works

1. User inserts values
2. Tree is built using threaded binary tree logic
3. Visualization updates automatically
4. On clicking Detect Community:
   4.1 Tree is traversed
   4.2 Communities are formed
   4.3 Duplicate groups are removed
   4.4 Output is displayed

📁 Project Structure

project/
│── index.html
│── style.css
│── script.js
│── insert.js
│── search.js
│── traversal.js
│── community.js

🖥️ Technologies Used

1. HTML5
2. CSS3
3. JavaScript (Vanilla JS)
4. Canvas API

🚀 How to Run

1. Download or clone the repository
2. Open index.html in any browser
3. Use the interface:
   3.1 Insert → Add nodes
   3.2 Find → Search node
   3.3 Print → Traversals
   3.4 Detect Community → Show communities

⚠️ Note

1. Community detection is a simplified approach
2. Inspired by research concepts
3. Focus is on visualization and understanding
   
📈 Future Enhancements

1. Real graph-based community detection
2. Weighted connections
3. Animated community highlighting
4. Delete operation with animation
5. Export tree as image

👨‍💻 Author
Developed as part of an academic project (Advance Data Structures / Algorithms)

⭐ Conclusion
This project demonstrates:
1. Threaded Binary Tree operations
2. Interactive visualization
3. A basic application of tree-based grouping
