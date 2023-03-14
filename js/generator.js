const loadUserGenerator = ()=>{
    const url = `https://randomuser.me/api/`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data))
};
const displayData = (result)=>{
    const img = document.getElementById(`images`);
    const detailes = document.getElementById(`detailes`);
    detailes.innerHTML = `<h2 class="text-2xl font-semibold text-lime-700"><span class="text-xl font-normal text-slate-600">Hi,My name is</span><br>${result.results[0].name.title + ' '+ result.results[0].name.first + ' '+result.results[0].name.last}</h2>
    <p>E-mail: ${result.results[0].email}</p>
    <h4>Gender: ${result.results[0].gender}    Cell: ${result.results[0].cell}</h4>
    <h4>Age: ${result.results[0].registered.age}    Birthday: (${result.results[0].registered.date})</h4>
<div class="space-x-10">
    <i class="hover:text-lime-700 fa-2x fa-sharp fa-solid fa-user-tie"></i>
   <i class="hover:text-lime-700 fa-2x fa-solid fa-envelope"></i>
    <i class="hover:text-lime-700 fa-2x fa-sharp fa-solid fa-calendar-days"></i>
    <i class="hover:text-lime-700 fa-2x fa-sharp fa-solid fa-map-location-dot"></i>
    <i class="hover:text-lime-700 fa-2x fa-sharp fa-solid fa-phone"></i>
    <i class="hover:text-lime-700 fa-2x fa-solid fa-lock"></i>
</div> 
`  
    img.innerHTML = `<img  src="${result.results[0].picture.large}" alt="" class="rounded-xl" />`
console.log(result.results[0]);
}
loadUserGenerator();