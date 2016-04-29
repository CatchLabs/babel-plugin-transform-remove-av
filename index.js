module.exports = function () {
    return {
        visitor: {
            VariableDeclarator: function(path) {
                var id = path.node.id;
                if (id.name === 'AV') {
                    console.log('removing: ', id);
                    path.remove();
                }
            }
        }
    };
};