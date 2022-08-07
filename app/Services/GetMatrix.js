import User from "App/Models/User"

export default async function GetGeneology(myId){

    const childArray = []

    function getDataSourceMatrix(user, allUsers) {

        // console.log('Childsssss: ', user)


        const userChildren = allUsers.filter((usr) => usr.parent_id == user.id)

        console.log('User children: ', userChildren.length)

        userChildren.map((child) => {

            childArray.push({
                id: child.id,
                name: child.first_name + ' ' + child.last_name,
                title: child.email,
                parent_id: child.parent_id,
                ref_id: child.ref_id
            })

           return getDataSourceMatrix(child, allUsers)

        })
    }

    const authUser = await User.query().where('id', myId).preload('children').first()

    const allUsers = await User.query().where('id', '>', myId).where('isadmin', '!=', true).preload('children')

    // allUsers.map((user) => console.log('sdfgfg: ', user.email))

    // console.log('All users: ', authUser)
    getDataSourceMatrix(authUser, allUsers)

    console.log('Child array 1: ', childArray)


    //Make the geneology tree

    function makeTree(usersArray, parentId, maxDepth, currentDepth = 0) {

        console.log('User Array ffffffff: ', usersArray)

        const childFilter = usersArray.filter((childData) => childData.parent_id == parentId)

        var nextDepth = ++currentDepth;
        // console.log('ChildFilter: ', childFilter)
        const childTree = childFilter.reduce((tree, userData) => {

            if (maxDepth > currentDepth) {
                return [
                    ...tree,
                    {
                        ...userData,
                        children: makeTree(usersArray, userData.id, maxDepth, nextDepth),
                    },

                ]

            }

        }, [])

        return childTree
    }

    const maxDepth = 8

    const root = makeTree(childArray, myId, maxDepth)

    console.log('Child array 2: ', root)



    return {
        id: authUser.id,
        name: authUser.first_name + ' ' + authUser.last_name,
        title: authUser.email,
        ref_id: authUser.ref_id,
        children: root
    }
}