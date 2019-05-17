class Fetch {
  constructor(token){
    this.authToken = token;
  }
  get(url) {
    return new Promise((resolve, reject) => {
      console.log(`Bearer ${this.authToken}`);
         fetch(url, {
         method: "GET",
         headers: {
           'Content-type': 'application/json',
           'authorization': 'Bearer ' + this.authToken,
         },
          mode: 'cors',
        })
        .then((response => response.json()))
        .then(result => resolve(result))
        .catch(err => {
           reject(`Oops!! NETWORK FAILED...`);
        });
    });
  }
  post(url, data){
      return new Promise((resolve, reject) => {
        fetch(url, {
         method: "POST",
         headers: {  
           'Content-type': 'application/json',
         },
         mode: 'cors',
         body: JSON.stringify(data)
        })
         .then((response => response.json()))
        .then(result => resolve(result))
           .catch(err => {
           reject(`Oops!! NETWORK FAILED...`);
        });
      });
  }
  patch(url, data){
 return  fetch(url, {
        method: "PATCH",
        headers: {
          'Content-type': 'application/json',
             'authorization': 'Bearer ' + this.authToken
        },
        mode: 'cors',
        body: JSON.stringify(data)
      })

  }

  delete(url) {
   return fetch(url, {
      method: "DELETE",
      headers:{ 
         'Content-type': 'application/json',
        'authorization': 'Bearer ' + this.authToken       
      },
      mode: 'cors'
    })
  }

/*  handleResponse(response) {
      if(response.ok){
        console.log('response',response);
            return response.json();}
            else{
            throw new Error(`Request rejected with status ${response.status}`);
          }
          }*/
      
      PostAuth(url, mdata){
 return  fetch(url, {
         method: "POST",
         headers: {  
           'Content-type': 'application/json',
           'authorization': 'Bearer ' + this.authToken 

         },
         mode: 'cors',
         body: JSON.stringify(mdata)
        })
}
}



export default Fetch;