// tinySlide.js
// a quick multi-sliders with pagers
(function(root, factory) {

    if (typeof define === 'function' && define.amd) {
        define(function() {
            return factory(root);
        });
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        root.tinyslider = factory(root);
    }

})(this, function(root) {
    'use strict';

    var tinyslider = {};

    tinyslider.info = {
        "version": "1.1.0",
        "author": "Shaun Xiang-xiang Zeng",
        "update": "9/13/2015",
    };

    tinyslider.init = function(opts) {

        opts = opts || {};

        if (typeof options != "object") {
            opts = {};
        }

        var themeColor = opts.themeColor || "#848383",
            callback = opts.onClick || function() {},
            eles = document.getElementsByClassName("tinyslide");

        if (typeof callback != "function") {
            callback = function() {};
        }


        for (var i = 0; i < eles.length; i++) {
            var thisSlideGroup = eles[i],
                mainWrapperWidth = thisSlideGroup.clientWidth,
                directChildren = thisSlideGroup.children,
                wrapper = document.createElement("div");

            thisSlideGroup.style.width = mainWrapperWidth + "px";
            thisSlideGroup.style.overflowX = "hidden";

            // add classess to slides
            for (var a = 0; a < directChildren.length; a++) {
                directChildren[a].className += directChildren[a].className ? " tinyslide-slide" : "tinyslide-slide";
                directChildren[a].className += " " + a;
            }

            //move slides into a wrapper
            wrapper.className = "inner";
            wrapper.style.width = directChildren.length * 100 + "%";
            wrapper.style.position = "relative";
            wrapper.style.left = "0px";
            thisSlideGroup.appendChild(wrapper);

            var slides = thisSlideGroup.getElementsByClassName("tinyslide-slide");


            for (var l = 0; l < slides.length; l++) {
                wrapper.appendChild(slides[0]);
                slides[0].style.float = "left";
                slides[0].style.width = mainWrapperWidth + "px";
            }


            // add a pager sections
            var pagerWrapper = document.createElement("div");
            pagerWrapper.className = "pagers";
            thisSlideGroup.appendChild(pagerWrapper);


            var isAnimating = false;
            var thisAni = null;

            var changePage = function() {
                clearInterval(thisAni);

                var self = this;
                var pagers = thisSlideGroup.getElementsByClassName("pager");
                var thisEleIndex = null;

                for (var i = 0; i < pagers.length; i++) {
                    pagers[i].style.opacity = "0.3";
                    if (pager[i] == self) {
                        thisEleIndex = i;
                    }

                }

                this.style.opacity = "1";
                thisEleIndex = self.className.replace("pager", "").replace(" ", "");

                //animate slides
                var start = parseInt(wrapper.style.left.replace("px", ""));
                var end = -1 * thisEleIndex * mainWrapperWidth;

                if (start > end) {
                    thisAni = setInterval(animateIt, 10);
                } else if (start < end) {
                    thisAni = setInterval(animateIt, 10);
                } else {
                    return;
                }

                function animateIt() {
                    var move = 0;

                    if (start > end) {

                        move = move - 20
                        var distance = parseInt(wrapper.style.left.replace("px", ""));
                        wrapper.style.left = distance + move + "px";

                        if (distance <= end) {
                            wrapper.style.left = end + "px";
                            clearInterval(thisAni);
                        }

                    } else if (start < end) {
                        move = move + 20
                        var distance = parseInt(wrapper.style.left.replace("px", ""));
                        wrapper.style.left = distance + move + "px";

                        if (distance >= end) {
                            wrapper.style.left = end + "px";
                            clearInterval(thisAni);
                        }
                    }
                }

            };

            for (var e = 0; e < slides.length; e++) {
                var pager = document.createElement("div");
                pager.className = "pager " + e;
                pager.style.width = "12px";
                pager.style.height = "12px";
                pager.style.float = "left";
                pager.style.borderRadius = "800px";
                pager.style.marginLeft = "5px";
                pager.style.marginRight = "5px";
                pager.style.backgroundColor = themeColor;
                pager.style.opacity = "0.3";
                pager.style.cursor = "pointer";
                if (e == 0) {
                    pager.style.opacity = "1";
                }
                pagerWrapper.appendChild(pager);

                if (document.addEventListener) {
                    pager.addEventListener('click', changePage, false);
                } else {
                    pager.attachEvent('click', changePage);
                }

            }

            //style all elements
            var heights = [];

            for (var c = 0; c < slides.length; c++) {
                heights.push(slides[c].clientHeight);
            }

            var maxHeight = heights[0];
            var maxHeightIndex = 0;

            for (var f = 0; f < heights.length; f++) {
                if (heights[f] > maxHeight) {
                    maxHeightIndex = f;
                    maxHeight = heights[f];
                }
            }

            thisSlideGroup.style.height = slides[maxHeightIndex];

        }

    }

    return tinyslide;

});