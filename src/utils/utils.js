export default async function newUser(id) {
  try {
    const response = await fetch(`https://reqres.in/api/users/${id}`);
    return response.json();
  } catch (err) {
    console.log(err);
  }
}
