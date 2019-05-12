$(document).ready(function () {
    $.ajax({
        url: 'https://jsonblob.com/api/jsonBlob/6766327f-607d-11e9-95ef-9bcb815ba4a4',
        type: 'get',
        success: function (data) {

            for (let key in data) {
                //desktop view
                var li = $('<li></li>').attr("id", key).addClass("dropdownItems");
                var a = $('<a></a>').attr("href", "#").addClass("label").text(key);
                li.append(a);
                var subVal = data[key];
                var subDiv = $("<div></div>").attr("class", "dropdown-content hide");
                var arrow = $("<div></div>").attr("class", "dropdownArrow");
                var subUl = $("<ul></ul>").addClass("alignment");
                //  var subUl=$("<ul></ul>").addClass("hide alignment").hide();
                li.append(subDiv);
                subDiv.append(arrow);
                subDiv.append(subUl);
                for (let first in subVal) {
                    //  debugger;
                    var subLi = $("<li></li>");
                    var innerWrapper = $("<div></div>").attr("class", "linkContent");
                    var createh3 = $("<h3></h3>").text(subVal[first].title);
                    var createp = $("<p></p>").text(subVal[first]["sub-title"])
                    innerWrapper.append(createh3);
                    innerWrapper.append(createp);
                    subLi.append(innerWrapper);
                    subUl.append(subLi);
                }
                $("#menu").append(li);
            }

            $(".dropdownItems").hover(function () {
                var x = $(this).find(".dropdown-content");
                x.removeClass("hide");
            }, function () {
                var x = $(this).find(".dropdown-content");
                x.addClass("hide");
            });

            //Mobile view
            var hamburgerMenuWrapper = $("<div></div>").addClass("hamburgerMenuWrapper");
            var hamburgerMenu = $("<div></div><div></div><div></div>");
            hamburgerMenuWrapper.append(hamburgerMenu);
            $(".dropdown-list").append(hamburgerMenuWrapper);

            var navMenu = $("<div></div>").addClass("menuWrapper hide");
            $(".dropdown-list").append(navMenu);
            var close = $("<div>X</div>").addClass("closeIcon");
            navMenu.append(close);

            var itemWrapper = $("<div></div>").addClass("itemWrapper");
            navMenu.append(itemWrapper);
            
            for (let key in data) {
                var subVal = data[key];
                for (let first in subVal) {
                    var listItems = $("<div></div>").addClass("items").text(subVal[first].title);
                    itemWrapper.append(listItems);
                }


                $(".hamburgerMenuWrapper").click(function () {
                    var x = $(this).parent().find(".menuWrapper");
                    x.removeClass("hide");
                });
                $(".menuWrapper .closeIcon").click(function(){
                    var x = $(this).parent();
                    x.addClass("hide");
                })
            }

        },
        error: function () {
            console.log("error happened")
        }
    })


})

