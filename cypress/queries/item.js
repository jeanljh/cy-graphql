
class Item {
    homePage =
        `query homePageQuery {
            lists {
                id
                name
                position
                items {
                    id
                    name
                    position
                    listId
                    __typename
                }
            }
            __typename
        }`

    createItem =
        `mutation createItemMutation($input: createItemInput) {
            item: createItem(input: $input) {
                id
                name
                listId
                position
                __typename
            }
        }
        `
    deleteItem =
        `mutation deleteItemMutation($id: ID!) {
        success: deleteItem(id: $id)
        }
        `
    varCreateItem(itemName, listId) {
        return {
            input: {
                name: itemName,
                listId: listId
            }
        }
    }

    varDeleteItem(itemId) {
        return {
            id: itemId
        }
    }
}

export default new Item()
