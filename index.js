import "./styles.css";
import $ from "jquery";
$(function () {
  if (!$(".envelope").hasClass("open")) {
    $(".envelope").click(function () {
      $(this).removeClass("new").addClass("open");
    });
  }
});
