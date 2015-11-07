var currentPage = 0;
var previousPages = [];

var handleResponse = function (result) {
  $('.previous').prop('disabled', false);
  $('.restart').prop('disabled', false);

  previousPages.push(currentPage);
  var isNumeric = /^\d+$/.test(result);
  if (isNumeric) {
    currentPage = result;
    renderQuestion(currentPage);
  } else {
    renderAnswer(result);
  }
}

var yes = function() {
  handleResponse(questions[currentPage].yes);
}

var no = function () {
  handleResponse(questions[currentPage].no);
}

var previous = function () {
  if (previousPages.length > 1) {
    currentPage = previousPages.pop();
    renderQuestion(currentPage);
  } else {
    restart();
  }
}

var restart = function () {
  previousPages = [];
  currentPage = 0;
  $('.start').css('display', 'none');

  $('#options .btn').css('visibility', 'visible');

  $('.previous').prop('disabled', true);
  $('.restart').prop('disabled', true);
  renderQuestion(currentPage);
}

var renderQuestion = function( pageIndex ) {

  $('.yes').css("visibility", "visible");
  $('.no').css("visibility", "visible");

  var entry = questions[pageIndex];
  var rendered = this["JST"]["assets/templates/equatorQuestion.html"](entry);

  $('#page').html(rendered);
}

var renderAnswer = function ( name ) {

  $('.yes').css("visibility", "hidden");
  $('.no').css("visibility", "hidden");

  var entry = results[name];
  var rendered = this["JST"]["assets/templates/equatorResult.html"](entry);

  $('#page').html(rendered);
}
