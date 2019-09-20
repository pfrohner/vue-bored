export function fetchRandomActivity() {
    console.log('aa')
    // TODO: make sure 'fetch' is supported (looking at you, IE), otherwise use axios instead.
    return fetch(
        `http://www.boredapi.com/api/activity/`
    ).then(res => res.json())
}
