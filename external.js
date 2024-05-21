let currentSubject = 1;

function showSubject(subjectNumber) {
    document.getElementById('subject' + currentSubject).style.display = 'none';
    document.getElementById('subject' + subjectNumber).style.display = 'block';
    
    currentSubject = subjectNumber;

    if (subjectNumber === 1) {
        document.querySelector('button[type="button"][onclick="showSubject(2)"]').style.display = 'inline-block';
        document.querySelector('button[type="button"][onclick="showSubject(3)"]').style.display = 'none';
        document.querySelector('button[type="button"][onclick="predict()"]').style.display = 'none';
    } else if (subjectNumber === 2) {
        document.querySelector('button[type="button"][onclick="showSubject(2)"]').style.display = 'none';
        document.querySelector('button[type="button"][onclick="showSubject(3)"]').style.display = 'inline-block';
        document.querySelector('button[type="button"][onclick="predict()"]').style.display = 'none';
    } else if (subjectNumber === 3) {
        document.querySelector('button[type="button"][onclick="showSubject(2)"]').style.display = 'none';
        document.querySelector('button[type="button"][onclick="showSubject(3)"]').style.display = 'none';
        document.querySelector('button[type="button"][onclick="predict()"]').style.display = 'inline-block';
    }
}
function predict() {
    // Sample function to predict performance using a Random Forest model
    // Assuming you have input values for each subject
    let subject1Name = document.getElementById('subject1Name').value;
    let subject1Grades = parseFloat(document.getElementById('subject1Grades').value);
    let subject1Attendance = parseFloat(document.getElementById('subject1Attendance').value);

    let subject2Name = document.getElementById('subject2Name').value;
    let subject2Grades = parseFloat(document.getElementById('subject2Grades').value);
    let subject2Attendance = parseFloat(document.getElementById('subject2Attendance').value);

    let subject3Name = document.getElementById('subject3Name').value;
    let subject3Grades = parseFloat(document.getElementById('subject3Grades').value);
    let subject3Attendance = parseFloat(document.getElementById('subject3Attendance').value);

    // Example: Dummy prediction using random values
    // Replace this with your actual prediction logic using the Random Forest model

    // Dummy prediction values for demonstration
    let predictedPerformance1 = predictSubjectPerformance(subject1Grades, subject1Attendance);
    let predictedPerformance2 = predictSubjectPerformance(subject2Grades, subject2Attendance);
    let predictedPerformance3 = predictSubjectPerformance(subject3Grades, subject3Attendance);

    // Display the prediction results
    document.getElementById('predictionResult').innerHTML = `
        <h2>Prediction Results</h2>
        <p>Subject 1 (${subject1Name}): ${predictedPerformance1}</p>
        <p>Subject 2 (${subject2Name}): ${predictedPerformance2}</p>
        <p>Subject 3 (${subject3Name}): ${predictedPerformance3}</p>
    `;
}

// Dummy function to predict subject performance (replace with actual prediction logic)


    // Your prediction logic here
    // You can access the values of all input fields using document.getElementById or document.getElementsByName
    // Example: document.getElementById('subject1Name').value
// Dummy function to predict subject performance and provide recommendations
function predictSubjectPerformance(grades, attendance, subject) {
    
    var averageMarks = grades.reduce((a,b) => a + b, 0) / grades.length;

    if (averageMarks < 50 && attendance < 50) {
        // Poor performance
        // Implement NLP for recommendations
        let recommendations = recommendWebsites(subject);
        return {
            performance: 'Poor',
            recommendations: recommendations
        };
    } else if (averageMarks >= 50 && averageMarks < 75 && attendance <=75) {
        // Average performance
        return {
            performance: 'Average',
            recommendations: null
        };
    } else {
        // Excellent performance
        return {
            performance: 'Excellent',
            recommendations: null
        };
    }
}

// Dummy function for recommending websites based on subject
function recommendWebsites(subject) {
    // This is just a placeholder, replace with actual NLP logic to recommend websites based on the subject
    let websites = {
        'Mathematics': ['khanacademy.org', 'mathisfun.com', 'wolframalpha.com'],
        'Science': ['nasa.gov', 'sciencedaily.com', 'nationalgeographic.com'],
        'History': ['history.com', 'britishmuseum.org', 'natgeokids.com'],
        // Add more subjects and corresponding websites as needed
    };

    return websites[subject] || [];
}

// Example usage:
/* 
let grades = [45, 60, 70, 80];
let attendance = 90; // Dummy value, not used in this function
let subject = 'Mathematics';

let prediction = predictSubjectPerformance(grades, attendance, subject);
console.log('Performance:', prediction.performance);
if (prediction.recommendations) {
    console.log('Recommendations for improvement:');
    prediction.recommendations.forEach(website => console.log(website));
}*/
