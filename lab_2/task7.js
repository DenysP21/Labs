const fn = () => {
    const a = {name: ''}
    let b = {name: ''}
    a.name = 'Денис'
    b.name = 'Денис'
    b = {ThisWork: true}
    console.dir(a)
    console.dir(b)
}
fn()