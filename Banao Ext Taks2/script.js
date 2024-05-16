//function to get data
async function getThedata() {
  const name =
    document.querySelector(
      ".text-heading-xlarge.inline.t-24.v-align-middle.break-words"
    ).innerHTML || "-1";
  const location =
    document.querySelector(".text-body-small.inline.t-black--light.break-words")
      .innerHTML || "-1";
  const about =
    document.querySelector(".text-body-medium.break-words").innerHTML || "-1";
  const bio =
    document.querySelector(".text-body-medium.break-words").innerHTML || "-1";
  const followers_count =
    document.querySelector(
      "body > div:nth-child(48) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > main:nth-child(1) > section:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2) > span:nth-child(1)"
    ).innerHTML || 0;
  const connection_count = document.querySelector(
    "span[class='t-bold']"
  ).innerHTML;
  const url = window.location.href;

  const data = {
    name: name.trim(),
    location: location.trim(),
    about: about.trim(),
    bio: bio.trim(),
    followers_count: followers_count,
    connection_count: connection_count,
    url: url,
  };

  console.log(data);

  var temp = data.followers_count;
  data.followers_count = 0;
  for(var i=0;i<temp.length;i++){
    if(temp[i]==' '){
      break;
    }
    else if(temp[i]>='0' && temp[i] <='9'){
      data.followers_count = data.followers_count*10 + (temp[i]-'0');
    }
  }
  data.followers_count = parseInt(data.followers_count);

  temp = data.connection_count;
  data.connection_count = 0;
  for(var i=0;i<temp.length;i++){
    if(temp[i]==' '){
      break;
    }
    else if(temp[i]>='0' && temp[i] <='9'){
      data.connection_count = data.connection_count*10 + (temp[i]-'0');
    }
  }
  data.connection_count = parseInt(data.connection_count);


  console.log(data);

  try {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(await response.json());
  } catch (error) {
    console.error("Error:", error);
  }
}

getThedata();
