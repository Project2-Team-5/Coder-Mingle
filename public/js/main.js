document.querySelec
    evt.preventDefault();
    const fetchSurveyData = {
        genderPref:document.querySelector('input[name=pref_gender]:checked').value,
        gender:document.querySelector('input[name=gender]:checked').value,
        datingFor:document.querySelector('input[name=dating_for]:checked').value,
        relationshipType:document.querySelector('input[name=relationship_type]:checked').value,
        programmerType:document.querySelector("#programmer_type").value,
        language = document.querySelector("#language").value,
        birthdate = document.querySelector("#birthdate").value,
        workerType = document.querySelector('input[name=worker_type]:checked').value,
        idealDate = document.querySelector('input[name=ideal_date]:checked').value,
    }
    console.log(fetchSurveyData);
    fetch("/api/users/survey",{
        method:"GET",
        body:JSON.stringify(fetchSurveyData),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href="/"
        } else {
            alert("")
        }
    })
})