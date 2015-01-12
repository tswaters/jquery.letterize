/*
jquery.letterize built 2015-01-11T17:31:21-0800
Copyright (c) 2015 Tyler Waters

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/'use strict';

$.fn.letterize = function () {

  return $(this).each(function (i, item) {
    $(item).contents().each(iterate);
  });

  function iterate (index, node) {
    switch (node.nodeType) {
      case Node.ELEMENT_NODE:
        $(node).contents().each(iterate);
      break;
      case Node.TEXT_NODE:
        letterize($(node));
      break;
    }
  }

  function letterize ($node) {
    $node.replaceWith($node.text().split('').map(function (letter) {
      return $('<span>' + letter + '</span>');
    }));
  }

};
