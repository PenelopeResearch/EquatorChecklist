this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/equatorQuestion.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '  <h4>Which reporting guidelines are relevant to my work?</h4>\n  <div class=\'question\' >\n    <p class=\'questionText\'>' +
((__t = ( text )) == null ? '' : __t) +
'</p>\n  </div>\n';

}
return __p
};

this["JST"]["assets/templates/equatorResult.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (name) { ;
__p += '\n<h4>Guidelines Identified</h4>\n';
 } else { ;
__p += '\n<h4>Guidelines Not Identified</h4>\n';
 } ;
__p += '\n<div id=\'resultBody\'>\n  ';
 if (name) { ;
__p += '\n    ';
 if (list) { ;
__p += '\n      <p>According to your answers, the ' +
__e( name ) +
' guidelines are applicable to your work. Here\'s a checklist for those guidelines.</p>\n      <p>You should attach a completed version of this checklist when you submit your manuscript to a publisher. </p>\n      <a href=\'' +
__e( list ) +
'\' target="_blank" class=\'btn\'>Complete This Checklist</a>\n    ';
 } else { ;
__p += '\n      <p>According to your answers, the ' +
__e( name ) +
' guidelines are applicable to your work. You can find more information on the EQUATOR Network website.</p>\n      <a href=\'' +
__e( info ) +
'\' target="_blank" class=\'btn\'>Go to Guidelines</a>\n    ';
 } ;
__p += '\n    ';
 if (flowchart) { ;
__p += '\n      <p>You also need to fill out this ' +
__e( type ) +
' flow diagram and include it as a figure in your manuscript.</p>\n      <a href=\'' +
__e( flowchart ) +
'\' target="_blank" class=\'btn\'>Include this Flowchart</a>\n    ';
 } ;
__p += '\n    ';
 if (extension) { ;
__p += '\n      <p>You can find more info on the <a href=\'' +
__e( info ) +
'\' target=\'_blank\'>EQUATOR Network</a> website along with <a href=\'' +
__e( extension ) +
'\' target=\'_blank\'>extensions</a> which you may find useful.</p>\n    ';
 } else if (list) { ;
__p += '\n      <p>You can find more info on the <a href=\'' +
__e( info ) +
'\' target=\'_blank\'>EQUATOR Network</a> website.</p>\n    ';
 } ;
__p += '\n  ';
 } else { ;
__p += '\n    <p>We are unable to determine your report type from your responses. Click <a href="http://www.equator-network.org/reporting-guidelines/" target="_blank">here</a> to search the EQUATOR Library of Reporting Guidelines using keywords or free text.</p>\n  ';
 } ;
__p += '\n</div>\n';

}
return __p
};

this["JST"]["assets/templates/guidelineQuestion.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class=\'question\' >\n  <p class=\'questionText\'>' +
((__t = ( text )) == null ? '' : __t) +
'</p>\n</div>\n';

}
return __p
};

this["JST"]["assets/templates/guidelineResult.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (name) { ;
__p += '\n<h4>Guidelines Identified</h4>\n';
 } else { ;
__p += '\n<h4>Guidelines Not Identified</h4>\n';
 } ;
__p += '\n<div id=\'resultBody\'>\n  ';
 if (name) { ;
__p += '\n    ';
 if (list) { ;
__p += '\n      <p>According to your answers, the ' +
__e( name ) +
' guidelines are applicable to your work. Here\'s a checklist for those guidelines.</p>\n      <p>You should attach a completed version of this checklist when you submit your manuscript to a publisher. </p>\n      <a href=\'' +
__e( list ) +
'\' target="_blank" class=\'btn\'>Complete This Checklist</a>\n    ';
 } else { ;
__p += '\n      <p>According to your answers, the ' +
__e( name ) +
' guidelines are applicable to your work. You can find more information on the EQUATOR Network website.</p>\n      <a href=\'' +
__e( info ) +
'\' target="_blank" class=\'btn\'>Go to Guidelines</a>\n    ';
 } ;
__p += '\n    ';
 if (flowchart) { ;
__p += '\n      <p>You also need to fill out this ' +
__e( type ) +
' flow diagram and include it as a figure in your manuscript.</p>\n      <a href=\'' +
__e( flowchart ) +
'\' target="_blank" class=\'btn\'>Include this Flowchart</a>\n    ';
 } ;
__p += '\n    ';
 if (extension) { ;
__p += '\n      <p>You can find more info on the <a href=\'' +
__e( info ) +
'\' target=\'_blank\'>EQUATOR Network</a> website along with <a href=\'' +
__e( extension ) +
'\' target=\'_blank\'>extensions</a> which you may find useful.</p>\n    ';
 } else if (list) { ;
__p += '\n      <p>You can find more info on the <a href=\'' +
__e( info ) +
'\' target=\'_blank\'>EQUATOR Network</a> website.</p>\n    ';
 } ;
__p += '\n  ';
 } else { ;
__p += '\n    <p>We are unable to determine your report type from your responses. Click <a href="http://www.equator-network.org/reporting-guidelines/" target="_blank">here</a> to search the EQUATOR Library of Reporting Guidelines using keywords or free text.</p>\n  ';
 } ;
__p += '\n</div>\n';

}
return __p
};

this["JST"]["assets/templates/result.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="panel ' +
__e( panelType ) +
'" data-result=\'' +
__e( resultIndex ) +
'\' onclick="resultSelected(this)">\n  <div class="panel-heading" role="tab" id="panel' +
__e( resultIndex ) +
'">\n    <h4 class="panel-title">\n        ' +
__e( title ) +
'\n      </a>\n    </h4>\n  </div>\n  ';
 if (!passed) { ;
__p += '\n    <div class="panel-body">\n      ' +
__e( description ) +
'\n    </div>\n  ';
 } ;
__p += '\n</div>\n';

}
return __p
};