<script>
    import { goto } from '$app/navigation';
    let artista = ''
    let cancion = ''
    let mensaje = 'Todos los campos son necesarios'
    let show = false

    let submit = () => {
        if (artista === '' || cancion === '') {
            show = true
        } else {
            goto(`${artista}-${cancion}`)
        }
    }
</script>

<h1 class="mt-9 py-5 text-5xl" >Buscar letra de canciones</h1>

    {#if show}
        <h1 class="text-2xl text-red-500" >{mensaje}</h1>
    {/if}

<div class="mt-4 mb-2">
    <div class="mb-4">
        <label for="artista" class="block text-lg font-bold">Artista</label>
        <input 
            type="text" 
            id="artista" 
            placeholder="Nombre del artista" 
            bind:value={artista} 
            class="w-full rounded-md text-lg p-4 border-2 mt-2"
        />
    </div>

    <div class="mb-4">
        <label for="cancion" class="block text-lg font-bold">Canción</label>
        <input 
            type="text" 
            id="cancion" 
            placeholder="Nombre de la canción" 
            bind:value={cancion} 
            class="w-full rounded-md text-lg p-4 border-2 mt-2"
        />
    </div>

    <!-- <a href={`${artista}-${cancion}`} class="bg-stone-800 color text-white font-bold py-2 px-4 rounded text-lg" type="submit">Buscar</a> -->
   
    <button class="bg-stone-800 color text-white font-bold py-2 px-4 rounded text-lg" on:click={submit}>Buscar</button>
</div>