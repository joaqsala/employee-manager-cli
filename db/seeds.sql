INSERT INTO department (name)
VALUES  ("Sales"),
        ("Engineering"),
        ("Finance"),
        ("Legal");

INSERT INTO role (title, department_id, salary)
VALUES  ("Sales Lead", 001, 100000),
        ("Salesperson", 001, 80000),
        ("Lead Engineer", 002, 150000),
        ("Software Engineer", 002, 120000),
        ("Account Manager", 003, 160000),
        ("Accountant", 003, 125000),
        ("Legal Team Lead", 004, 250000),
        ("Lawyer", 004, 190000);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("John", "Doe", 001, NULL),
        ("Mike", "Chan", 002, 001),
        ("Ashley", "Rodriguez", 003, NULL),
        ("Kevin", "Tupic", 004, 003),
        ("Kunal", "Singh", 005, NULL),
        ("Malia", "Brown", 006, 005),
        ("Sarah", "Lourd", 007, NULL),
        ("Tom", "Allen", 008, 007);