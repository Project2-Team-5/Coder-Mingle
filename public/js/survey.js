const surveyFormHandler = async (event) => {
    event.preventDefault();

    // Collects data from the survey form
    const genderPref = document.querySelector('input[name=pref_gender]:checked').value;
    const datingFor = document.querySelector('input[name=dating_for]:checked').value;
    const relationshipType = document.querySelector('input[name=relationship_type]:checked').value;
    const programmerType = document.querySelector("#programmer_type").value;
    const workerType = document.querySelector('input[name=worker_type]:checked').value;
    const idealDate = document.querySelector('input[name=ideal_date]:checked').value;
    
// Note: Fix this?
    if (genderPref && datingFor && relationshipType && programmerType && workerType && idealDate) {
      // Send a POST request to the API endpoint
      const surveyResponse = await fetch('/api/users/survey', {
        method: 'POST',
        body: JSON.stringify({ genderPref, datingFor, relationshipType, programmerType, workerType, idealDate }),
        headers: { 'Content-Type': 'application/json' },
      }); 
  
      if (surveyResponse.ok) {
        // TODO: If successful, redirect the browser to the main page, currently for testing using profile page
        document.location.replace('/profile');
      } else {
        alert(surveyResponse.statusText);
      }
    }
}

  
  document
    .querySelector('#survey-form')
    .addEventListener('submit', surveyFormHandler);
  