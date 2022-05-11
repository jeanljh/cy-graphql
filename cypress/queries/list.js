class List {
    createList = `mutation createListMutation($name: String) {
        list: createList(name: $name) {
            id
            name
            position
            __typename
        }
    }`

    deleteList = `mutation deleteListMutation($id: ID!) {
        success: deleteList(id: $id)
    }`

    varCreateList(listName) {
        return {
            name: listName
        }
    }

    varDeleteList(listId) {
        return {
            id: listId
        }
    }
}

export default new List()