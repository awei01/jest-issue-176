'use strict';
jest.dontMock('../lib/foo');
describe('strange behavior with configs.testPathDirs and jest.dontMock()', function() {
	var foo, lodash, S;
	beforeEach(function() {
		foo = require('../lib/foo');
		lodash = require('lodash');
		S = require('string');
	});
	it('should not mock my foo module', function() {
		expect(foo.getFoo()).toBe('foo');
	});
	it('should properly mock string module', function() {
		expect(S('foo')).toBe(undefined);
	});
	it('when jest.dontMock() called with different module, this module is also not mocked even though I did not explicitly call .dontMock() on it', function() {
		expect(lodash.assign.mock.calls).toEqual([]);
	});
});
