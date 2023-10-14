<script>
    export let search
</script>


<form action={search[0]} method="get">
    <input name="q">
    <button type="submit">{search[1]}</button>
</form>


<style>
    input {

        color: rgba(var(--fgr), 1);
        padding: 10px 16px;
        font-size: 18px;
        background: var(--bg);
        border: 1px solid rgba(var(--fgr), 0.5);
        transition: 250ms;
    }
    form:hover input, form:hover button,
    form:focus input, form:focus button,
    form:active input, form:active button {
        color: rgba(var(--fgr), 1);
        border: 1px solid rgba(var(--fgr), 1);
    }
</style>
