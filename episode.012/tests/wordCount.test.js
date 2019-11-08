import { expect } from 'chai'
import wordCount from '../src/wordCount'

describe(':: wordCount', () => {
    it('olly olly in come free', () => {
        expect(wordCount("olly olly in come free")).eql([["olly", 2], ["in", 1], ["come", 1], ["free", 1]])
    })
    it('make it happen', () => {
        expect(wordCount("make it happen")).eql([["make", 1], ["it", 1], ["happen", 1]])
    })
    it('Who is who', () => {
        expect(wordCount("Who is who")).eql([["who", 2], ["is", 1]])
    })
})