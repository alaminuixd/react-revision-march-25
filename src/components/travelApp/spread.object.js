const user = {
  name: "Alice",
  age: 25,
  location: "New York",
};

function showUserInfo({ name, age, location }) {
  console.log(`Name: ${name}, Age: ${age}, Location: ${location}`);
}

// Spreading the user object
showUserInfo({ ...user });
