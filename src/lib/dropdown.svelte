<script>
    import { onMount } from 'svelte'
    export let list, ref
    let active = false
    // setContext('active', false)
    $: console.log(active, list.title)
    const pageClickHandler = ({ target }) => {
        if (active && ref && !ref.contains(target)) {
            active = false;
        }
    };

    onMount(() => {
        if (parent) {
            parent.addEventListener("click", pageClickHandler);
        }

        return () => {
            if (parent) {
                parent.removeEventListener("click", pageClickHandler);
            }
        };
    });
</script>
<svelte:window on:click="{pageClickHandler}" />
<div class="dropdown">
    <button on:click={() => active = !active} bind:this={ref}>{list.title}</button>
    <ul class:active>
        {#each list.links as link}
            <a href={link.url}><li>{link.text}</li></a>
        {/each}
    </ul>
</div>
<style>
    div {
        position: relative;
    }
    ul {
        z-index: 9001;
        transition: 250ms;
        position: absolute;
        top: 45px;
        left: 0;
        list-style-type: none;
        border: 1px solid var(--fg);
        margin: 0;
        padding: 3px;
        background: var(--bg);
    }
    ul:not(.active){
        pointer-events: none;
        opacity: 0.01;
    }
    .active {
        opacity: 0.99;
    }
    a {
        display: flex;
        padding: 8px;
        margin: 3px;
        color: inherit;
        text-decoration: none;
        border: 1px solid rgba(var(--fgr), 0.1);
    }
    a:hover {
        border: 1px solid rgba(var(--fgr), 1);

    }
</style>
