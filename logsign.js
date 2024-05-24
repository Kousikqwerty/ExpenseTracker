async function readData(){
    try{
      var data = await fetch('./users.json');
      var res = await data.json();
      return res.users  ; 
    }
    catch{
        console.log("err");
    }
}

const login=async (Email,Password)=>{
    const users = await readData();
    console.log(users); 

return new Promise((res,rej)=>{
    setTimeout(()=>{
        let user = users.find(data=>data.email===Email && data.password===Password);

        if(user){
            res(user);
        }else{
            rej(new Error("Invalid email or password"));
        }
    },1000);
});
}

document.getElementById("subform").addEventListener("click",async (e)=>{
    e.preventDefault();
    try{
    let mail = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;
    await login(mail,pass);
     window.open("task1.html");
    }
    catch(err){
        console.error(err.message);
        document.querySelector("#err").style.display="block";
    }
});