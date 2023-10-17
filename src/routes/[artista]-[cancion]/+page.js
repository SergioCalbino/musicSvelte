/** @type {import('./$types').PageLoad} */
export async function load ({fetch, params }) {
    const artista = params.artista
    const cancion = params.cancion
    const res = await fetch(`https://api.lyrics.ovh/v1/${artista}/${cancion}`)
    const letra = await res.json()
    console.log(letra);
    return {
         
            letra,
            artista,
            cancion

        
    }
}