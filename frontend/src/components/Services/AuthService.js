export default {
    login : user =>{

        return fetch('/userLogin',{
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            },
             credentials: 'include',
        }).then(res => {
            if(res.status !== 401){
                return res.json().then(data => data);
            }
            else
                return { isAuthenticated : false, user : {email : "",role : ""}};
        })
    },
    register : user =>{
        console.log(user);
        return fetch('/userregistration',{
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
          .then(data => data);
    },
    logout : ()=>{
        return fetch('/logout')
                .then(res => res.json())
                .then(data => data);
    },
    isAuthenticated : ()=>{
        console.log("res")
        return fetch('/authenticated')
                .then(res=>{
                    if(res.status !== 401){
                        console.log("working")

                        return res.json().then(data => data);
                    }
                    else
                        return { isAuthenticated : false, user : {email : "",role : ""}};
                });
    }
}