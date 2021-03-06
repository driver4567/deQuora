 
export const ipfsAdd = async (question) => {
    console.log("ques", question)
    var formData  = new FormData();
    
    formData.append('file', JSON.stringify(question));
    
    return await fetch("https://ipfs.infura.io:5001/api/v0/add", {
      method: 'POST',
      body: formData
    }).then(function (response) {
        return response.json()
    });
}

export const ipfsGet = async (hash) => {
//const ipfsGet = async (hash) => {
    let options = {
        method: "GET",
        url: `https://ipfs.infura.io:5001/api/v0/cat?arg=${hash}`,
        port: 443
    };

    return await fetch(`https://ipfs.infura.io:5001/api/v0/cat?arg=${hash}`).then( async(resp) => {
      return await resp.json()
    } )
}

// ipfsAdd("answer")
//ipfsGet("QmSMrUStC5wCCoTesm6RoL9dfdeUSbGsUi1t8yVa7etJ2v").then((body) => {console.log("cons",body)})
//ipfsGet("Qmb66G2a3WsDXjrPm4zHErPNiX4Lnhy5Ry1UincKBnHftc")

