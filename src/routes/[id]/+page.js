/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const id = params.id;
    const  data  = await fetch(`https://reqres.in/api/users/${id}`);
    const user = await data.json()
    console.log(user);
    return user
    
    
}