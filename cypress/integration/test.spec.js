/// <reference types='cypress' />
import queryList from '../queries/list'
import queryItem from '../queries/item'
import data from '../fixtures/testdata.json'

describe('Test Suite', () => {
    let listId = ''
    let itemId = ''
    it('Test Create List', () => {
        cy.request({
            url: '/',
            method: 'POST',
            body: {
                query: queryList.createList,
                variables: queryList.varCreateList(data.listName)
            }
        })
        .its('body.data.list').then(({id, name}) => {
            expect(id).is.not.empty.and.not.null
            expect(name).to.eq(data.listName)
            listId = id ?? '1'
        })
    })
    it('Test Get Available List', () => {
        cy.request({
            url: '/',
            method: 'POST',
            body: {
                query: queryItem.homePage
            }
        })
        .its('body.data.lists')
        .should('have.length.gt', 0)
    })

    it('Test Create Item', () => {
        cy.request({
            url: '/',
            method: 'POST',
            body: {
                query: queryItem.createItem,
                variables: queryItem.varCreateItem(data.itemName, listId)
            }
        })
        .its('body.data.item')
        .then(({id, name}) => {
            expect(id).is.not.empty.and.not.null
            expect(name).to.eq(data.itemName)
            itemId = id
        })
    })

    it('Test Delete Item', () => {
        cy.request({
            url: '/',
            method: 'POST',
            body: {
                query: queryItem.deleteItem,
                variables: queryItem.varDeleteItem(itemId)
            }
        })
        .its('body.data.success')
        .should('eq', true)
    })

    it('Test Delete List', () => {
        cy.request({
            url: '/',
            method: 'POST',
            body: {
                query: queryList.deleteList,
                variables: queryList.varDeleteList(listId)
            }
        })
        .its('body.data.success')
        .should('be.true')
    })
})