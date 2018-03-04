import 'bootstrap'
import './scss/main.scss';
import 'backbone';
var view = require('./js/Task/View/TasksView');
$(document).ready(function () {
   new view();
});
