INSERT INTO department (id, name)
VALUES  (001, "Sales"),
        (002, "Engineering"),
        (003, "Finance"),
        (004, "Legal");

INSERT INTO role (id, title, department_id, salary)
VALUES  (001, "Sales Lead", 001, 100000),
        (002, "Salesperson", 001, 80000),
        (003, "Lead Engineer", 002, 150000),
        (004, "Software Engineer", 002, 120000),
        (005, "Account Manager", 003, 160000),
        (006, "Accountant", 003, 125000),
        (007, "Legal Team Lead", 004, 250000),
        (008, "Lawyer", 004, 190000);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (001, "John", "Doe", 001, NULL),
        (002, "Mike", "Chan", 002, 001),
        (003, "Ashley", "Rodriguez", 003, NULL),
        (004, "Kevin", "Tupic", 004, 003),
        (005, "Kunal", "Singh", 005, NULL),
        (006, "Malia", "Brown", 006, 005),
        (007, "Sarah", "Lourd", 007, NULL),
        (008, "Tom", "Allen", 008, 007);