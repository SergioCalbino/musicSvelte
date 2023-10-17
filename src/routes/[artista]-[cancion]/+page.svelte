<script>
   export let data
   
    // export let artista
    //  export let cancion
    console.log(data);
    const { letra } = data
    const { artista } = data
    const { cancion } = data
    console.log(letra);
  
</script>

<div>
    <h1 class="mt-9 py-5 text-5xl uppercase" >
        {artista}
    </h1>
    <h3 class="bold text-3xl uppercase" >
        {cancion}
    </h3>
    <p class="text-center mt-5" >
        {#if letra.error}
            <h2>Letra no encontrada</h2>   
            {:else}
            {letra.letra}         
        {/if}
    </p>
</div>