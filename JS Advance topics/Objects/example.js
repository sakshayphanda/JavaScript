
function create() {
    const obj = {};

    obj['increment'] = 'abc';
    obj['i'] = function() {};
    return obj;
}

const user1 = create()
const user2 = create()


console.log(user1['increment'] === user2['increment']);