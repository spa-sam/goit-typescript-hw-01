// Змінна, яка може містити або рядок, або число (union type)
let myVariable: string | number;

// Присвоєння значення рядка
myVariable = "Hello";

// Присвоєння числового значення
myVariable = 42;

// Змінна, яка може містити лише одне з двох можливих рядкових значень
let myStatus: "enable" | "disable";

// Присвоєння значення 'enable'
myStatus = "enable";

// Присвоєння значення 'disable'
myStatus = "disable";
