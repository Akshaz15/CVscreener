console.log('this is index js ');
const data =[
    {
        Name:'Hasmit',
        age:17,
        city: 'mumbai',
        Language: 'python',
        framework:'Django',
        image:'https://randomuser.me/api/portraits/men/71.jpg'
    },
   
    {
        Name:'Darshel',
        age:17,
        city: 'banglore',
        Language: 'javascript',
        framework:'Angular',
        image:'https://randomuser.me/api/portraits/men/54.jpg'
    },
    {
        Name:'zendya',
        age:21,
        city: 'calcuta',
        Language: 'python',
        framework:'Django',
        image:'https://randomuser.me/api/portraits/women/55.jpg'
    },
    {
        Name:'karan',
        age:18,
        city: 'mumbai',
        Language: 'python',
        framework:'Flask',
        image:'https://randomuser.me/api/portraits/men/75.jpg'
    } ,{
        Name:'pravin sharma',
        age:19,
        city: 'jharkhand',
        Language: 'GO',
        framework:'Go framework',
        image:'https://randomuser.me/api/portraits/men/75.jpg'
    }
]
function CVIterator(profiles){
    let nextIndex=0;
    return{
        next: function(){
    return nextIndex<profiles.length?
    {value:profiles[nextIndex++], done:false}:
    {done:true}
        }
    };
}

const candidates = CVIterator(data);

//nextCV()
//button listner for next button
const next = document.getElementById('next');
next.addEventListener('click',nextCV);
 
//if any body clicks my button they will call next cv which is a function
 

function nextCV(){
    const CurrentCandidate= candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(CurrentCandidate !=undefined){
    image.innerHTML=`<img src='${CurrentCandidate.image}'>`

   profile.innerHTML=`<ul class="list-group">
  <li class="list-group-item">Name:${CurrentCandidate.Name}</li>
  <li class="list-group-item">${CurrentCandidate.age}years old</li>
  <li class="list-group-item">lives in ${CurrentCandidate.city}</li>
  <li class="list-group-item">Primarly works on ${CurrentCandidate.Language}</li>
  <li class="list-group-item">with ${CurrentCandidate.framework}framework</li>
</ul>`
}
else{
    alert('End of candidate application');
    window.location.reload();
}
}