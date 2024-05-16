try {
  const data = await fetch("http://localhost:3000/users", {
    method: "POST",
    body: JSON.stringify({
      name: "John Doe",
      about: "hello here is my bio",
      followers_count: "1",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
} catch (error) {
  console.log(error);
}
