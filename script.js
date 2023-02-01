
const smallcontainer = document.getElementById("smallcontainer");

const text = document.getElementById('text');
const btn = document.getElementById('btn');
const message = document.getElementById('message');
const maincontainer = document.getElementById('maincontainer');

if(text.value==''){
  message.innerHTML = "enter address!"
}

var x =0;
let arr1=[];
let arr2=[];
const locationPromise = new Promise((resolve,reject)=>{
   navigator.geolocation.getCurrentPosition(resolve);
   
});

const fetchuserlocation = async()=>{
  
   const data = await locationPromise;
   console.log('location',data);
   const lat = data.coords.latitude;
   const long = data.coords.longitude;
   arr1.push(lat);
   arr2.push(long);
     console.log(arr1);
     console.log(arr2);
//    fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&format=json&apiKey=1cd39aa2fd5a4b8bb21a5302b4bf7b4e`)
// .then(resp => resp.json())
// .then((result) => {
//   if (result.length) {
// 	  console.log(result[0].timezone);
//   } else {
//     console.log("No location found");                      
//   }
// });
  renderWhather(lat,long);
}

const runDetails = (item)=>{

  const elements =[
    {
      label : "Name Of Time Zone : ",
      data  : item.features[0].properties.timezone.name,
    },
    {
      label : "Lat : ",
      data  : item.features[0].bbox[1],
    },
    {
      label : "Long : ",
      data  : item.features[0].bbox[0],
    },
    {
      label : "Offset STD : ",
      data  : item.features[0].properties.timezone.offset_STD,
    },
    {
      label : "Offset STD Seconds  : ",
      data  : item.features[0].properties.timezone.offset_STD_seconds,
    },
    {
      label : "Offset DST : ",
      data  : item.features[0].properties.timezone.offset_DST,
    },
    {
      label : "Offset DST Seconds: ",
      data  : item.features[0].properties.timezone.offset_DST,
    },
    {
      label : "Country : ",
      data  : item.features[0].properties.country,
    },
    {
      label : "Postcode : ",
      data  : item.features[0].properties.postcode,
    },
    {
      label : "city : ",
      data  : item.features[0].properties.city,
    },
  ];
       
                 

                  elements.forEach((itemobj)=>{
                    const div = document.createElement('div');
                    const label = document.createElement('span');
                    const val = document.createElement('span');
           
                    label.textContent = itemobj.label;
                    val.textContent = itemobj.data;
           
                    div.appendChild(label);
                    div.appendChild(val);
                    smallcontainer.appendChild(div);
                });
              
              }
      
        
    
  const renderWhather=async(lat,long)=>{
    
// var requestOptions = {
//  method: 'GET',
// };
     
const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=1cd39aa2fd5a4b8bb21a5302b4bf7b4e`;
const res = await fetch(url);
const data = await res.json();
 console.log('whe',data);

 // console.log(data.features[0].properties.timezone);
// const todo=fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=1cd39aa2fd5a4b8bb21a5302b4bf7b4e`, requestOptions)
//  .then(response => response.json())
//  .then(result => console.log(result))

//  .catch(error => console.log('error', error));
// empty.textContent = data.features[0].properties.country;

// arr.push(todo);
    runDetails(data);

}

// console.log(arr[0]);

 const bottomDetails= async()=>{
  
  const data = await locationPromise;
  console.log('location',data);
  const lat = data.coords.latitude;
  const long = data.coords.longitude;
       renderWhather2(lat,long);
}
const renderWhather2=async(lat,long)=>{
  
  const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=1cd39aa2fd5a4b8bb21a5302b4bf7b4e`;
  const res = await fetch(url);
  const data = await res.json();
    inputDetails(data);
}
  const inputDetails = (item)=>{
   
    const inp = text.value;

    const elements =[
      {
        label : "Name Of Time Zone : ",
        data  : item.features[0].properties.timezone.name,
      },
      {
        label : "Lat : ",
        data  : item.features[0].bbox[1],
      },
      {
        label : "Long : ",
        data  : item.features[0].bbox[0],
      },
      {
        label : "Offset STD : ",
        data  : item.features[0].properties.timezone.offset_STD,
      },
      {
        label : "Offset STD Seconds  : ",
        data  : item.features[0].properties.timezone.offset_STD_seconds,
      },
      {
        label : "Offset DST : ",
        data  : item.features[0].properties.timezone.offset_DST,
      },
      {
        label : "Offset DST Seconds: ",
        data  : item.features[0].properties.timezone.offset_DST,
      },
      {
        label : "Country : ",
        data  : item.features[0].properties.country,
      },
      {
        label : "Postcode : ",
        data  : item.features[0].properties.postcode,
      },
      {
        label : "city : ",
        data  : item.features[0].properties.city,
      },
    ];
    console.log(inp);
    console.log(text.value);
    // console.log(item.features[0].bbox[1]);
    //   var brr =[];
    //   //  console.log(inp.slice(""));
     
          
    //     // brr=inp.split("");
    //    console.log(brr[0]);
    //   if(brr[0] == item.features[0].bbox[1] && brr[1]==item.features[0].bbox[0]){
    //      console.log("move");
    //   }

 

       if(text.value==item.features[0].bbox[1] || text.value==item.features[0].bbox[0] || text.value==item.features[0].properties.city || text.value==item.features[0].properties.country || text.value==item.features[0].properties.postcode ){
      
    elements.forEach((itemobj)=>{
      message.innerText='';
      const div = document.createElement('div');
      const label = document.createElement('span');
      const val = document.createElement('span');
      
       maincontainer.style.border = 'solid';
      // div.style.borderStyle.color = "white";
      

      label.textContent = itemobj.label;
      val.textContent = itemobj.data;

      div.appendChild(label);
      div.appendChild(val);
      maincontainer.appendChild(div);
       
  });
}

    else{
          alert("Time zone could not be found.");
    }
}



document.addEventListener('DOMContentLoaded',fetchuserlocation); 
btn.addEventListener("click",bottomDetails);


