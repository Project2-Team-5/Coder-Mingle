const surveyFormHandler = async (event) => {
    event.preventDefault();

    // Collects data from the survey form
    const genderPref = document.querySelector('input[name=pref_gender]:checked').value;
    const gender = document.querySelector('input[name=gender]:checked').value;
    const datingFor = document.querySelector('input[name=dating_for]:checked').value;
    const relationshipType = document.querySelector('input[name=relationship_type]:checked').value;
    const programmerType = document.querySelector("textarea[name=programmer_type]").value;
    const language = document.querySelector("textarea[name=language]").value;
    const birthdate = document.querySelector("#birthdate").value;
    const workerType = document.querySelector('input[name=worker_type]:checked').value;
    const idealDate = document.querySelector('input[name=ideal_date]:checked').value;
    const bio = document.querySelector('textarea[name=bio]').value;

    

    if (bio && genderPref && gender && datingFor && relationshipType && programmerType && language && birthdate && workerType && idealDate) {
      // Send a POST request to the API endpoint
      const surveyResponse = await fetch('/api/users/survey', {
        method: 'POST',
        body: JSON.stringify({ bio, genderPref, gender, datingFor, relationshipType, programmerType, language, birthdate, workerType, idealDate }),
        headers: { 'Content-Type': 'application/json' },
      }); 
  
      if (surveyResponse.ok) {

        document.location.replace('/main');    
      } else {
        alert(surveyResponse.statusText);                     
      }
    }
}

  
  document
    .querySelector('#survey-form')
    .addEventListener('submit', surveyFormHandler);
  