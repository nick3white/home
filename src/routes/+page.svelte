<script>
    import '$lib/main.css'
    import { allLinks, searches } from '$lib'
    import Dropdown from '$lib/dropdown.svelte'
    import Search from '$lib/search.svelte'
</script>
<main>
    <div class="top">
        {#each allLinks as list}
            <Dropdown {list} />
        {/each}
    </div>
    <div class="bottom">
        {#each searches as search }
            <Search {search} />
        {/each}
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 70vw;
        height: 50vh;
        margin: 64px auto;
    }
    .top, .bottom {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }   
    input, button {
        height: 45px;
    }
</style>    
