// Initialize employee array with at least 5 employees
let employees = [
    { id: 1, name: 'Alice Smith', extension: 1234, email: 'alices@company.com', department: 'HR' },
    { id: 2, name: 'John Doe', extension: 5678, email: 'johnd@company.com', department: 'Engineering' },
    { id: 3, name: 'James Park', extension: 9101, email: 'jamesp@example.com', department: 'Sales' },
    { id: 4, name: 'Samantha Winston', extension: 1121, email: 'samanthaw@example.com', department: 'Marketing' },
    { id: 5, name: 'Michelle Jones', extension: 3141, email: 'michellej@example.com', department: 'Finance' }
];

// Load employees from localStorage if available
if (localStorage.getItem('employees')) {
    employees = JSON.parse(localStorage.getItem('employees'));
}

// Get DOM elements
const empTable = document.getElementById('employeeTable');
const form = document.getElementById('employeeForm');
const employeeCount = document.getElementById('employeeCount');

// Function to build the employee grid
function buildGrid() {
    const tbody = empTable.querySelector('tbody');
    tbody.innerHTML = ''; // Clear existing rows

    // Loop through employees array and construct table rows
    for (const emp of employees) {
        const row = document.createElement('tr');
        row.dataset.id = emp.id;

        row.innerHTML = `
            <td>${emp.name}</td>
            <td>${emp.extension}</td>
            <td>${emp.email}</td>
            <td>${emp.department}</td>
            <td><button class="deleteBtn">Delete</button></td>
        `;

        // Append the row to the tbody
        tbody.appendChild(row);
    }

    // Update employee count
    employeeCount.textContent = `${employees.length} employees`;

    // Store the array in localStorage
    localStorage.setItem('employees', JSON.stringify(employees));
}

// Add new employee
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the values from the text boxes
    const name = document.getElementById('name').value;
    const extension = parseInt(document.getElementById('extension').value, 10);
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;

    // Add new employee to a new object
    const newEmployee = {
        id: employees.length + 1, // New ID (you can improve this)
        name: name,
        extension: extension,
        email: email,
        department: department
    };

    // Push new employee to employees array
    employees.push(newEmployee);

    // Rebuild the grid
    buildGrid();

    // Reset the form
    form.reset();

    // Set focus back to the name input field
    document.getElementById('name').focus();
});

// Delete employee
empTable.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('deleteBtn')) {
        // Confirm deletion
        if (confirm('Are you sure you want to delete this employee?')) {
            // Get selected row
            const row = e.target.closest('tr');
            const employeeId = parseInt(row.dataset.id, 10);

            // Remove employee from the array based on ID
            employees = employees.filter(emp => emp.id !== employeeId);

            // Rebuild the grid
            buildGrid();
        }
    }
});

// Initial grid load when the page loads
document.addEventListener('DOMContentLoaded', () => {
    buildGrid();
});
