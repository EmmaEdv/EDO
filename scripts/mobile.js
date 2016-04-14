"use strict";function checkOrientation(){$(window).innerWidth()>$(window).innerHeight()?($max=$(window).height(),$portrait=!1):($max=$(".hero-unit").width(),$portrait=!0)}function changeImageSize(t,i){var e,o,a;switch(t){case 1:e="#firstImage",o="#firstZoomIcon",a="#firstImageText";break;case 2:e="#secondImage",o="#secondZoomIcon",a="#secondImageText";break;case 3:e="#thirdImage",o="#thirdZoomIcon",a="#thirdImageText"}!i&&$portrait?($(e).width(.4*$max),$(e).height("auto"),$(o).css("margin-top",$(e).height()-15)):i&&$portrait?($(e).width($max),$(e).height("auto"),$(o).css("margin-top",-22)):i||$portrait?i&&!$portrait&&($(e).height(.8*$max),$(e).width("auto"),$(o).css("margin-top",$(e).height()-15)):($(e).height(.4*$max),$(e).width("auto"),$(o).css("margin-top",$(e).height()-15)),$(a).width($(e).width()),$(o).css("left",$(e).width()-15)}function setVideoSize(){$("#video").width(.9*$max),$("#video").height(.75*$("#video").width())}function onImgClick(t){var i,e,o;switch(t){case 1:i="#firstImage",e="#firstZoomIcon";break;case 2:i="#secondImage",e="#secondZoomIcon";break;case 3:i="#thirdImage",e="#thirdZoomIcon"}$(i).click(function(){$(i).width()>=.8*$max?($(e).attr("src","images/zoom_in_s.png"),o=!1):($(e).attr("src","images/zoom_out_s.png"),o=!0),changeImageSize(t,o)})}function onExplanationClick(t){var i,e;switch(t){case 1:i="#firstExplanation",e="#firstBubble";break;case 2:i="#secondExplanation",e="#secondBubble"}$(i).click(function(){$(e).fadeTo("fast",.1).fadeTo("fast",1)})}function setAllImages(){for(var t=1;nrOfImages>=t;t++)changeImageSize(t,!1)}var $max,$portrait,nrOfImages=3;$(window).resize(function(){checkOrientation(),setAllImages(nrOfImages),setVideoSize()}),$(document).ready(function(){checkOrientation(),setAllImages(nrOfImages),setVideoSize(),onImgClick(1),onImgClick(2),onImgClick(3),onExplanationClick(1),onExplanationClick(2)}),$(document).on("touchend mouseup",function(t){var i=$(".bubbleTop");i.is(t.target)||0!==i.has(t.target).length||i.hide()});