fetch('./skill.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
    document.getElementById("skill1").innerHTML=data[0]['name']
    document.getElementById("skill2").innerHTML=data[1]['name']
    document.getElementById("skill3").innerHTML=data[2]['name']
    document.getElementById("skill4").innerHTML=data[3]['name']
    document.getElementById("skill5").innerHTML=data[4]['name']
    document.getElementById("skill6").innerHTML=data[5]['name']  
    
  })
  .catch((err) => {
  })