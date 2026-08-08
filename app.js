// 1. Check for saved data in LocalStorage
const savedData = localStorage.getItem('familyData');

// 2. Parse saved data, or load the initial default tree structure
let treeData;
if (savedData) {
    treeData = JSON.parse(savedData);
} else {
    treeData = [
        { id: 1, name: "baba", gender: "male" },
        { id: 2, name: "ma", gender: "female" },
        { id: 3, fid: 1, mid: 2, pids: [5], name: "Surya Kanti Ghosh", gender: "male" },
        { id: 4, fid: 1, mid: 2, name: "didivai", gender: "female" },
        { id: 5, pids: [3], name: "Ritika", gender: "female" }
    ];
}

// 3. Initialize the Family Tree
const family = new FamilyTree(document.getElementById("tree"), {
    nodeBinding: {
        field_0: "name"
    },
    nodes: treeData
});

// 4. Save Progress Function
document.getElementById('saveBtn').addEventListener('click', function() {
    // Extract the raw data from the library's internal node objects
    const allNodesData = Object.values(family.nodes).map(node => node.data);
    
    // Save the array back to LocalStorage as a JSON string
    localStorage.setItem('familyData', JSON.stringify(allNodesData));
    
    alert("Tree saved successfully! You can close the browser and return later.");
});