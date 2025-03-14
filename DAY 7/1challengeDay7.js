let register = true;
let note7Man = 0;
let note7Woman = 0;
let man = 0;
let woman = 0;
let notes = 0;
let HighestGrade = 0;

while (register) {
  let NoteCurrentStudent = Number(prompt("enter the current student's grade"));
  let SexCurrentStudent = Number(prompt("1 for Man or 2 for Woman"));
  if (SexCurrentStudent == 1) {
    man = man + 1;
    if (NoteCurrentStudent > note7Man) {
      note7Man = NoteCurrentStudent;
    }
  } else {
    woman = woman + 1;
    if (NoteCurrentStudent >= 7) {
      note7Woman = note7Woman + 1;
    }
  }
  notes = notes + NoteCurrentStudent;
  let NewStudent = Number(prompt("1 for new registration and 2 for exit"));
  if (NewStudent == 2) {
    notes = notes / (man + woman);
    document.write(notes + " is the total average of students <br>");
    document.write(man + " is the total number of man who sent notes <br>");
    document.write(
      note7Woman + " is the total number of Women with scores above 7 <br>"
    );
    document.write(note7Man + " is the Highest grade between man <br>");
    register = false;
  }
}
