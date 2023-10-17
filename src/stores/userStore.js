import { writable } from "svelte/store";
export const users = writable([])


export const fetUsers = async () => {
    const url = await fetch('https://reqres.in/api/users')
    const { data } = await url.json()
    console.log(data);
    const loadUsers = data.map((data, index) => {
        return {
            name: data.first_name,
            id: data.id,
            avatar: data.avatar
        }
    });
    users.set(loadUsers)

}

// export const loadUser = async(id) => {
//     console.log(id);
//     try {
//         const urlUser = await fetch(`https://reqres.in/api/users/${id}`);
//         const { data } = await urlUser.json();
//         console.log(data);
//         return data;
//     } catch (error) {
//         console.error(error);
//     }
//     user.set(loadUser)
// }

fetUsers();
// loadUser()