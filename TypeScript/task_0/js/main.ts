interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Desmond",
  lastName: "Daniel",
  age: 20,
  location: "Aba"
};

const student2: Student = {
  firstName: "Promise",
  lastName: "Dave",
  age: 22,
  location: "Kigali"
};

const studentsList: Student[] = [student1, student2];
