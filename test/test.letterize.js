/*eslint-env mocha*/
/*global chai*/

'use strict';
var expect = chai.expect;

describe('Letterize', function () {

  var $element;

  it('Should contain the right number of elements', function () {
    var letters = 'Testing Various Letters';
    $element = $('<div>' + letters + '</div>').letterize();
    expect($element.children().length).to.equal(letters.length);

    describe('Verify contents of each element', function () {
      $element.children().each(function (index, item) {
        it('Element #' + index + ' should equal ' + letters[index], function () {
          expect($(item).text()).to.equal(letters[index]);
        });
      });
    });

  });

  it('Should recurse properly into element nodes', function () {
    $element = $('<div>1<span id="inner">2</span>3</div>').letterize();
    expect($element.children().length).to.equal(3);
    expect($element.find('#inner').children().length).to.equal(1);
  });

});
