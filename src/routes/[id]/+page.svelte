<!-- En +page.svelte -->
<script>
	export let data
    console.log(data);
</script>



<div class="flex justify-center items-center h-screen -mt-44">
    <h1 class='p-6 bg-gray-100 text-center rounded-md shadow-sm hover:shadow-md w-96'>
        <img src={data.data.avatar} alt="ima" class="w-32 h-32 mx-auto mb-4" />

        <div class="font-bold text-left">
            <span>Email:</span> <span class="text-gray-600" >{data.data.email}</span>
        </div>

        <div class="font-bold text-left">
            <span>First Name:</span> <span class="text-red-300" >{data.data.first_name}</span>
        </div>
        <div class="font-bold text-left">
            <span>Last Name:</span> <span class="text-blue-400" >{data.data.last_name}</span>
        </div>
    </h1>
</div>

