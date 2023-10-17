<!-- En UserCard.svelte -->
<script>
    export let user;
    const card = 'p-6 bg-gray-100 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center';
    const circulo = 'rounded-full border border-gray-100 shadow-sm';
    
</script>

<!-- <button on:click={()=> {userId()}} class={card}>
    <img src={user.avatar} alt="imagen" class={circulo}/>
    <h2>ID: {user.id}</h2>
</button> -->
<a href={`/${user.id}`} class={card}>
    <img src={user.avatar} alt="imagen" class={circulo}/>
    <h2>ID: {user.id}</h2>
</a>
