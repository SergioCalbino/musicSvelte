<script>
	import UserCard from '../components/userCard.svelte';
	import { users } from '../stores/userStore';
	let buscador = '';
	let filtro = [];

	$: {
		if (buscador) {
			filtro = $users.filter((user) => user.name.toLowerCase().includes(buscador.toLowerCase()))
		} else {
			filtro = [...$users]
		}
	}


	

</script>

<svelte:head>
	<title>Introduccion a Svelte Kit</title>
</svelte:head>


<center class="mt-9">
	<img src="/usuarios.jpg" alt="logo" width="250"/>
	<h1 class="bold text-5xl">
		USERS API
	</h1>

</center>

<input 
	type="text" 
	placeholder="Buscar" 
	bind:value={buscador}
	class="w-full rounded-md text-lg p-4 border-2"
	/>

<div class="py-5 grid gap-5 md:grid-cols-3" >
	{#each filtro as item }
		<UserCard user={item}/>
	{/each}

</div>

