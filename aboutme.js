const fetchName = () => {
    console.log("fetching name")
    setTimeout(() => {
     const data = "my name is lucas.w"
     displayName(data)
    },2000)
    setTimeout(() => {
    console.log("fetching age")
    setTimeout(() => {
        console.log("waiting 2 seconds")
     const data = "my age is 26"
     displayName(data)
    },2000)
},4000);
    setTimeout(() => {
    console.log("fetching location")
    setTimeout(() => {
        console.log("waiting 2 seconds")
     const data = "my location is sweden"
     displayName(data)
    },2000)
},7000);
    setTimeout(() => {
    console.log("fetching hobbies")
    setTimeout(() => {
        console.log("waiting 2 seconds")
     const data = "my big hobbies are coding and gaming"
     displayName(data)
    },2000)
},10000);
};

const displayName = (data) => {
    console.log(data)
};

fetchName(displayName);

