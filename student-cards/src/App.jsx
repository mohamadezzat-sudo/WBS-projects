import './App.css';

// 1. Helper component to calculate and display the grade
function Grade({ gpa }) {
  const getLetterGrade = (score) => {
    if (score >= 97) return 'A+';
    if (score >= 93) return 'A';
    if (score >= 90) return 'A-';
    if (score >= 87) return 'B+';
    if (score >= 83) return 'B';
    if (score >= 80) return 'B-';
    if (score >= 77) return 'C+';
    if (score >= 73) return 'C';
    if (score >= 70) return 'C-';
    if (score >= 67) return 'D+';
    if (score >= 63) return 'D';
    if (score >= 60) return 'D-';
    return 'F';
  };

  const letter = getLetterGrade(gpa);
  const style = { color: letter === 'F' ? 'red' : 'black' };

  return <p style={style}>Grade: {letter}</p>;
}

// 2. Student component that uses the Grade component
function Student({ data }) {
  return (
    <div className="student-card">
      <h2>{data.firstName} {data.lastName}</h2>
      <p>Status: {data.graduate ? "Already Graduated" : "Actively Enrolled"}</p>
      <Grade gpa={data.gpa} />
    </div>
  );
}

// 3. Main App component that maps over the array of students
export default function App() {
  const students = [
    { id: 1, firstName: 'Testy', lastName: 'McTest', graduate: false, gpa: 55 },
    { id: 2, firstName: 'Jane', lastName: 'Doe', graduate: true, gpa: 95 },
    { id: 3, firstName: 'John', lastName: 'Smith', graduate: false, gpa: 82 }
  ];

  return (
    <div className="App" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '20px' }}>
      {students.map((student) => (
        <Student key={student.id} data={student} />
      ))}
    </div>
  );
}