"use strict";function checkOrientation(){$(window).width()>$(window).height()?($max=$(window).height(),$portrait=!1):($max=$(".hero-unit").width(),$portrait=!0)}function setSecondImage(){!$largeImg&&$portrait?($("#secondImage").width(.3*$max),$("#secondImage").height("auto"),$("#secondZoomIcon").css("margin-top",$("#secondImage").height()-25)):$largeImg&&$portrait?($("#secondImage").width(.45*$max),$("#secondImage").height("auto"),$("#secondZoomIcon").css("margin-top",-35)):$largeImg||$portrait?$largeImg&&!$portrait&&($("#secondImage").width(.45*$max),$("#secondImage").height("auto"),$("#secondZoomIcon").css("margin-top",$("#secondImage").height()-25)):($("#secondImage").width(.3*$max),$("#secondImage").height("auto"),$("#secondZoomIcon").css("margin-top",$("#secondImage").height()-25)),$("#secondImageText").width($("#secondImage").width()),$("#secondZoomIcon").css("left",$("#secondImage").width()-25)}function setFirstImage(){!$firstIsLarge&&$portrait?($("#firstImage").width(.3*$max),$("#firstImage").height("auto"),$("#firstZoomIcon").css("margin-top",$("#firstImage").height()-25)):$firstIsLarge&&$portrait?($("#firstImage").width(.45*$max),$("#firstImage").height("auto"),$("#firstZoomIcon").css("margin-top",$("#firstImage").height()-220)):$firstIsLarge||$portrait?$firstIsLarge&&!$portrait&&($("#firstImage").width(.6*$max),$("#firstImage").height("auto"),$("#firstZoomIcon").css("margin-top",$("#firstImage").height()-320)):($("#firstImage").width(.3*$max),$("#firstImage").height("auto"),$("#firstZoomIcon").css("margin-top",$("#firstImage").height()-25)),$("#firstImageText").width($("#firstImage").width()),$("#firstZoomIcon").css("left",$("#firstImage").width()-25)}function setVideoSize(){$portrait?($("#video").width(.45*$max),$("#video").height(.75*$("#video").width())):($("#video").width(.45*$(".hero-unit").width()),$("#video").height(.75*$("#video").width()))}var $max,$portrait,$largeImg=!1,$firstIsLarge=!1;$(window).resize(function(){checkOrientation(),setFirstImage(),setSecondImage(),setVideoSize()}),$(document).ready(function(){checkOrientation(),$("#firstImage").width(.3*$max),$("#firstImageText").width($("#firstImage").width()),$("#firstZoomIcon").css("left",$("#firstImage").width()-25),$("#firstZoomIcon").css("margin-top",$("#firstImage").height()-25),$("#secondImage").width(.3*$max),$("#secondImageText").width($("#secondImage").width()),$("#secondZoomIcon").css("left",$("#secondImage").width()-25),$("#secondZoomIcon").css("margin-top",$("#secondImage").width()-25),setVideoSize(),$("#firstImage").click(function(){$("#firstImage").width()>=.4*$max?($("#firstZoomIcon").attr("src","images/zoom_in_s.png"),$firstIsLarge=!1):($("#firstZoomIcon").attr("src","images/zoom_out_s.png"),$firstIsLarge=!0),setFirstImage()}),$("#secondImage").click(function(){$("#secondImage").width()>=.4*$max?($("#secondZoomIcon").attr("src","images/zoom_in_s.png"),$largeImg=!1):($("#secondZoomIcon").attr("src","images/zoom_out_s.png"),$largeImg=!0),setSecondImage()}),$("#firstExplanation").click(function(){$("#firstBubble").fadeTo("fast",.1).fadeTo("fast",1)}),$("#secondExplanation").click(function(){$("#secondBubble").fadeTo("fast",.1).fadeTo("fast",1)})}),$(document).on("touchend mouseup",function(t){var e=$(".bubbleTop");e.is(t.target)||0!==e.has(t.target).length||e.hide()});