const people = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
};
console.log(ages(people));
// ages(people);

function ages(lifespan) {

    for (key in people) {
        lifespan[key] = lifespan[key]['died'] - lifespan[key]['born'];

      
    }
    return lifespan;
}
