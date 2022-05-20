export default function activeLink(path, cls = 'active') {
    return route().current(path) ? cls : false
}
