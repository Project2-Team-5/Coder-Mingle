// TODO: needs update names

document.querySelector("#post-form").addEventListener("submit",evt=>{
    evt.preventDefault();

    console.log(document.querySelector("#post").value);
    console.log(document.querySelector("#userId").value);
    const userId = document.querySelector("#userId").value;
    fetch("/api/post",{
        method:"POST",
        body:JSON.stringify({
            comment: document.querySelector("#post").value,
            userId: userId
        }),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.reload();
        } else {
            alert("Comment failed")
        }
    })
})