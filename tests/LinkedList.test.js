const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const Chai = require('chai');
const LinkedList = require('../src/LinkedList.js');

const expect = Chai.expect;
Chai.use(sinonChai);

describe('LinkedList', function () {
    let linkedList;

    beforeEach(function () {
        linkedList = new LinkedList();
    });

    describe('print()', function () {
        it('should not print anything for an empty list', function () {
            const log = sinon.fake();

            linkedList.print(log);

            expect(log).to.not.have.been.called;
        });

        it('should print list in proper order', function () {
            const log = sinon.fake();

            linkedList.append(5);
            linkedList.append(10);
            linkedList.prepend(3);

            linkedList.print(log);

            expect(log.callCount).to.equal(3);
            expect(log.getCall(0).args[0]).to.equal(3);
            expect(log.getCall(1).args[0]).to.equal(5);
            expect(log.getCall(2).args[0]).to.equal(10);
        });

        it('should print list in proper order', function () {
            const log = sinon.fake();

            linkedList.prepend(5);
            linkedList.prepend(10);
            linkedList.append(3);

            linkedList.print(log);

            expect(log.callCount).to.equal(3);
            expect(log.getCall(0).args[0]).to.equal(10);
            expect(log.getCall(1).args[0]).to.equal(5);
            expect(log.getCall(2).args[0]).to.equal(3);
        });
    });

    describe('prepend()', function () {
        it('should accurately prepend on an empty list', function () {
            linkedList.prepend(10);

            expect(linkedList.head).to.not.be.null;
            expect(linkedList.head.value).to.equal(10);
            expect(linkedList.head.next).to.be.null;
        });

        it('should accurately prepend on a non-empty list', function () {
            linkedList.prepend(5);
            linkedList.prepend(10);
            linkedList.prepend(15);

            expect(linkedList.head).to.not.be.null;
            expect(linkedList.head.value).to.equal(15);
            expect(linkedList.head.next).to.not.be.null;
            expect(linkedList.head.next.value).to.equal(10);
            expect(linkedList.head.next.next).to.not.be.null;
            expect(linkedList.head.next.next.value).to.equal(5);
            expect(linkedList.head.next.next.next).to.be.null;
        });
    });

    describe('append()', function () {
        it('should accurately append on an empty list', function () {
            linkedList.append(10);

            expect(linkedList.head).to.not.be.null;
            expect(linkedList.head.value).to.equal(10);
            expect(linkedList.head.next).to.be.null;
        });

        it('should accurately append on a non-empty list', function () {
            linkedList.append(5);
            linkedList.append(10);
            linkedList.append(15);

            expect(linkedList.head).to.not.be.null;
            expect(linkedList.head.value).to.equal(5);
            expect(linkedList.head.next).to.not.be.null;
            expect(linkedList.head.next.value).to.equal(10);
            expect(linkedList.head.next.next).to.not.be.null;
            expect(linkedList.head.next.next.value).to.equal(15);
            expect(linkedList.head.next.next.next).to.be.null;
        });
    });

    describe('get()', function () {
        it('should have a "get" method', function () {
            expect(linkedList).to.have.property('get');
        });

        it('should throw an exception for an index < 0', function () {
            expect(() => linkedList.get(-1)).to.throw();
        });

        it('should throw an exception for an index < 0', function () {
            linkedList.append(5);

            expect(() => linkedList.get(-1)).to.throw();
        });

        it('should throw an exception for an index > the size of the linked list', function () {
            expect(() => linkedList.get(0)).to.throw();
        });

        it('should throw an exception for an index > the size of the linked list', function () {
            linkedList.append(5);
            linkedList.append(10);

            expect(() => linkedList.get(2)).to.throw();
        });

        it('should return the value found at the given index', function () {
            linkedList.append('a');
            linkedList.append('b');
            linkedList.append('c');

            let result = linkedList.get(0);

            expect(result).to.equal('a');
        });

        it('should return the value found at the given index', function () {
            linkedList.append('a');
            linkedList.append('b');
            linkedList.append('c');

            let result = linkedList.get(2);

            expect(result).to.equal('c');
        });

        it('should return the value found at the given index', function () {
            linkedList.append('a');
            linkedList.append('b');
            linkedList.append('c');

            let result = linkedList.get(1);

            expect(result).to.equal('b');
        });
    });

    describe('find()', function () {
        it('should have a "find" method', function () {
            expect(linkedList).to.have.property('find');
        });

        it('should return -1 for not found values (empty list)', function () {
            expect(linkedList.find('a')).to.equal(-1);
        });

        it('should return -1 for not found values (non-empty list)', function () {
            linkedList.append('a');
            linkedList.append('b');
            linkedList.append('c');

            expect(linkedList.find('z')).to.equal(-1);
        });

        it('should return the index for a found value (at the start)', function () {
            linkedList.append('a');
            linkedList.append('b');
            linkedList.append('c');

            expect(linkedList.find('a')).to.equal(0);
        });

        it('should return the index for a found value (at the end)', function () {
            linkedList.append('a');
            linkedList.append('b');
            linkedList.append('c');

            expect(linkedList.find('c')).to.equal(2);
        });

        it('should return the index for a found value (in the middle)', function () {
            linkedList.append('a');
            linkedList.append('b');
            linkedList.append('c');

            expect(linkedList.find('b')).to.equal(1);
        });

        it('should return the first index when duplicate values exist', function () {
            linkedList.append('a');
            linkedList.append('b');
            linkedList.append('a');
            linkedList.append('b');

            expect(linkedList.find('b')).to.equal(1);
        });
    });
});