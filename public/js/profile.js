const updateProfileHandler = async (event) => {
    event.preventDefault();
console.log('sdfsdfsdf');
    
    const birthdate = document.querySelector('#birthdate').value.trim();
    const pref_gender = document.querySelector('#pref_gender').value.trim();
    const relationship = document.querySelector('#relationship').value.trim();
    const goal = document.querySelector('#goal').value.trim();
    const language = document.querySelector('#language').value.trim();
    const worker = document.querySelector('#worker').value.trim();
    const ideal_date = document.querySelector('#ideal_date').value.trim();
    const bio = document.querySelector('#bio').value.trim();
  
    let updateBody = {};
    if (birthdate) {
        updateBody.birthdate = birthdate;
    }
    if (pref_gender) {
        updateBody.pref_gender = pref_gender;
    }
    if (relationship) {
        updateBody.relationship = relationship;
    }
    if (goal) {
        updateBody.
        goal = goal;
    }
    if (language) {
        updateBody.language = language;
    }
    if (worker) {
        updateBody.worker = worker;
    }
    if (ideal_date) {
        updateBody.ideal_date = ideal_date;
    }
    if (bio) {
        updateBody.bio = bio;
    }


      const response = await fetch('/profile', {
        method: 'PUT',
        body: JSON.stringify(updateBody),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    
};

document.querySelector('#update-form').addEventListener('submit', updateProfileHandler);